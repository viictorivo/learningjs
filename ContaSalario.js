import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(cliente){
        super("salario", 0, cliente,)
    }

    sacar(valor){
        const taxa = 1.05;
        return this._sacar(valor, taxa);
    }
}
