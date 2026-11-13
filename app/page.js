
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.banner}>
        <h1>Explore o mundo com a gente!</h1>

        <p>
          Descubra lugares incríveis, conheça novas culturas
          e encontre seu próximo destino de viagem.
        </p>

        <Link href="/destinos" className={styles.botao}>
          Explorar destinos
        </Link>
      </section>

      <section className={styles.apresentacao}>
        <h2>Sobre o Explore Mundo</h2>

        <p>
          Nosso portal foi criado para ajudar você a descobrir
          destinos turísticos incríveis ao redor do mundo.
          Encontre inspiração para sua próxima aventura!
        </p>
      </section>
    </div>
  );
}
