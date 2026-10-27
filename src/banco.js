import mysql2 from 'mysql2';

const conexao = mysql2.createConnection({
    host : '192.185.215.58',
    user : 'kuart612_TodoMundoPEN',
    password : 'senacpenha',
    database : 'kuart612_APINPenha'
});

//conexao.connect();

conexao.connect( erro => {
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`); //Exibindo mensagem de erro amigavel
    } else {
        console.log(`banco conectado em ${conexao.config.host}`);
    }
});
//exportando a conexão com o banco de dados
export default conexao;