// EXPRESSÃO
//const regexNomeComposto = /^[A-Z][a-z]+\s[A-Z][a-z]+$/
const regexNomeComposto = /^\p{Lu}\p{Ll}+\s\p{Lu}\p{Ll}+$/u; // Unicode Property Scapes

// Validar se nome informado é composto
let nome: string = "João Vitor";

const testeRegex = regexNomeComposto.test(nome);

if(testeRegex) {
    console.log(`O nome ${nome} é composto.`);
} else {
    console.log(`O nome ${nome} é simples.`);
}

// ----------------------------------------------------------

// EXPRESSÃO
const regexCPF = /(\d{3}).(\d{3}).(\d{3})-(\d{2})/

// Validar se CPF está formatado
let cpf: string = "301.827.432-00";

const validacaoRegex = regexCPF.test(cpf);

if(validacaoRegex) {
    console.log(`O CPF está formatado.`);
} else {
    console.log(`O CPF não está formatado.`);
}

// ---------------------------------------------------
// EXPRESSÃO
//const cpfRegex = `/(\d{3})(\d{3})(\d{3})(\d{2})/`

let cpf1: string = "301.264.871-34";

// XXX.XXX.XXX-XX
let cpfFormatado: string = cpf.replace(/\D/g, "");

console.log(cpfFormatado);

// DESAFIO: RECEBA OS NÚMEROS DE UM CEP E COLOQUE NO FORMATO
// XX.XXX-XXX

// const cepRegex = /(\d{2})(\d{3})(\d{3})/

// let cep: string = "14160000";

// console.log(cep.replace(cepRegex, "$1.$2-$3"));
