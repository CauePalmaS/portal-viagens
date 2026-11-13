
import destinos from "../../data/destinos";
import CardDestino from "../../components/CardDestino";
import styles from "./page.module.css";

export default function Destinos() {
  return (
    <div className={styles.container}>
      <section className={styles.titulo}>
        <h1>Conheça nossos destinos</h1>

        <p>
          Escolha seu próximo destino e prepare-se para
          viver experiências inesquecíveis!
        </p>
      </section>

      <section className={styles.lista}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            destino={destino}
          />
        ))}
      </section>
    </div>
  );
}
