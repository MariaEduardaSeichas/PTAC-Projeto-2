import api from "./../pages/api/api"
export default function cardLivro(props) {
  const deletar = () => {
    const response = api.delete("/deletar", {data: {id:props.id}})
  }
  return (
    <>
      <div>
        <div>{props.autor}</div>
        <div>{props.titulo}</div>
        <div>{props.editora}</div>
        <div>{props.data_publicacao}</div>
        <div>{props.preco}</div>
        <button onClick={deletar}>Deletar</button>
      </div>
    </>
  )
}