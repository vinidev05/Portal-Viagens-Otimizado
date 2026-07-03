import Link from "next/link"
import styles from "@/styles/Layout.module.css"

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Bem-vindo ao Portal de Viagens</h2>
      <p>Descubra destinos turísticos incríveis pelo Brasil e viva experiências inesquecíveis.</p>

      <Link href="/destinos" className={styles.button}>
        Ver destinos
      </Link>
    </div>
  )
}