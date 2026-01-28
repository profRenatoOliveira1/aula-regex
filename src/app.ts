// AULA REGEX
const teclado = require('prompt-sync')();

// Expressões
const regexCPF = /(\d{3})(\d{3})(\d{3})(\d{2})/;
const regexTelefone = /(\d{2})(\d{4,5})(\d{4})/;
const regexCEP = /(\d{2})(\d{3})(\d{3})/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexNomeComposto = /[\w{n}]\s[\d\w{n}]/;
const senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8}$/;

// Formatacao CPF
let cpf: string = "11111111111";
let cpfFormatado: string = cpf.replace(regexCPF, "$1.$2.$3-$4");

console.log(cpfFormatado);

// Formatando Telefone
let telefone: string = "11972259925";
let telefoneFormatado: string = telefone.replace(regexTelefone, "($1) $2-$3");

console.log(telefoneFormatado);

// Formatando CEP
let cep: string = "14160000";
let cepFormatado: string = cep.replace(regexCEP, "$1.$2-$3");

console.log(cepFormatado);

// Validando E-mail
let email = "felisberto.souza123@mail.com";
console.log(emailRegex.test(email));

// Validando nome composto
let nome: string = "João Vitor";
console.log(regexNomeComposto.test(nome));

// Validar números positivos

// Remover caracteres não numéricos
let expressao = "abc123def";
console.log(expressao.replace(/\D/g, ""));

// Validar senha com letra miúscula, números com 8 dígitos
let senha: string = "Senha213";
console.log(senhaRegex.test(senha));

// Extraia palavras que começam com letra maiúscula de um texto.
let texto = "Gato cachorro Casa";
let resultado = texto.match(/\b[A-Z][a-zA-Z]*/g);
console.log(resultado);
