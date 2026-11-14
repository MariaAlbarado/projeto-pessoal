import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.sobre} id="sobre">
      <div className={styles.cabecalho}>
        <p className={styles.subtitulo}>QUEM SOU EU</p>

        <h1 className={styles.titulo}>
          Sobre <span>Mim</span>
        </h1>

        <div className={styles.linha}></div>
      </div>

      <div className={styles.conteudo}>
        <h2>Olá! Sou Maria Albarado.</h2>

        <p>
          Sou desenvolvedora Full Stack, formada pelo SENAI, apaixonada por
          tecnologia e pela criação de soluções digitais que unem inovação,
          funcionalidade e uma excelente experiência para o usuário.
        </p>

        <p>
          Tenho experiência prática no desenvolvimento de aplicações web,
          utilizando tecnologias como React, JavaScript, TypeScript, Node.js,
          Express e PostgreSQL. Ao longo da minha trajetória, desenvolvi
          projetos que envolvem desde a construção de interfaces modernas e
          responsivas até a criação de APIs e integração com bancos de dados.
        </p>

        <p>
          Sou movida pela curiosidade, pelo aprendizado contínuo e pelo desejo
          de transformar ideias em soluções reais. Valorizo a qualidade do
          código, a atenção aos detalhes e a colaboração, buscando sempre
          evoluir tecnicamente e contribuir para projetos que gerem impacto e
          resultados.
        </p>

        <div className={styles.tecnologias}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}

export default About;
