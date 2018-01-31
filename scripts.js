var a = prompt ('podaj wartość a');
var b = prompt ('podaj wartość b');
var value = (a * a) - (2 * a * b) - (b * b);
alert (value);
console.log (value);
if (value == 0) {
	alert ('wynik działania jest równy 0');
	console.log ('wynik działania jest równy 0');
}else{
	alert ('wynik różny od zera');
	console.log ('wynik różny od zera')
}
