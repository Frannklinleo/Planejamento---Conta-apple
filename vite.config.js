import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ATENÇÃO: troque "NOME-DO-REPOSITORIO" pelo nome exato do seu repositório
// no GitHub. Exemplo: se o link for github.com/seu-usuario/ordens-servico-cmms,
// o valor deve ser '/ordens-servico-cmms/'
export default defineConfig({
  plugins: [react()],
  base: '/NOME-DO-REPOSITORIO/',
})
