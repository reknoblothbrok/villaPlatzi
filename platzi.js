//Obtengo el canvas del HTML
var vp = document.getElementById("villaPlatzi");
//Especifico las dimensiones del canvas
var papel = vp.getContext("2d");

//Función para mover al lobo
document.addEventListener("keyup", moverTeclado);

//Mover mouse
var teclas = {
	UP: 38,														//keyCode_arrowUp
	DOWN: 40,													//keyCode_arrowDown
	LEFT: 37,													//keyCode_arrowLeft
	RIGHT: 39													//keyCode_arrowRight
};
var move = 20;

//Cargo las imagenes
//Cargo el mapa
//Variables del mapa
var fondo = {
	url: "tile.png",
	cargaOk: false
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//Cargo la vaca
//variables de la vaca
var vaca = {
	url: "vaca.png",
	cargaOk: false
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);
var xVaca = new Array();
var yVaca = new Array();

//Cargar pollo
//variables del pollo
var pollo = {
	url: "pollo.png",
	cargaOk: false
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
var xPollo = new Array();
var yPollo = new Array();

//Cargar cerdo
//variables del cerdo
var cerdo = {
	url: "cerdo.png",
	cargaOk: false
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
var xCerdo = new Array();
var yCerdo = new Array();

//Cargar lobo
var lobo = {
	url: "lobo.png",
	cargaOk: false,
}
lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);
xLobo = 250;
yLobo = 250;

//Función cargar fondo
function cargarFondo()
{
	fondo.cargaOk = true;
	dibujar();
}

//Función cargar vaca
function cargarVaca()
{
	vaca.cargaOk = true;
	dibujar();
}

//Función cargar pollo
function cargarPollo()
{
	pollo.cargaOk = true;
	dibujar();
}

//Función cargar cerdo
function cargarCerdo()
{
	cerdo.cargaOk = true;
	dibujar();
}

//Función para cargar lobo
function cargarLobo()
{
	lobo.cargaOk = true;
	dibujar();
}

//Función para dibujar
function dibujar()
{
	if(fondo.cargaOk == true)
	{
		papel.drawImage(fondo.imagen, 0, 0);
		if(vaca.cargaOk == true)
		{
			//Cantidad de animlaes en la granja
			var cantidad = aleatorio(1, 10);
			console.log("Cantidad de vacas: ", cantidad);
			for(var v = 0; v < cantidad; v++)
			{
				var x = aleatorio(0, 6);
				var y = aleatorio(0, 6);
				x = x * 70;
				y = y * 70;
				papel.drawImage(vaca.imagen, x, y);
			}
		}
		if(pollo.cargaOk == true)
		{
			//Cantidad de animlaes en la granja
			var cantidad = aleatorio(1, 10);
			console.log("Cantidad de pollos: ", cantidad);
			for(var p = 0; p < cantidad; p++)
			{
				var x = aleatorio(0, 6);
				var y = aleatorio(0, 6);
				x = x * 70;
				y = y * 70;
				papel.drawImage(pollo.imagen, x, y);
			}
		}
		if(cerdo.cargaOk == true)
		{
			//Cantidad de animlaes en la granja
			var cantidad = aleatorio(1, 10);
			console.log("Cantidad de cerdos: ", cantidad);
			for(var c = 0; c < cantidad; c++)
			{
				var x = aleatorio(0, 6);
				var y = aleatorio(0, 6);
				x = x * 70;
				y = y * 70;
				papel.drawImage(cerdo.imagen, x, y);
			}

		}
		if(lobo.cargaOk == true)
		{
			papel.drawImage(lobo.imagen, xLobo, yLobo);
		}
	}
}

//Función para generar un número aleatorio
function aleatorio(min, max)												//Los rangos entre parentesis son variables declaradas con anterioridad							
{																			//Math.random sirve para generar un número aleatorio entre 0 y 1 sin ser 0 y 1
	var resultado;															//Está variable es exclusiva para la función
	resultado = Math.floor(Math.random() * (max - min + 1)) + min;			//Math.floor sirve para redeondear hacía abajo
	return resultado;														//La palabra clave return, retorna un valor al lugar donde fue invocada la función
}																			//Math.ceil sirve para redondear hacía arriba

//Función para mover al lobo con el teclado
function moverTeclado(evento)
{
	console.log("Tecla oprimida");											// Me muestra cuantas veces preciono una tecla
	console.log(evento);													// Lo usamos para buscar el keyCode de las teclas
	switch(evento.keyCode)
	{
		case teclas.UP:
			yLobo = yLobo - move;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + move;
			dibujar(xLobo, yLobo);
		break;
		case teclas.LEFT:
			xLobo = xLobo - move;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + move;
			dibujar(xLobo, yLobo);
		break;
		default:
			console.log("Tecla equivocada");
		break;
	}
}