const inputTexto = document.querySelector(".text-input");
const mensaje = document.querySelector(".texto2-munheco");
const munheco = document.querySelector(".img-munheco");
const munhecoText = document.querySelector(".texto1-munheco");
const txtCifrado = document.querySelector(".texto2-munheco");
const informacion = document.querySelector(".informacion");

function Numeros(string){//Solo minúsculas y sin acentos ni caracteres especiales

    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyz1234567890?¿¡!""/()%$.,#& ';//Caracteres validos
	
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
	
    //Retornar valor filtrado
    return out;

} 

function btnEncriptar() {

	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	inputTexto.value = "";

}

function encriptar(stringEncriptado) {

	let matrizCodigo = [ ["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"] ];
	stringEncriptado = stringEncriptado.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {

		if (stringEncriptado.includes(matrizCodigo[i][0])) {

			stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

		}

	}

	munheco.style.display = "none";
	munhecoText.style.display = "none";
	informacion.style.display = "none";
	txtCifrado.style.display = "block";
	document.querySelector(".resultado").style.display = "block";
	txtCifrado.innerHTML = stringEncriptado;
	document.querySelector(".copiar").style.display = "show";
	document.querySelector(".copiar").style.display = "inherit";
	document.querySelector(".limpiar").style.display = "show";
	document.querySelector(".limpiar").style.display = "inherit";

	return stringEncriptado;

}

function btnDesencriptar() {

	const textoDesencriptado = desencriptar(inputTexto.value);
	mensaje.value = textoDesencriptado;
	inputTexto.value = "";

}

function desencriptar(stringDesencriptado) {

	let matrizCodigo = [ ["enter","e"] , ["imes","i"] , ["ai","a"] , ["ober","o"] , ["ufat","u"] ];
	stringDesencriptado = stringDesencriptado.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {

		if (stringDesencriptado.includes(matrizCodigo[i][0])) {

			stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

		}

	}
	munheco.style.display = "none";
	munhecoText.style.display = "none";
	informacion.style.display = "none";
	txtCifrado.style.display = "block";
	document.querySelector(".resultado").style.display = "block";
	txtCifrado.innerHTML = stringDesencriptado;
	document.querySelector(".copiar").style.display = "show";
	document.querySelector(".copiar").style.display = "inherit";
	document.querySelector(".limpiar").style.display = "show";
	document.querySelector(".limpiar").style.display = "inherit";

	return stringDesencriptado;
}

function btnCopiar() {

	copiar();

}

function copiar(texto) {

	mensaje.select();
	navigator.clipboard.writeText(mensaje.value);
	mensaje.value = "";
	swal("¡Texto copiado con éxito!","Se lo redireccionará al inicio","success").then(function(){
    location.reload();
})
}
