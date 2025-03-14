let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    if (amigo !== '') {
        amigos.push(amigo);
        alert('Amigo agregado.');
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

// Creamos una función para recorrer el arreglo de amigos y mostrarlos en una lista
function listaAmigos() {
    // Obtenemos el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    // Limpiamos la lista existente
    lista.innerHTML = '';
    // Iteramos sobre el arreglo
    for (let i=0; i<amigos.length; i++) {
        // Creamos un elemento de lista
        let item = document.createElement('li');
        // Agregamos elementos a la lista, creando un nuevo elemento de lista
        item.appendChild(document.createTextNode(amigos[i]));
    }
}