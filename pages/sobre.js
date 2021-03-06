import Head from 'next/head'

import Menu from '../components/menu'
import styles from '../styles/Home.module.css'

export default function sobre() {
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
          Este é o local para conhecer todos os livros do momento       
				</h3>
        <p></p>
        <h2> <form>
           <label for="titulo">Livros de ficcção cientifíca: <br/></label>
          <input type="text" name="livro" placeholder="Digite os livros de ficcção cientifíca"></input></form>
       <form> 
          <label for="titulo">Livros de romance: <br/></label>
         <input type="text" name="autor" placeholder="Digite os livros de romance"></input></form>
        <form> 
          <label for="titulo">Livros de comédia: <br/></label>
          <input type="text" name="editora" placeholder="Digite os livros de comédia"></input></form>
         <form> <input type="submit" value="Escolher"></input> <input type="reset" value="Limpar Escolha"></input> </form> </h2>
      
    </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}