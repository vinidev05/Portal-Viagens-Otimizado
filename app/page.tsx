import Link from "next/link"

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "28px", color: "#1f2937", marginBottom: "10px" }}>
        Bem-vindo ao Portal de Viagens
      </h2>

      <p style={{ fontSize: "18px", color: "#4b5563", maxWidth: "600px" }}>
        Descubra destinos turísticos incríveis pelo Brasil e viva experiências inesquecíveis.
      </p>

      <Link href="/destinos" style={{
        marginTop: "30px",
        padding: "12px 24px",
        background: "#4f46e5",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "0.3s"
      }}>
        Ver destinos
      </Link>
    </div>
  )
}