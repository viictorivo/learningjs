import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    
    constructor(Cliente, agencia){
        super("corrente", 0, Cliente, agencia);
            ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.13;
        return this._sacar(valor, taxa);
    }

}