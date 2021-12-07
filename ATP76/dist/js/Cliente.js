export class Cliente {
    get id() {
        return this._id;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
