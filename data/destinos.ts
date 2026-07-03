export interface Destino {
  id: string
  nome: string
  imagem: string
  descricao: string
}

export const destinos: Destino[] = [
  {
    id: "1",
    nome: "Rio de Janeiro",
    imagem: "/fotos/rio.webp", 
    descricao: "Cidade famosa pelas praias e pelo Cristo Redentor."
  },
  {
    id: "2",
    nome: "Gramado",
    imagem: "/fotos/gramado.webp", 
    descricao: "Cidade turística da serra gaúcha com clima europeu."
  },
  {
    id: "3",
    nome: "Salvador",
    imagem: "/fotos/salvador.webp", 
    descricao: "Cultura vibrante, música e belas praias."
  },
  {
    id: "4",
    nome: "Florianópolis",
    imagem: "/fotos/florianopolis.webp", 
    descricao: "Ilha com praias paradisíacas e muita natureza."
  }
]