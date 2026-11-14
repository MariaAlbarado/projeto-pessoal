import styles from "./Home.module.css";
import minhaFoto from "../../../assets/maria-pics.png";
import Projects from "../../Projects/Projects";
import Footer from "../../Footer/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <main>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p className={styles.saudacao}>Olá, eu sou</p>

          <h1>Maria Albarado</h1>

          <h2>Desenvolvedora Full Stack</h2>

          <p className={styles.descricao}>
            Transformo ideias em experiências digitais que fazem a diferença.
            Desenvolvo aplicações web modernas, intuitivas e responsivas,
            combinando criatividade, tecnologia e atenção aos detalhes para
            criar soluções que vão além do visual: entregam funcionalidade,
            desempenho e uma excelente experiência para o usuário.
          </p>

          <div className={styles.botoes}>
            <a href="#projetos" className={styles.botaoPrincipal}>
              Ver Projetos →
            </a>

            <a
              href="https://github.com/MariaAlbarado"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botaoSecundario}
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/maria-albarado-0032b0378/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botaoSecundario}
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.fotoContainer}>
          <img
            src={minhaFoto}
            alt="Foto de Maria Albarado"
            className={styles.foto}
          />
        </div>
      </section>

      <Projects />

      <Footer />
    </main>
  );
}

export default Home;
