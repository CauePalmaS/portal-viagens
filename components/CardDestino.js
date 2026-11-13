
import styles from "./CardDestino.module.css";

export default function CardDestino({ destino }) {
  return (
    <div className={styles.card}>
      <img
        src={destino.imagem}
        alt={destino.nome}
        className={styles.imagem}
      />

      <div className={styles.conteudo}>
        <h2>{destino.nome}</h2>
        <p>{destino.descricao}</p>
      </div>
    </div>
  );
}
