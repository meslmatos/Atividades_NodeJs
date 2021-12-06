import {PessoaFisica} from './PessoaFisica.js';
import {PessoaJuridica} from './PessoaJuridica.js';

const pf1 = new PessoaFisica();
pf1.id = 1;
pf1.nome = "Britney Spears";
pf1.idade = 49;
pf1.cpf = 11112223232;

const pj1 = new PessoaJuridica();
pj1.id =2;
pj1.nome = "Floor Jansen";
pj1.idade = 37;
pj1.cnpj = 222233029302;

console.log(pf1);
console.log("---------------");
console.log(pj1);