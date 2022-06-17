import Head from 'next/head'
import Menu from '../components/menu'
import styles from '../styles/Home.module.css'
import api from "./api/api"
import CardAutor from "../components/cardAutor"
import Image from 'next/image'

export default function Home({autor}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Além do livro</title>
        
        
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/image/mundo.png" />
      </Head>
      
			<Menu />

      <main className={styles.main}>
        
       {
        autor.map(autor => {

          return(
            
            <div key={autor.id}>
       <CardAutor nome={autor.nome} sobrenome={autor.sobrenome} data_nascimento={autor.data_nascimento} id={autor.id}/>
            </div>
            
          )
        })
        }
      
      </main>
  
      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}

export async function getServerSideProps(){
  const response = await api.get("/autores");
  const autor = response.data;

  return {
    
    props:{
      autor
    }
  }
}
