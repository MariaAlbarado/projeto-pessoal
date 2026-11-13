import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {"</>"}
      </Link>

      <nav className={styles.nav}>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <a href="/curriculo.pdf" download className={styles.curriculo}>
        Baixar Currículo
      </a>
    </header>
  );
}

export default Header;