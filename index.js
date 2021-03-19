import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPouoança } from "./ContaPoupança.js";


const clienteVictor = new Cliente("Victor", 37785569985);

const contaCorrenteVictor = new ContaCorrente(1001, clienteVictor);
const contaPoupanca1 = new ContaPouoança (0, "Carlos", 1003);

contaCorrenteVictor.depositar(500);


console.log(contaPoupanca1);
