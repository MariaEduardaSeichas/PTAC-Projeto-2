import api from "./../pages/api/api"
export default function cardAutor(props) {
  const deletar = () => {
    const response = api.delete("/deletar", {data: {id:props.id}})
  }
  return (
    <>
      <div>
        <div>{props.nome}</div>
        <div>{props.sobrenome}</div>
        <div>{props.data_nascimento}</div>
        <button onClick={deletar}>Deletar</button>
      </div>
    </>
  )
}