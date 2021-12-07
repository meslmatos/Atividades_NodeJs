import  {Sequelize}  from 'sequelize';

const Database = new Sequelize(
    'postgres', //databse
    'postgres', //user
    '123456', //senha
    {
        host: 'localhost', //endereco
        port: 5432, //porta
        dialect: 'postgres'
    }
);

export default Database;
