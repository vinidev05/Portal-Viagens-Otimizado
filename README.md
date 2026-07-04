# 🚀 Portal Viagens - Otimização de Performance (Aula 32)

## 📌 Descrição do projeto

O **Portal Viagens** é uma aplicação desenvolvida com **Next.js** que apresenta destinos turísticos brasileiros, permitindo ao usuário visualizar informações sobre cada local.

Nesta atividade foi realizada uma análise de performance utilizando o **Lighthouse**, identificando gargalos e aplicando melhorias para tornar a aplicação mais rápida e otimizada.

---

# 🎯 Objetivo

Aplicar técnicas de otimização de performance em uma aplicação Front-End já existente, utilizando boas práticas apresentadas durante as aulas e comparando os resultados antes e depois das melhorias.

---

# 🔍 Gargalos identificados

Após a primeira análise utilizando o Lighthouse foram encontrados os seguintes pontos de melhoria:

- Imagens no formato **.jpg**, com maior tamanho de arquivo.
- Utilização da tag HTML `<img>` sem otimização.
- Ausência de carregamento preguiçoso (Lazy Loading).
- Falta de metadados (`title` e `description`) para SEO.
- Tempo elevado de carregamento da página.

---

# ⚙️ Melhorias aplicadas

Foram realizadas as seguintes otimizações:

- Conversão das imagens de **.jpg** para **.webp**.
- Substituição da tag `<img>` pelo componente `Image` do Next.js.
- Implementação de `loading="lazy"` para carregamento sob demanda.
- Inclusão de `metadata` no `app/layout.tsx`, adicionando título e descrição da página.
- Organização e limpeza do projeto, removendo arquivos e recursos desnecessários.
- Geração da versão de produção utilizando:

```bash
npm run build
npm run start
```

---

# 📊 Comparativo dos resultados

| Métrica | Antes | Depois |
|----------|-------:|--------:|
| Performance | **63** | **66** |
| Accessibility | **91** | **95** |
| Best Practices | **100** | **100** |
| SEO | **75** | **100** |

---

# 📸 Relatórios do Lighthouse

Os relatórios utilizados na comparação encontram-se na pasta:

```
relatorios/
```

### Antes

![Antes](relatorios/antes.png)

### Depois

![Depois](relatorios/depois.png)

---

# ✅ Conclusão

As otimizações realizadas melhoraram significativamente a qualidade do projeto.

Os principais ganhos foram:

- Melhor otimização das imagens.
- Redução do tempo de carregamento.
- Melhoria na experiência do usuário.
- SEO elevado de 75 para 100.
- Uso de recursos nativos do Next.js para otimização de imagens.

Embora a pontuação de Performance tenha aumentado apenas alguns pontos (63 para 66), houve melhora perceptível na velocidade de carregamento da aplicação, especialmente após a utilização de imagens em formato WebP e do componente `next/image`.

---

# 🛠️ Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Lighthouse
- HTML5
- CSS Modules
- WebP

---

# 📁 Estrutura do projeto

```
portal-viagens-aula-32
│
├── app/
├── components/
├── data/
├── public/
├── styles/
│
├── relatorios/
│   ├── antes.png
│   └── depois.png
│
├── README.md
├── package.json
├── tsconfig.json
└── ...
```
