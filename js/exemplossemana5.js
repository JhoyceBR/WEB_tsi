let frase = "Olá, mundo!";
let complemento = "Turma de TSI.";
let resultado = frase + complemento; // concatenação

console.log(resultado);

let letra = resultado[0]; // O
let tamanho = resultado.length; // tamanho
console.log(tamanho);

let ultimaletra = resultado[tamanho-1]; // retorna o ultimo elemento da string
console.log(ultimaletra);

let i = 0;
while(i<tamanho){
  console.log(resultado[i]); // soletra a string
  i++;
}

// slice - fatia a string

console.log(resultado.slice(0, 2));

// upper

console.log(resultado.toUpperCase());

// lower
console.log(resultado.toLowerCase());

// replace - substituir

resultado = resultado.replace("mundo", "galera");
console.log(resultado);

let nome = " Severino da Silva ";
console.log(nome.length);
nome = nome.trim(); // retira os espaços antes e depois do texto.
console.log(nome.length);

// split

let divisaoDeNome = nome.split(" ");
console.log(divisaoDeNome);

let primeiroNome = divisaoDeNome[0];
let sobrenome = divisaoDeNome[1]+divisaoDeNome[2];

console.log(sobrenome)
