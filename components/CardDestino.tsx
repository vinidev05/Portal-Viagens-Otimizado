"use client"

import Link from "next/link"
import styles from "@/styles/CardDestino.module.css"

interface Props {
  id: string
  nome: string
  imagem: string
}

export default function CardDestino({ id, nome, imagem }: Props) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>

      <Link href={"/destinos/" + id}>
        Ver detalhes
      </Link>
    </div>
  )
}