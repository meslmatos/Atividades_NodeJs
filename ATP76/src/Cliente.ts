export class Cliente{
    private _id:number;
    private _nome:string;
    private _sobrenome:string;
    private _cpf:string;

   
    get id():number{
        return this._id;
    }

    set nome(nome:string){
        this._nome = nome;
    }
    get nome():string{
        return this._nome;
    }

    set sobrenome(sobrenome:string){
        this._sobrenome = sobrenome;
    }
    get sobrenome():string{
        return this._sobrenome;
    }

    set cpf(cpf:string){
        this._cpf = cpf;
    }
    get cpf():string{
        return this._cpf;
    }
}