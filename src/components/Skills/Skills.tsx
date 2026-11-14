import styles from "./Skills.module.css";

const habilidades = [
  {
    id: 1,
    titulo: "Front-end",
    icone: "💻",
    tecnologias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "CSS Modules",
    ],
  },
  {
    id: 2,
    titulo: "Back-end",
    icone: "⚙️",
    tecnologias: ["Node.js", "Express", "APIs REST", "JWT", "Autenticação"],
  },
  {
    id: 3,
    titulo: "Banco de Dados",
    icone: "🗄️",
    tecnologias: ["PostgreSQL", "SQL", "TypeORM"],
  },
  {
    id: 4,
    titulo: "Ferramentas",
    icone: "🛠️",
    tecnologias: ["Git", "GitHub", "VS Code", "Insomnia", "Axios", "Vercel"],
  },
];

function Skills() {
  return (
    <section id="habilidades" className={styles.habilidades}>
      <div className={styles.cabecalho}>
        <p className={styles.subtitulo}>MEUS CONHECIMENTOS</p>

        <h1 className={styles.titulo}>
          Habilidades <span>Técnicas</span>
        </h1>

        <div className={styles.linha}></div>

        <p className={styles.descricao}>
          Tecnologias e ferramentas que utilizo para desenvolver aplicações web
          modernas, responsivas e funcionais.
        </p>
      </div>

      <div className={styles.listaHabilidades}>
        {habilidades.map((habilidade) => (
          <article key={habilidade.id} className={styles.card}>
            <div className={styles.cardCabecalho}>
              <span className={styles.icone}>{habilidade.icone}</span>

              <h2 className={styles.nome}>{habilidade.titulo}</h2>
            </div>

            <div className={styles.tecnologias}>
              {habilidade.tecnologias.map((tecnologia) => (
                <span key={tecnologia} className={styles.tecnologia}>
                  {tecnologia}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
