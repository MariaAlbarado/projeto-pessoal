import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

import lume from "../../assets/lume-01.png";
import maison from "../../assets/maison-01.png";
import petjoy from "../../assets/petjoy-01.png";

function Projects() {
  const projetos = [
    {
      id: 1,
      nome: "LUMÉ",
      imagem: lume,
      rota: "/projetos/lume",
    },
    {
      id: 2,
      nome: "Maison Bistrô",
      imagem: maison,
      rota: "/projetos/maison",
    },
    {
      id: 3,
      nome: "Pet Joy",
      imagem: petjoy,
      rota: "/projetos/petjoy",
    },
  ];

  return (
    <section id="projetos" className={styles.projetos}>
      <div className={styles.cabecalho}>
        <p className={styles.subtitulo}>MEU TRABALHO</p>

        <h2 className={styles.titulo}>
          Projetos em <span>Destaque</span>
        </h2>

        <div className={styles.linha}></div>

        <p className={styles.texto}>
          Criando experiências digitais que unem criatividade, tecnologia e
          funcionalidade.
        </p>
      </div>

      <div className={styles.cards}>
        {projetos.map((projeto) => (
          <Link
            key={projeto.id}
            to={projeto.rota}
            className={styles.card}
            aria-label={`Ver projeto ${projeto.nome}`}
          >
            <div className={styles.imagemContainer}>
              <img
                src={projeto.imagem}
                alt={`Imagem do projeto ${projeto.nome}`}
                className={styles.imagem}
              />
            </div>

            <h3 className={styles.nome}>{projeto.nome}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
