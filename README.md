# 🌍 Portal Viagens

## 📌 Descrição

O **Portal Viagens** é uma aplicação desenvolvida com **Next.js** que apresenta destinos turísticos brasileiros. O objetivo do projeto é permitir que os usuários conheçam diferentes destinos, visualizem imagens e acessem informações de forma simples e intuitiva.

Nesta atividade foi realizada uma análise de performance utilizando o **Google Lighthouse**, aplicando técnicas de otimização para melhorar o carregamento da aplicação e a experiência do usuário.

---

## 🎯 Objetivo da atividade

Aplicar os conceitos estudados sobre otimização de performance em um projeto Front-End existente, identificando gargalos, implementando melhorias e comparando os resultados obtidos antes e depois das otimizações.

---

## 🚀 Tecnologias utilizadas

- Next.js
- React
- TypeScript
- CSS Modules
- Google Lighthouse
- Chrome DevTools

---

# 📊 Análise inicial

A primeira análise foi realizada utilizando o **Google Lighthouse**, identificando oportunidades de melhoria relacionadas ao carregamento da aplicação.

| Métrica | Antes |
|---------|-------:|
| Performance | **63** |
| Accessibility | **91** |
| Best Practices | **100** |
| SEO | **75** |

## 📷 Relatório inicial

O relatório abaixo apresenta a situação do projeto antes das otimizações.

![Relatório Antes](relatorios/antes.jpeg)

---

# 🔍 Gargalos identificados

Durante a análise foram encontrados alguns pontos que poderiam ser melhorados:

- Imagens utilizando o formato **.jpg**.
- Uso da tag HTML `<img>`.
- Falta de otimização automática das imagens.
- Ausência de metadados para SEO.
- Tempo de carregamento superior ao esperado.

---

# ⚙️ Melhorias aplicadas

Após a análise foram realizadas as seguintes otimizações:

- Conversão das imagens de **.jpg** para **.webp**.
- Substituição da tag `<img>` pelo componente `next/image`.
- Implementação de **Lazy Loading** (`loading="lazy"`).
- Adição de **metadata** (`title` e `description`) no `layout.tsx`.
- Remoção de arquivos e recursos que não eram utilizados.

---

# 📈 Resultados após as otimizações

Após aplicar as melhorias, uma nova análise foi realizada utilizando o Lighthouse.

| Métrica | Depois |
|---------|--------:|
| Performance | **66** |
| Accessibility | **95** |
| Best Practices | **100** |
| SEO | **100** |

## 📷 Relatório final

O relatório abaixo mostra os resultados obtidos após as otimizações.

![Relatório Depois](relatorios/depois.jpeg)

---

# 📋 Comparativo

| Métrica | Antes | Depois |
|---------|-------:|--------:|
| Performance | **63** | **66** |
| Accessibility | **91** | **95** |
| Best Practices | **100** | **100** |
| SEO | **75** | **100** |

---

# 📂 Estrutura do projeto

```text
portal-viagens/
│
├── app/
├── components/
├── data/
├── public/
├── styles/
├── relatorios/
│   ├── antes.png
│   └── depois.png
│
├── README.md
├── package.json
└── tsconfig.json
```

---

# ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/vinidev05/Portal-Viagens-Otimizado.git
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Ou execute a versão de produção:

```bash
npm run build
npm run start
```

---

# ✅ Conclusão

A atividade permitiu aplicar na prática técnicas de otimização de performance utilizando recursos nativos do Next.js.

As principais melhorias foram a conversão das imagens para WebP, a utilização do componente `next/image`, a implementação de Lazy Loading e a configuração de metadados para SEO.

Essas alterações resultaram em uma melhora nas métricas do Lighthouse, principalmente em SEO e Accessibility, além de proporcionar um carregamento mais rápido e uma melhor experiência para o usuário.

---

## 👨‍💻 Autor

**Vinícius Eduardo**

Projeto desenvolvido como atividade prática do curso **Desenvolvedor Full Stack Python** da **EBAC**.
