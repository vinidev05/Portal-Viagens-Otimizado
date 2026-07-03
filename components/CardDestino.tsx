"use client"

import Link from "next/link"
import styles from "@/styles/CardDestino.module.css"
import Image from "next/image"

interface Props {
  id: string
  nome: string
  imagem: string
}

export default function CardDestino({ id, nome, imagem }: Props) {
  return (
    <div className={styles.card}>
      <Image
       src={imagem}
       alt={nome}
       width={400}
       height={250}
       loading="lazy" 
       />
      <h3>{nome}</h3>

      <Link href={`/destinos/${id}`}>
        Ver detalhes
      </Link>
    </div>
  )
}