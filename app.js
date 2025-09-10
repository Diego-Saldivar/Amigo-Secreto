//descubri que tenía más tiempo para esto después XD en fin, 2 días sin dormir así que espero esto este bien 
let amigos = [];
let sorteados = [];

// Capturar el valor del input y agregar a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; 
    // limpiar campo
    mostrarLista();
}

// Mostrar lista de amigos
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    // limpiar antes de volver a renderizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    if (sorteados.length === amigos.length) {
        alert("Todos los amigos ya han sido sorteados.");
        return;
    }

    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
    } while (sorteados.includes(indiceAleatorio));

    sorteados.push(indiceAleatorio);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigos[indiceAleatorio]}</strong></li>`;
}
