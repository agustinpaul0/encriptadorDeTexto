const inputTexto = document.querySelector(".text-input");
const mensaje = document.querySelector(".texto2-munheco");
const munheco = document.querySelector(".img-munheco");
const munhecoText = document.querySelector(".texto1-munheco");
const txtCifrado = document.querySelector(".texto2-munheco");
const informacion = document.querySelector(".informacion");

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
	txtCifrado.innerHTML = stringEncriptado;
	document.querySelector(".copiar").style.display = "show";
	document.querySelector(".copiar").style.display = "inherit";

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
	txtCifrado.innerHTML = stringDesencriptado;
	document.querySelector(".copiar").style.display = "show";
	document.querySelector(".copiar").style.display = "inherit";

	return stringDesencriptado;
}

function btnCopiar() {

	copiar();

}

function copiar(texto) {

	mensaje.select();
	navigator.clipboard.writeText(mensaje.value);
	mensaje.value = "";
	alert("Texto copiado");

}