import Head from 'next/head'
import Menu from '../components/menu'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import Router from 'next/router'
import api from "./api/api"
export default function Cadastro() {
  const [formValues, setFormValues] = useState({
    nome: "",
    sobrenome: "",
    data_nascimento: "",
  })

  const handleSubmite = async (e) => {
    e.preventDefault()
    const response = await  api.post("/inserir", formValues)
    console.log(response)
    Router.push("/")
  }
 
  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setFormValues({...formValues, [id]: value})
    console.log(formValues)
  }
  return (
    <div className={styles.container}>

      <Menu />
      <main className={styles.main}>
        <h3 className={styles.title}>
          Local de Cadastro
				</h3>

        <p></p>

        <form onSubmit={handleSubmite}>
          <input id="nome" type="text" name="nome" placeholder="Digite o nome do autor" onChange={handleInputChange}/>
          <input id="sobrenome" type="text" name="sobrenome" placeholder="Digite o sobrenome de autor" onChange={handleInputChange} />
          <input id="data_nascimento" type="date" name="data_publicacao" placeholder="Digite a data de nascimento" onChange={handleInputChange} />
          
          <input type="submit" value="Enviar" />

        </form>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}