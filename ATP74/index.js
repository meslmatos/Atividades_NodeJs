import Cliente from "./model/Cliente.js";
import ClienteRepository from "./repository/ClienteRepository.js";



console.log("-------------Clientes---------------");
//criando objeto de cliente
const c1 = new Cliente();
c1.id = 4;
c1.nome = "Capitão";
c1.sobrenome = "Barbosa";
c1.cpf = 7763636363663632;

const repository = new ClienteRepository();
//await repository.create(c1);

let listar = await repository.read();
//console.log(listar);

//await repository.update(c1);

await repository.delete(4);

