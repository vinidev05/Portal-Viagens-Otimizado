import { destinos } from "@/data/destinos"
import CardDestino from "@/components/CardDestino"

export default function Destinos() {
  return (
    <div>
      <h2>Destinos Turísticos</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            id={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
          />
        ))}
      </div>
    </div>
  )
}