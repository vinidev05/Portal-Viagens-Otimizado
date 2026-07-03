import Layout from "@/components/Layout"

export const metadata = {
  title: "Portal Viagens",
  description: "Explore destinos incríveis pelo Brasil como Rio de Janeiro, Gramado, Salvador e Florianópolis.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}