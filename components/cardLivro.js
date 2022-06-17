import api from "./../pages/api/api"
import Link from 'next/link'
export default function cardLivro(props) {
  const deletar = async () => {
    const response =
      await api.delete(`/livros/${props.id}`)
        console.log(response.data)

  }
  return (
    <>
      
      <div>
                <div>{props.id}</div>

        <div>{props.autor}</div>
        <div>{props.titulo}</div>
        <div>{props.editora}</div>
        <div>{props.data_publicacao}</div>
        <div>{props.preco}</div>
        <button onClick={deletar}>Deletar</button>
        <Link href={`/livros/${props.id}`}>
        <a>Mais Detalhes</a>  
        </Link>
      </div>
    </>
  )
}