# Ordens de Serviço — Etapa 1: Fundação

Isto é a base do módulo. Ainda não tem dados de verdade — só o "esqueleto"
funcionando: menu, cabeçalho, duas abas (Dashboard e Planejamento), PWA e
deploy automático. É 100% isolado do seu app principal.

## 1. Instalar o que é necessário (só uma vez no seu computador)

1. Instale o **Node.js** (versão 20 ou mais nova): https://nodejs.org — baixe
   a versão "LTS" e instale como qualquer programa.
2. Descompacte esta pasta em algum lugar do seu computador.

## 2. Rodar localmente (pra ver funcionando antes de publicar)

Abra o terminal **dentro da pasta do projeto** e rode, um de cada vez:

```
npm install
npm run dev
```

O terminal vai mostrar um endereço tipo `http://localhost:5173`. Abra no
navegador — você deve ver o menu "Ordens de Serviço" com as abas Dashboard e
Planejamento (ainda vazias, é esperado).

Para parar, aperte `Ctrl+C` no terminal.

## 3. Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `ordens-servico-cmms`).
2. Abra o arquivo `vite.config.js` e troque `NOME-DO-REPOSITORIO` pelo nome
   exato do repositório que você criou.
3. No terminal, dentro da pasta do projeto:
   ```
   git init
   git add .
   git commit -m "Etapa 1: fundação do projeto"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   git push -u origin main
   ```
4. No GitHub, vá em **Settings → Pages**. Em **Source**, selecione
   **GitHub Actions**.
5. Pronto — a cada `git push`, o site é publicado sozinho (o arquivo
   `.github/workflows/deploy.yml` cuida disso). A URL aparece em
   Settings → Pages depois do primeiro deploy, algo como
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## O que já está pronto

- Estrutura de pastas modular (`src/modules/ordens-servico/...`)
- Menu com abas Dashboard/Planejamento (navegação real, com React Router)
- Visual e cores já no padrão que aprovamos (laranja queimado, tema claro)
- PWA instalável (manifest + ícones + service worker)
- Deploy automático configurado

## O que ainda não existe (vem nas próximas etapas)

- Upload e leitura de Excel (Etapa 3-5)
- Conteúdo real do Dashboard — cards, filtros, gráficos, tabela (Etapa 6)
- Calendário de Planejamento com arrastar-e-soltar (Etapa 7)
- Conexão com Supabase (Etapa 8 em diante)

Qualquer erro ao rodar `npm install` ou `npm run dev`, me manda a mensagem
exata que aparece no terminal — eu leio e te digo o que fazer.
