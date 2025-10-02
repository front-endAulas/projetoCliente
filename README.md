# Criando um projeto em React


1º Criar a pasta do projeto

2º Abrir a pasta do projeto no vscode

3º Abrir o terminal com git bash no vscode e digitar: npm create vite@latest .

4º Escolher o framework React

5º Escolher a Variant Javascript

6º No terminal digitar comando para instalar as dependências do node_modules: npm install 

7º No terminal executar o projeto: npm run dev

8º limpar a estrutura do projeto
   pasta public - apagar imagem
   pasta src/assets - apagara imagem
   pasta src - apagar o arquivo App.css
   pasta src - limpar o conteúdo do arquivo index.css
   pasta src  dentro de App.jsx = limpar todos os imports acima da function , limpar a linha abaixo da function const [count,setcount]=useState();
   apagar tudo dentro dos fragments <></>

9º  Botão direito em cima de src- new folder -dar o nome de components

10º Botão direito em ciama de src- new folder - dar o nome de routes

11º  para criar o components - em cima da pasta botão direito- new file - dar o nome com a primeira letra maiuscula: ex: Home.jsx

12º instalando as dependências para o projeto no terminal:

npm install react-router-dom
npm install react-icons
npm install react-hook-form


13º instalando e configurando o tailwindcss 

no terminal digite :

npm install tailwindcss @tailwindcss/vite


no arquivo vite.config.js

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

dentro do index.css  adicione a linha

@import "tailwindcss";


server 


1º dentro da pasta backend ,no terminal digite: npm init -y

2º touch server
