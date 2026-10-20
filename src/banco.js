import mysql2 from 'mysql2';

const conexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'senacpenha',
    database : 'tec-api'
});

//conexao.connect();

conexao.connect( erro => {
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`); //Exibindo mensagem de erro amigavel
    } else {
        console.log('Banco de dados conectado');
    }
});
//exportando a conexão com o banco de dados
export default conexao;