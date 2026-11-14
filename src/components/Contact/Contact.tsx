import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const enviarMensagem = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enviando) return;

    setEnviando(true);
    setStatus("");
    setSucesso(false);

    try {
      const resposta = await fetch("https://formspree.io/f/xjywgdqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: nome,
          email: email,
          message: mensagem,
        }),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setStatus("Mensagem enviada com sucesso!");
      setSucesso(true);

      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error("Erro no envio:", error);

      setStatus("Não foi possível enviar sua mensagem. Tente novamente.");
      setSucesso(false);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contato" className={styles.contato}>
      <div className={styles.cabecalho}>
        <p className={styles.subtitulo}>VAMOS CONVERSAR?</p>

        <h1 className={styles.titulo}>
          Entre em <span>Contato</span>
        </h1>

        <div className={styles.linha}></div>

        <p className={styles.descricao}>
          Tem um projeto em mente ou uma oportunidade profissional? Entre em
          contato comigo!
        </p>
      </div>

      <div className={styles.conteudo}>
        <form className={styles.formulario} onSubmit={enviarMensagem}>
          <h2>Envie uma mensagem</h2>

          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="name"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            disabled={enviando}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={enviando}
          />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="message"
            placeholder="Escreva sua mensagem..."
            rows={6}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            disabled={enviando}
          />

          <button type="submit" className={styles.botao} disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status && (
            <p
              role="status"
              aria-live="polite"
              style={{
                color: sucesso ? "#86efac" : "#fca5a5",
                textAlign: "center",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              {status}
            </p>
          )}
        </form>

        <div className={styles.informacoes}>
          <h2>Vamos nos conectar!</h2>

          <p>
            Estou aberta a novos projetos, colaborações e oportunidades na área
            de desenvolvimento web.
          </p>

          <a
            href="mailto:mariaalbaradoandrade@outlook.com"
            className={styles.card}
          >
            <span className={styles.icone}>✉️</span>

            <div>
              <h3>E-mail</h3>
              <p>Entre em contato por e-mail</p>
            </div>
          </a>

          <a
            href="SEU_LINKEDIN_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <span className={styles.icone}>💼</span>

            <div>
              <h3>LinkedIn</h3>
              <p>Conecte-se comigo</p>
            </div>
          </a>

          <a
            href="SEU_GITHUB_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <span className={styles.icone}>💻</span>

            <div>
              <h3>GitHub</h3>
              <p>Conheça meus repositórios</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
