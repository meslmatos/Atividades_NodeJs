class Cliente{
    id;
    nome;
    sobrenome;
    cpf;

constructor(nome, sobrenome, cpf, id = null){
    this.id = id;
    this.nome= nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
}
}
export default Cliente;
