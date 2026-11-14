
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.conteudo}>
          <div className={styles.identidade}>
            <span className={styles.logo}>{"</>"}</span>
            <span>Maria Albarado</span>
          </div>

          <nav className={styles.navegacao}>
            <a href="/">Início</a>
            <a href="/#projetos">Projetos</a>
            <a href="mailto:mariaalbaradoandrade@outlook.com">
              Contato
            </a>
          </nav>

          <div className={styles.redes}>
            <a
              href="https://github.com/MariaAlbarado"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/maria-albarado-0032b0378/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mariaalbaradoandrade@outlook.com"
              aria-label="Enviar e-mail"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className={styles.inferior}>
          <p>
            © 2026 Maria Albarado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
