import { Conta } from "./Conta.js";

export class ContaPoupança extends Conta{

    constructor (saldoInicial, cliente, agencia){
        super("poupança", 0, cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}