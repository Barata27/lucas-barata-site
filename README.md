# Site Pessoal — Lucas Barata

Site pessoal moderno, rápido e minimalista desenvolvido com **React 18**, **TypeScript**, **Vite** e **Tailwind CSS**, com foco na identidade de um *builder/founder* prático focado em CRM, Automação, IA e Produtos digitais.

---

## 🚀 Como Rodar Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Instalar as dependências (se ainda não tiver instalado)
npm install

# 2. Iniciar o servidor local de desenvolvimento
npm run dev
```

Abra seu navegador no endereço indicado no terminal (por padrão: `http://localhost:3000`).

---

## 🛠️ Como Customizar Seus Dados

Todos os conteúdos do site estão centralizados de forma desacoplada em um único arquivo:

👉 **`src/data/siteData.ts`**

Neste arquivo você pode atualizar em poucos segundos:
* **Número do WhatsApp:** substitua `5527999999999` pelo seu número com DDD e DDI.
* **Links de redes sociais:** URLs de LinkedIn e Instagram.
* **Projetos:** adicionar novos cards, alterar status (`Em evolução`, `Projeto ativo`, etc.) e descrições detalhadas.
* **Cases de sucesso:** adicionar novos cases, métricas de resultado e ferramentas utilizadas.
* **Seção "Agora":** atualizar o que você está focando ou estudando no momento.
* **Foto pessoal:** você pode substituir o avatar da seção "Sobre mim" colocando sua foto na pasta `public/` ou `src/assets/` e referenciando no componente `About.tsx`.

---

## 📦 Build para Produção

Para gerar o pacote estático otimizado:

```bash
npm run build
```

Os arquivos prontos para publicação serão gerados na pasta `dist/`.

---

## 🌐 Deploy Rápido (Recomendado)

O projeto é 100% estático e pode ser hospedado gratuitamente e com deploy contínuo em:

1. **Vercel:** importe o repositório no [vercel.com](https://vercel.com) — a configuração é automática para Vite.
2. **Netlify:** arraste a pasta `dist` ou conecte seu repositório no [netlify.com](https://netlify.com).
3. **Cloudflare Pages:** conecte ao GitHub e selecione o preset *Vite*.
4. **GitHub Pages:** configure a action padrão de deploy estático.
