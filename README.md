# 🌐 Portfólio Profissional – Lucas Mustafa

Este projeto consiste no portfólio pessoal e profissional do desenvolvedor .NET e Engenheiro de Software **Lucas Mustafa**. O website foi concebido e implementado de forma responsiva, utilizando boas práticas de desenvolvimento web moderno com foco em performance e acessibilidade.

O portfólio é estruturado em cinco páginas estáticas totalmente interconectadas, integrando controle de temas dinâmicos (modo claro/escuro) e interatividade sem dependência de frameworks ou bibliotecas externas.

---

## 🛠️ Tecnologias Utilizadas

-   **Estrutura:** HTML5 semântico com otimização básica de SEO e acessibilidade.
-   **Estilização:** CSS3 estruturado com variáveis globais (tokens de design), modularização de arquivos e efeitos visuais modernos como *glassmorphism*.
-   **Comportamento:** Vanilla JavaScript (ES6+) para manipulação assíncrona do DOM, persistência de preferências de usuário e efeitos dinâmicos de transição.
-   **Ícones:** Font Awesome (CDN) e vetores SVG locais.
-   **Tipografia:** Google Fonts com as fontes **Outfit** (títulos principais) e **Inter** (corpo e textos).

---

## 🌟 Recursos Principais

1.  **Alternador de Temas (Claro e Escuro):** Permite alterar dinamicamente a paleta de cores. A preferência é salva no `localStorage` do navegador para persistir a escolha nas próximas visitas.
2.  **Filtro Dinâmico de Projetos:** Sistema na página de portfólio que oculta ou exibe os cards de projetos com base na categoria (`Front-end`, `Back-end/.NET`) usando transições suaves de escala e opacidade controladas por JavaScript.
3.  **Formulário de Contato com Validação:** Validação em tempo real e interceptação de envio via JS com expressões regulares para e-mail, verificação de tamanho mínimo de mensagem/nome e feedback animado com *spinner* e mensagem de sucesso.
4.  **Menu Hambúrguer Responsivo:** Navegação adaptativa para dispositivos móveis com fechamento automático ao clicar fora ou ao selecionar uma opção.
5.  **Efeitos de Hover Reutilizáveis:** Micro-interações táteis como elevações suaves de cards e escalas em botões.

---

## 📂 Estrutura do Projeto

Abaixo estão descritos os diretórios e arquivos que compõem a arquitetura do portfólio, com links diretos:

*   🌐 **Páginas Principais (HTML5):**
    *   [index.html](file:///Users/Usuario/Documents/Projetos/portfolio/index.html) — Página inicial/Landing Page de apresentação e links rápidos.
    *   [about.html](file:///Users/Usuario/Documents/Projetos/portfolio/about.html) — Biografia, jornada acadêmica e profissional.
    *   [projetos.html](file:///Users/Usuario/Documents/Projetos/portfolio/projetos.html) — Portfólio de projetos com filtro interativo de tecnologias.
    *   [curriculo.html](file:///Users/Usuario/Documents/Projetos/portfolio/curriculo.html) — Apresentação profissional, formação, experiências e certificações.
    *   [contato.html](file:///Users/Usuario/Documents/Projetos/portfolio/contato.html) — Formulário de e-mail e canais alternativos de contato.
*   🎨 **Estilos (CSS3 Modular):**
    *   [style/style.css](file:///Users/Usuario/Documents/Projetos/portfolio/style/style.css) — Arquivo principal de consolidação e importação dos estilos.
    *   [style/variables.css](file:///Users/Usuario/Documents/Projetos/portfolio/style/variables.css) — Variáveis globais contendo a paleta de cores, gradientes, fontes e tokens de animação.
    *   [style/reset.css](file:///Users/Usuario/Documents/Projetos/portfolio/style/reset.css) — Normalização de propriedades padrão dos navegadores.
    *   [style/header.css](file:///Users/Usuario/Documents/Projetos/portfolio/style/header.css) — Estilos do cabeçalho fixo e menu de navegação responsiva.
    *   [style/main.css](file:///Users/Usuario/Documents/Projetos/portfolio/style/main.css) — Estilização geral dos blocos de conteúdo e seções de texto.
    *   [style/projects.css](file:///Users/Usuario/Documents/Projetos/portfolio/style/projects.css) — Layout em grade e estilo dos cards de portfólio.
    *   [style/links.css](file:///Users/Usuario/Documents/Projetos/portfolio/style/links.css) — Estilo de botões, links de navegação adicionais e ícones sociais.
    *   [style/footer.css](file:///Users/Usuario/Documents/Projetos/portfolio/style/footer.css) — Design e flexibilidade da barra do rodapé.
*   ⚡ **Comportamento (JavaScript):**
    *   [script/app.js](file:///Users/Usuario/Documents/Projetos/portfolio/script/app.js) — Script central de comportamento, contendo todas as funções interativas.
*   📄 **Outros Documentos:**
    *   [relatorio_tecnico.md](file:///Users/Usuario/Documents/Projetos/portfolio/relatorio_tecnico.md) — Relatório detalhado detalhando a engenharia de usabilidade e escolhas de arquitetura do projeto.

---

## ⚡ Comportamentos JavaScript Documentados

A lógica contida no script [app.js](file:///Users/Usuario/Documents/Projetos/portfolio/script/app.js) está dividida em funções modulares:

-   [adicionarEfeitoHover](file:///Users/Usuario/Documents/Projetos/portfolio/script/app.js#L5) — Aplica transições de elevação e escala personalizadas aos links, fotos de perfil e cards.
-   **Marcar Link Ativo** ([linha 44](file:///Users/Usuario/Documents/Projetos/portfolio/script/app.js#L44)) — Identifica qual página HTML está atualmente aberta no navegador e aplica a classe `.ativo` no cabeçalho correspondente.
-   **Alternador de Tema** ([linha 56](file:///Users/Usuario/Documents/Projetos/portfolio/script/app.js#L56)) — Altera o atributo `data-theme` da tag `html` e atualiza o ícone do botão flutuante.
-   **Menu de Navegação Responsivo** ([linha 99](file:///Users/Usuario/Documents/Projetos/portfolio/script/app.js#L99)) — Controla a abertura do menu hambúrguer móvel, alternando o ícone entre três barras e "X", fechando ao clicar fora.
-   **Filtro de Projetos Dinâmico** ([linha 143](file:///Users/Usuario/Documents/Projetos/portfolio/script/app.js#L143)) — Orquestra a animação e ocultação de cards com base no atributo `data-categoria` de cada projeto.
-   **Validação do Formulário** ([linha 180](file:///Users/Usuario/Documents/Projetos/portfolio/script/app.js#L180)) — Aplica expressões regulares e verificação de campos obrigatórios antes do envio fictício da mensagem em `contato.html`.

---

## 🚀 Como Executar o Projeto

Como o portfólio é construído em front-end estático puro (HTML, CSS e JS), não é necessário nenhum compilador, empacotador ou banco de dados.

### Execução Direta
1. Faça o clone ou download deste repositório.
2. Navegue até a pasta raiz do projeto.
3. Dê um duplo clique no arquivo [index.html](file:///Users/Usuario/Documents/Projetos/portfolio/index.html) para abri-lo diretamente no seu navegador padrão.

### Execução via Servidor Local (Recomendado)
Para que os caminhos relativos e o `localStorage` operem em ambiente de servidor local simulado (evitando restrições de protocolo `file://` em alguns navegadores):
- **VS Code:** Instale a extensão **Live Server**, abra a pasta do projeto e clique em **"Go Live"** no canto inferior direito.
- **Node.js (npm):** Caso tenha o Node instalado, você pode usar um servidor estático simples de sua preferência (ex: `http-server` ou `serve`):
  ```bash
  npx http-server .
  ```
  Acesse a URL gerada (geralmente `http://localhost:8080`) no seu navegador.

---

## ✍️ Autor

- **Lucas Mustafa** — Desenvolvedor .NET & Engenheiro de Software
