import api from "./../pages/api/api"
import Link from 'next/link'
export default function cardAutor(props) {
  const deletar = async () => {
    const response = await api.delete(`/autores/${props.id}`)
    console.log(response)
  }
  return (
    <>
      <div>
        <div>{props.id}</div>
        <div>{props.nome}</div>
        <div>{props.sobrenome}</div>
        <div>{props.data_nascimento}</div>
        <button onClick={deletar}>Deletar</button>
        <Link href={`/autor/${props.id}`}>
        <a>Mais Detalhes</a>  
        </Link>
      </div>
    </>
  )
}