import styles from '../styles/Home.module.css'
import Link from 'next/link'

   <link rel="icon"href="image/mundo.png"/>
export default function menu() {
	return (
    
    <main className={styles.cabecalho}>
    <h3>
     
    <Link href='/sobre'>
				<a className= {styles.sobre}>Sobre </a>
			</Link>
      
			<Link href='/cadastro'>
				<a className= {styles.cadastro} >Cadastrar Autor</a>
			</Link>
     
      <Link href='/login'>
				<a className= {styles.login}>Listagem Livro</a>
			</Link>
      
      <Link href='/cadastrar'>
				<a className= {styles.cadastrar}> Cadastra Livro</a>
			</Link> 
			</h3>
      <h1>
    <div className={styles.titulo}>Biblioteca Livros&Livros</div>
        <br></br>

      </h1>
      
      </main>
  )
}