import { useEffect, useState } from "react";
import styles from "./Projects.module.css";

import lume01 from "../../assets/lume-01.png";
import lume02 from "../../assets/lume-02.png";
import maison01 from "../../assets/maison-01.png";
import maison02 from "../../assets/maison-02.png";
import petjoy01 from "../../assets/petjoy-01.png";
import petjoy02 from "../../assets/petjoy-02.png";

const projetos = [
  {
    id: 1,
    nome: "LUMÉ",
    imagens: [lume01, lume02],
    descricao:
      "LUMÉ é um e-commerce de moda desenvolvido com React e Vite, com uma interface moderna e responsiva. A aplicação possui navegação por categorias, busca de produtos, carrinho de compras, favoritos e visualização ampliada dos produtos, proporcionando uma experiência de compra intuitiva.",
    tecnologias: ["React", "JavaScript", "CSS", "Vite"],
  },
  {
    id: 2,
    nome: "Maison Bistrô",
    imagens: [maison01, maison02],
    descricao:
      "Maison Bistrô é um sistema de reservas para restaurantes que permite realizar, visualizar e cancelar reservas. O projeto integra front-end e back-end, utilizando Node.js, Express e PostgreSQL para gerenciar os dados das reservas.",
    tecnologias: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    nome: "Pet Joy",
    imagens: [petjoy01, petjoy02],
    descricao:
      "Pet Joy é uma aplicação voltada ao gerenciamento de produtos para pets, com funcionalidades de cadastro e listagem de produtos. O projeto utiliza uma API desenvolvida com Node.js e Express e integração com PostgreSQL.",
    tecnologias: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
  },
];

function Projects() {
  const [imagemAberta, setImagemAberta] = useState<string | null>(null);

  useEffect(() => {
    if (!imagemAberta) return;

    const fecharComEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setImagemAberta(null);
      }
    };

    window.addEventListener("keydown", fecharComEsc);

    return () => {
      window.removeEventListener("keydown", fecharComEsc);
    };
  }, [imagemAberta]);

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

      <div className={styles.listaProjetos}>
        {projetos.map((projeto) => (
          <article key={projeto.id} className={styles.projeto}>
            <h3 className={styles.nome}>{projeto.nome}</h3>

            <div className={styles.galeria}>
              {projeto.imagens.map((imagem, index) => (
                <button
                  key={index}
                  type="button"
                  className={styles.imagemBotao}
                  onClick={() => setImagemAberta(imagem)}
                  aria-label={`Ampliar imagem ${index + 1} do projeto ${projeto.nome}`}
                >
                  <img
                    src={imagem}
                    alt={`Tela ${index + 1} do projeto ${projeto.nome}`}
                    className={styles.imagem}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            <p className={styles.descricao}>{projeto.descricao}</p>

            <div className={styles.tecnologias}>
              {projeto.tecnologias.map((tecnologia) => (
                <span key={tecnologia}>{tecnologia}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {imagemAberta && (
        <div className={styles.modal} onClick={() => setImagemAberta(null)}>
          <div
            className={styles.modalConteudo}
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada do projeto"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.fechar}
              onClick={() => setImagemAberta(null)}
              aria-label="Fechar imagem"
              autoFocus
            >
              ×
            </button>

            <img
              src={imagemAberta}
              alt="Imagem ampliada do projeto"
              className={styles.imagemAmpliada}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
