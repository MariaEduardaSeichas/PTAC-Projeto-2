
import api from './../api/api'

export async function getServerSideProps(ctx) {
  const { id } = ctx.params
  const response = await api.get(`/autores/${id}`)
  const autor = response.data
  return {
    props: {
      autor
    }
  }
}

export default function MoreDetails({ autor }) {
  return (

    <>
      <h1>
        {autor.nome}
                {autor.sobrenome}
                {autor.data_nascimento}

      </h1>
    </>
  )
}