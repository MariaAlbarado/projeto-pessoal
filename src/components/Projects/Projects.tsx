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
    resumo:
      "E-commerce de moda com uma interface moderna, responsiva e intuitiva.",
    descricao:
      "O LUMÉ é um e-commerce de moda desenvolvido para proporcionar uma experiência de compra moderna, intuitiva e responsiva.\n\nFui responsável pelo desenvolvimento da interface e pela implementação de funcionalidades como navegação por categorias, pesquisa de produtos, carrinho de compras, lista de favoritos e visualização ampliada das imagens.\n\nDurante o desenvolvimento, trabalhei com componentes reutilizáveis, gerenciamento de estados no React e organização do código, buscando oferecer uma navegação fluida e uma interface adaptável a diferentes dispositivos.",
    tecnologias: ["React", "JavaScript", "CSS", "Vite"],
  },
  {
    id: 2,
    nome: "Maison Bistrô",
    imagens: [maison01, maison02],
    resumo:
      "Sistema de reservas para restaurantes com integração entre front-end e back-end.",
    descricao:
      "O Maison Bistrô é um sistema de gerenciamento de reservas para restaurantes, desenvolvido para facilitar a organização e o controle das reservas de mesas.\n\nDesenvolvi a interface da aplicação e a integração entre front-end e back-end, permitindo realizar novas reservas, consultar os registros e efetuar cancelamentos.\n\nNo back-end, implementei uma API REST utilizando Node.js e Express, com rotas para cadastro, consulta e exclusão de reservas. Também utilizei PostgreSQL para armazenamento dos dados e Insomnia para testar os endpoints.\n\nEsse projeto me permitiu aprimorar meus conhecimentos em comunicação entre cliente e servidor, requisições HTTP e integração com banco de dados.",
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
    resumo:
      "Aplicação para cadastro e gerenciamento de produtos voltados ao universo pet.",
    descricao:
      "O Pet Joy é uma aplicação voltada ao gerenciamento de produtos para pets, desenvolvida para praticar a criação de APIs e a integração com banco de dados.\n\nDesenvolvi funcionalidades para cadastrar e listar produtos, utilizando uma API REST construída com Node.js e Express.\n\nImplementei rotas para receber e consultar informações dos produtos, conectando a aplicação ao banco de dados PostgreSQL para armazenar os registros.\n\nDurante o desenvolvimento, pratiquei requisições HTTP, estruturação de endpoints e comunicação entre o back-end e o banco de dados.",
    tecnologias: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
  },
];

function Projects() {
  const [imagemAberta, setImagemAberta] = useState<string | null>(null);

  const [projetoAberto, setProjetoAberto] = useState<number | null>(null);

  const alternarProjeto = (id: number) => {
    setProjetoAberto((anterior) => (anterior === id ? null : id));
  };

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
        {projetos.map((projeto) => {
          const aberto = projetoAberto === projeto.id;

          return (
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

              <p className={styles.descricao}>{projeto.resumo}</p>

              {aberto && (
                <div
                  id={`detalhes-projeto-${projeto.id}`}
                  className={styles.detalhes}
                >
                  <h4 className={styles.tituloDetalhes}>Sobre o projeto</h4>

                  <p className={styles.descricao}>{projeto.descricao}</p>

                  <h4 className={styles.tituloDetalhes}>
                    Tecnologias utilizadas
                  </h4>

                  <div className={styles.tecnologias}>
                    {projeto.tecnologias.map((tecnologia) => (
                      <span key={tecnologia}>{tecnologia}</span>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="button"
                className={styles.botaoVerMais}
                onClick={() => alternarProjeto(projeto.id)}
                aria-expanded={aberto}
                aria-controls={`detalhes-projeto-${projeto.id}`}
              >
                {aberto ? "Ver menos ↑" : "Ver mais ↓"}
              </button>
            </article>
          );
        })}
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
