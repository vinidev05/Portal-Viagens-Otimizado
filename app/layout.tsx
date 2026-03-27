export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <header style={{
          background: "#4f46e5",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold"
        }}>
          🌎 Destinos Turísticos
        </header>

        <main style={{ backgroundColor:"rgb(203, 240, 241)", padding: "40px"}}>
          {children}
        </main>

        <footer style={{
          background: "#white",
          textAlign: "center",
          padding: "20px",
        }}>
          © 2026 - Meu Site
        </footer>
      </body>
    </html>
  )
}