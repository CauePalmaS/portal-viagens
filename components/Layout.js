
import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Explore Mundo
        </Link>

        <nav className={styles.menu}>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Explore Mundo - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
