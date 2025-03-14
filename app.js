let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    if (amigo !== '') {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        actualizarListaAmigos(); // Llamamos a la función para actualizar la lista en pantalla
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

/*
    Crear una función que recorra el array amigos y agregar cada nombre con un elemento <li>
    dentro de una lista <ul> en el documento HTML. Utilizano innerHTML para limpiar la lista
    antes de agregar nuevos elementos.
*/
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos'); // Seleccionamos la lista
    lista.innerHTML = ''; // Limpiamos la lista antes de agregar nuevos elementos

    for (let amigo of amigos) {
        let li = document.createElement('li'); // Creamos un nuevo elemento <li>
        li.textContent = amigo; // Asignamos el nombre del amigo al elemento <li>
        lista.appendChild(li); // Agregamos el elemento <li> a la lista <ul>
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