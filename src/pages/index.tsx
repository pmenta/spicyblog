import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>spicyblog - home</title>
      </Head>

      <header className={styles.header}>
        <span className={styles.logo}>
          spicy<strong>blog</strong>
        </span>
      </header>

      <main className={styles.content}>
        <article>
          <a href="https://www.tabnews.com.br/pmenta/guia-quase-definitivo-de-acessibilidade-na-web">
            Guia (quase definitivo) de acessibilidade na web
          </a>
          <div>
            <span>
              17 tabcoins - 28 comentários - <strong>pmenta</strong> - 1 dia
              atrás
            </span>
          </div>
        </article>
        <article>
          <span>
            🎉 este artigo já chegou ao top 10 dos mais relevantes no
            tabnews.com.br
          </span>
          <a href="https://www.tabnews.com.br/pmenta/guia-quase-definitivo-de-acessibilidade-na-web">
            Guia (quase definitivo) de acessibilidade na web
          </a>
          <div>
            <span>
              17 tabcoins - 28 comentários - <strong>pmenta</strong> - 1 dia
              atrás
            </span>
          </div>
        </article>
        <article>
          <span>
            🔥 este artigo está em 5º nos mais relevantes no tabnews.com.br
          </span>
          <a href="https://www.tabnews.com.br/pmenta/guia-quase-definitivo-de-acessibilidade-na-web">
            Guia (quase definitivo) de acessibilidade na web
          </a>
          <div>
            <span>
              17 tabcoins - 28 comentários - <strong>pmenta</strong> - 1 dia
              atrás
            </span>
          </div>
        </article>
      </main>
    </div>
  );
}
