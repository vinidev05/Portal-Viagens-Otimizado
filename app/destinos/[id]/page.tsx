import { destinos } from "@/data/destinos"
import styles from "@/styles/Layout.module.css"
import Image from "next/image"


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const destino = destinos.find((d) => d.id === id)

  if (!destino) {
    return <h1>Destino não encontrado</h1>
  }

  return (
    <div className={styles.detalhe}>
      <h1>{destino.nome}</h1>
      <Image src={destino.imagem}
       alt={destino.nome}
       width={800}
       height={500}
       loading="lazy" 
       />
      <p>{destino.descricao}</p>
    </div>
  )
}