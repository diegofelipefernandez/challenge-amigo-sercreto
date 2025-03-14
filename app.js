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

/*
    Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados
    en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
*/
function sortearAmigo() {
    // Comprobamos si el arreglo está vacío antes de sortear
    if (amigos.length === 0) {
        alert('No hay amigos en la lista.');
    } else {
        // Usamos Math.random() y Math.floor() para obtener un índice aleatorio del arreglo
        let indice = Math.floor(Math.random() * amigos.length);
        // Utilizamos el índice para acceder al nombre correspondiente
        let nombre = amigos[indice];
        // Usamos document.getElementById() e innerHTML para mostrar el amigo soretaeado
        document.getElementById('resultado').innerHTML = nombre;
    }
}