import {Categoria} from './Categoria.js/';
import {Produto} from './Produto.js';

const c1 = new Categoria();
c1.nome = "Eletrônicos";
c1.descricao = "Produtos eletrônicos no geral"

const p1 = new Produto();
p1.nome = "Televisão";
p1.valor = 1200.00;


console.log(c1);
console.log(p1);
console.log(p1.nome);