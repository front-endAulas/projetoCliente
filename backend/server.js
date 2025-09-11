// IMPORTA OS MÓDULOS QUE SERÃO UTILIZADOS NA APLICAÇÃO
const express = require('express');
// PERMITE ACESSO AS APLICAÇÕES DE DIFERENTES DOMÍNIOS
const cors = require('cors');
// IMPORTA O MÓDULO "FS" PARA INTERAGIR COM OS ARQUIVOS
const fs = require('fs').promises;
// MÓDULO QUE VAI TRABALHAR COM O CAMINHO DOS ARQUIVOS
const path = require('path');

// DEFINE A PORTA QUE O SERVIDOR IRÁ RODAR
const Port = 3001;

// INSTANCIANDO O EXPRESS
const app = express();

// MIDDLEAWARE QUE ANALISA OS DADOS DA REQUISIÇÃO NO CORPO DA PÁGINA NO FORMATO JSON
app.use(express.json());

// USANDO O CORS PARA HABILITAR AS REQUISIÇÕES
app.use(cors());

// CRIANDO O CAMINHO PARA LER O ARQUIVO DADOS.JSON

const caminho = path.join(__dirname, "data", "dados.json");


// CRIANDO A ROTA (post)
app.post("/clientes", async(req, res) => {
    // DESTRUCT PARA ACESSAR O CORPO DA REQUISIÇÃO ATRAVÉS DO ARQUIVO JSON
    const dadosCliente = req.body;
    console.log(`Dados do Cliente, ${dadosCliente}`);


    // TRATAMENTO DE ERROS
    try{

        // LÊ O CONTEÚDO DO ARQUIVO JSON
        const data = await fs.readFile(caminho, 'utf-8');
        // CONVERTE O CONTEÚDO DO ARQUIVO JSON PARA UM OBJETO
        const clientes = JSON.parse(data);

        // ADICIONA E LISTA OS NOVOS CLIENTES NO ARRAY
        clientes.push(dadosCliente);

        // CONVERTE O ARRAY ATUALIZADO E RETORNA PARA UMA STRING JSON
        const updateData = JSON.stringify(clientes , null , 2);
        // SALVA OS DADOS NO ARQUIVOS DADOS.JSON
        await fs.writeFile(caminho, updateData, 'utf-8')

        // RETORNA A MENSAGEM
        res.status(201).json({mensagem: "Dados recebidos com sucesso"})


    } catch(error){
        console.log("Erro ao manipular o arquivo", error);
        res.status(500).json({mensagem: "Erro ao salvar os dados"});
    }
});


app.listen(Port, () => {
    console.log(`Servidor rodando na porta http:localhost:${Port}`);
});