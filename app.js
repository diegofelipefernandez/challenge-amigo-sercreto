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

