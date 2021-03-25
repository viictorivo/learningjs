import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupança} from "./ContaPoupança.js";
import {Conta} from "./Conta.js";


const clienteVictor = new Cliente("Victor", 37785569985);
const clienteCarlos = new Cliente("Carlos", 37785569985);

const contaCorrenteVictor = new ContaCorrente(clienteVictor, 1001);
const contaPoupanca1 = new ContaPoupança(0, clienteCarlos, 1003);

contaCorrenteVictor.depositar(500);
contaCorrenteVictor.sacar(200);


console.log(contaPoupanca1);
console.log(contaCorrenteVictor);
