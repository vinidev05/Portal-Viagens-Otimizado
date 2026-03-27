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
    imagem: "/fotos/rio2.jpg", 
    descricao: "Cidade famosa pelas praias e pelo Cristo Redentor."
  },
  {
    id: "2",
    nome: "Gramado",
    imagem: "/fotos/Gramado1.jpg", 
    descricao: "Cidade turística da serra gaúcha com clima europeu."
  },
  {
    id: "3",
    nome: "Salvador",
    imagem: "/fotos/Salvador3.jpg", 
    descricao: "Cultura vibrante, música e belas praias."
  },
  {
    id: "4",
    nome: "Florianópolis",
    imagem: "/fotos/Florianopolis2.jpg", 
    descricao: "Ilha com praias paradisíacas e muita natureza."
  }
]