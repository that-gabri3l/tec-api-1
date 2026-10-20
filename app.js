// importando o express (instalado via terminal)
import express from 'express';
const app = express();
const porta = 3000;

/* ROTAS */
// Configurando rota para o início da aplicação
app.get('/', function(req, res) {
    res.send('API de alunos com nodeJS, express e MySQL.');
});

// ROTA para visualizar TODOS os alunos
app.get('/alunos', (req, res) => {
    res.send('Dados de todos os alunos');
});

// ROTA/Endpoint para visualizar UM aluno
app.get('/alunos/:id', (req, res) => {
    res.send('Dados de um aluno qualquer');
});

// Endpoint para INSERIR UM aluno no banco de dados
app.post('/alunos', (req, res) => {
    res.send('Cadastrando um aluno.');
})

// PUT: Endpoint para atualiza TODOS os dados de UM aluno
    app.put('/alunos/:id', (req, res) => {
        res.send(`Aluno atualizado com sucesso!`);
    });


// PATCH: Endpoint para atualizar todos/alguns dados de UM aluno
app.patch('/alunos/:id', (req, res) => {
    res.send(`Dados do aluno atualizados com sucesso!`);
});


// DELETE: endpoint para excluir alunos
app.delete('/alunos/:id', (req, res) => {
    res.send(`Aluno excluído com sucesso!`);
});



/* SERVIDOR */
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
})
