import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import minhaFoto from "../../../assets/maria-pics.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.apresentacao}>
        <p className={styles.saudacao}>Olá, eu sou</p>

        <h1>Maria Albarado</h1>

        <h2>Desenvolvedora Full Stack</h2>

        <p className={styles.descricao}>
          Transformo ideias em experiências digitais que fazem a diferença.
          Desenvolvo aplicações web modernas, intuitivas e responsivas,
          combinando criatividade, tecnologia e atenção aos detalhes para criar
          soluções que vão além do visual: entregam funcionalidade, desempenho e
          uma excelente experiência para o usuário.
        </p>

        <div className={styles.botoes}>
          <Link to="/projetos" className={styles.botaoPrincipal}>
            Ver Projetos →
          </Link>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botaoSecundario}
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botaoSecundario}
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </section>

      <div className={styles.fotoContainer}>
        <img
          src={minhaFoto}
          alt="Foto de Maria Albarado"
          className={styles.foto}
        />
      </div>
    </main>
  );
}

export default Home;
