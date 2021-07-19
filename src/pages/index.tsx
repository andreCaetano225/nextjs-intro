/* eslint-disable @next/next/no-img-element */
import SEO from '../components/SEO';
import  styles from '../styles/home.module.scss'

export default function Home() {


  return (
    <>
      <SEO title="Pagina Home "/>
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Dev!</span>
          <h1>Bem-Vindo e Bem-Vinda ao <br/>
            <span>Dev</span> News!
          </h1>
          <p>
            Um blog com conteúdos extremamente <br/>
            <span>relevantes para o seu aprendizado.</span>
          </p>
        </section>
        <img src="/home.svg" alt="HomeImage" />
           
      </main>
    </>
  )
}

//ServerSideRedering
