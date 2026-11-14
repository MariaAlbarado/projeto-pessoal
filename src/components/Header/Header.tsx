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
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <a
        href="/maria-albarado.pdf"
        download="maria-albarado.pdf"
        type="application/pdf"
        className={styles.curriculo}
      >
        Baixar Currículo
      </a>
    </header>
  );
}

export default Header;
