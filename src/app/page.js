import Image from "next/image"; 
import Link from "next/link";
import styles from "./page.module.css"; 

import img_musculacao from '../../public/musculacao.jpg'
import img_grupo from '../../public/grupo.jpg' 
import img_personal from '../../public/personal.jpg' 


export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <h1>Academia Iron Force</h1>
        <Link href="/login" class="botao">Login</Link>
      </header>
      <nav>
        <a href="#">Início</a>
        <a href="./sobre.html">Sobre</a>
        <a href="./serviços.html">Seus Serviços</a>

      </nav>
      <div className="banner">
        <h1>Seja bem-vindo à Academia Iron Force</h1>
        <a href="file:///J:/TCC-%20Bacili/Meu%20TCC/indexx-cad.html" class="botao">Cadastre-se agora</a>
      </div>
      <div className="container">
        <section id="sobre">
          <h2>Sobre Nós</h2>
          <p>A Academia Iron Force é o lugar ideal para quem busca saúde e qualidade de vida.
            Nossas instalações modernas e equipamentos de última geração garantem uma experiência única para nossos clientes.</p>
        </section>
        <section id="servicos">
          <h2>Nossos Serviços</h2>
          <div className="servicos">
            <div className="servico">
              <Image src={img_musculacao} alt="Musculação" />
              <h3>Musculação</h3>
              <p>Equipamentos modernos para fortalecimento muscular.</p>
            </div>
            <div className="servico">
              <Image src={img_grupo} alt="Aulas em Grupo" />
              <h3>Aulas em Grupo</h3>
              <p>Aulas de grupo motivadoras para todos os níveis.</p>
            </div>
            <div className="servico">
              <Image src={img_personal} alt="Personal Trainer" />
              <h3>Personal Trainer</h3>
              <p>Profissionais qualificados para um treino personalizado.</p>
            </div>
          </div>
        </section>
        <section id="contato">
          <h2>Entre em Contato</h2>
          <p>Telefone: (XX) XXXX-XXXX<br />
            E-mail: contato@academiafitness.com<br />
            Endereço: Rua ABC, 123 - Cidade, Estado</p>
        </section>
      </div>
    </div>

  );
}
