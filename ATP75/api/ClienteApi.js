import { Router } from "express";
import Cliente from "./../model/Cliente.js";
import Cliente from "./../model/Cliente.js";
import ClienteRepository from"./../repository/ClienteRepository.js";

const ClienteApi = Router();
const repository = new ClienteRepository();

ClienteApi.get('/', async(req,resp)=>{
    const listar = await repository.read();
    resp.send(listar);
});

ClienteApi.post('/', async(req,resp)=>{
    let {nome,sobrenome,cpf} = req.body;
    const c1 = new Cliente(nome,sobrenome,cpf);
    
    const retorno  = await repository.create(c1);
    resp.send(retorno);
});

ClienteApi.put('/:id', async(req,resp)=>{
    let id = req.params.id;
    let{nome,sobrenome,cpf} = req.body;
    const c1 = new Cliente(nome, sobrenome,cpf,id);
    const retorno = await repository.update(c1);
    resp.send(retorno);

});

ClienteApi.delete('/:id', async(req,resp)=>{
    const id = req.params.id;
    const retorno = await repository.delete(id);
    resp.send(JSON.stringify(retorno));
});

export default ClienteApi;