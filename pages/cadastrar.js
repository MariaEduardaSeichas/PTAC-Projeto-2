import Head from 'next/head'
import Menu from '../components/menu'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import Router from "next/router"
import api from "./api/api"
export default function Cadastro() {
  const [formValues, setFormValues] = useState({
    titulo: "",
    autorId: "",
    editora: "",
    data_publicacao: "",
    preco: "",
  })
  const handleSubmite = async (e) => {
    e.preventDefault()
    const response = await  api.post("/livros", formValues)
    console.log(response)
    Router.push("/")
  }
  const handleInputChange = (e) => {
    const {id, value} = e.target;
        console.log(formValues)

    setFormValues({...formValues, [id]: value})
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Além do livro</title>
        <meta name="description" content="Generated by create next app" />
    <link rel="icon"href="image/mundo.png"/>
      </Head>
			<Menu />
      <main className={styles.main}>
      <h3 className={styles.title}>
        <h4 className= {styles.cad}></h4>
          Entre aqui para se cadastrar e conhecer todas as nossas obras
				</h3>
    <p></p>
  
     <form 
       className={styles.formula}
       onSubmit={handleSubmite}>
       <div className={styles.for}>
          <input id="titulo" type="text" name="titulo" placeholder="Digite o titulo do livro" onChange={handleInputChange}/>
          <input id="autorId" type="text" name="autor" placeholder="Digite o id de autor" onChange={handleInputChange}/>
          <input id="editora" type="text" name="editora" placeholder="Digite a editora" onChange={handleInputChange}/>
          <input id="data_publicacao" type="date" name="data_publicacao" placeholder="Digite a data de publicação" onChange={handleInputChange}/>
          <input id="preco" type="text" name="preco" placeholder="Digite o valor" onChange={handleInputChange}/>

      <input className={styles.botao}type="submit" value="Enviar" />
</div>
        </form>
       </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}