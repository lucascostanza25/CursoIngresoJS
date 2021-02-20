function mostrar()
{
	let numero;
	const MAXIMO=10;
	const MINIMO=1;
	
	numero=Math.round(Math.random() * (MAXIMO-MINIMO)+MINIMO);
	//Math.random se usa para generar un numero al azar entre 0 y 0,99...
	//Math.round se usa para redondear un numero con decimal
	alert(numero);
}