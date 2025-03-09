let amigos = [ ]; // Array // para almacenar los nombres de los amigos

function agregarAmigo() { //funcion agregar nombres 
  const nombreInput = document.getElementById("nombreAmigo");
  const nombre = nombreInput.value.trim(); // Elimina espacios en blanco al inicio y al final

  if (nombre === "") { // Si nombre es igula vacio envia la alerta
      alert("Por favor, ingresa un nombre válido.");
      return;
    }

  amigos.push(nombre); // Agrega el nombre al array
  nombreInput.value = ""; // Limpia el campo de entrada

  actualizarListaAmigos(); // funcion muestra la lista de amigos
  nombreInput.focus();
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

  for (let i = 0; i < amigos.length; i++) {
      const amigo = amigos[i]; // Obtiene el amigo en la posición i
      const elementoLista = document.createElement("li");
      elementoLista.textContent = amigo;
      listaAmigos.appendChild(elementoLista);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos dos amigos para el sorteo.");
    return;
  }

const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSecreto = amigos[indiceAleatorio];
//alert("El amigo secreto sorteado es: " + amigoSecreto);
listaAmigos.innerHTML = ""; //Limpia Lista
document.getElementById("resultado").textContent = "El amigo secreto sorteado es: " + amigoSecreto;

}

