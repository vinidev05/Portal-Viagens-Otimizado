import { destinos } from "@/data/destinos"

export default async function Page({ params }: any) {
  const { id } = await params

  const destino = destinos.find((d) => d.id === id)

  if (!destino) {
    return <h1>Destino não encontrado</h1>
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>{destino.nome}</h1>

      <img
        src={destino.imagem}
        alt={destino.nome}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {destino.descricao}
      </p>
    </div>
  )
}