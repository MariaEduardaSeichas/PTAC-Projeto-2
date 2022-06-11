import api from './../api/api'

export async function getServerSideProps(ctx) {
  const { id } = ctx.params
  const response = await api.get(`/livros/${id}`)
  const livro = response.data
  return {
    props: {
      livro
    }
  }
}

export default function MoreDetails({ livro }) {
  return (

    <>
      <h1>
        {livro.titulo}
        {livro.editora}
      </h1>
    </>
  )
}