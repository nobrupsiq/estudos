//Pedir para o usuario digitar um numero
var n1 = prompt("Digite um numero: ");
//converter em numero inteiro
n1 = parseInt(n1);
//pedir para o usuario digitar outro numero
var n2 = prompt("Digite outro numero: ");
// converter em numero inteiro
n2 = parseInt(n2);
/*
Mostrar num alert o seguinte texto
o resto da divisão de (n1) por (n2) é: (resultado)
*/
var resultado = n1 % n2;
alert("O resto da divisão de " + n1 + " por " + n2 + " é: " + resultado);
/*
mostrar num alert o seguinte texto
o numero (n1) elevado a (n2) é: (resultado);
*/
alert("O numero " + n1 + " elevado a " + n2 + " é: " + n1 ** n2);
