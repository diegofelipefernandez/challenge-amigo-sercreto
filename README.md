![Portada de Amigo Secreto](https://github.com/user-attachments/assets/650132b1-0402-4104-85ba-0414292c5061)

<h1 align="center">🎁 Amigo Secreto</h1>

<p align="right">
   <img src="https://img.shields.io/badge/STATUS-TERMINADO-green">

   **Amigo Secreto** es una aplicación web sencilla que permite a los usuarios agregar nombres de amigos y realizar un sorteo aleatorio para asignar un amigo secreto.
</p>

<h2>🚀 Características</h2>

* ✅ Agregar nombres a una lista de participantes.
* ✅ Visualizar la lista de amigos ingresados.
* ✅ Realizar un sorteo aleatorio para seleccionar un amigo secreto.

<h2>📷 Capturas de Pantalla</h2>

* **Agregamos** nombres a la lista ![Inserta un nombre](https://github.com/user-attachments/assets/cd005bff-b6cf-48ad-a6c2-5a4dbaffef9f)
* **Mostramos** el nombre agregado a la lista ![image](https://github.com/user-attachments/assets/ec19b83c-6008-47f6-bbc2-ccd1b3886628)
* **Sorteamos** los nombres agregados a la lista ![image](https://github.com/user-attachments/assets/3e00e118-b893-4a71-be90-de971bbcb3ca)

<h2>🛠️ Tecnologías Utilizadas</h2>

* **HTML** → Estructura del sitio web.
* **CSS** → Estilos y diseño de la interfaz.
* **JavaScript** → Lógica del juego y manipulación del DOM.

<h2>📌 Instalación y Uso</h2>

1. 📥 Clona este repositorio o descarga los archivos.
`git clone https://github.com/diegofelipefernandez/challenge-amigo-sercreto.git`
2. 🌐 Abre el archivo `index.html` en tu navegador.
3. ✏️ Escribe los nombres de los participantes y agrégalos a la lista.
4. 🎲 Presiona el botón de sorteo para seleccionar un amigo secreto.

<h2>🎯 Cómo Funciona</h2>

1. 📝 El usuario ingresa los nombres en el campo de texto y los añade a la lista.
2. 📃 La lista de participantes se actualiza en pantalla.
3. 🎰 Al presionar "Sortear amigo", se elige un nombre al azar de la lista.
4. 🎊 El nombre seleccionado se muestra en pantalla como resultado del sorteo.

<h2>📄 Código Fuente Principal</h2>
<h3>📌 Función para Agregar Amigos</h3>
<pre>
   function agregarAmigo() {
      let amigo = document.getElementById('amigo').value;
      if (amigo !=== '') {
         amigos.push(amigo);
         document.getElementById('amigo').value = '';
         actualizarListaAmigos();
      } else {
         alert('Por favor, inserte un nombre.');
      }
   }
</pre>

<h3>🎲 Función para Sortear un Amigo Secreto</h3>
<pre>
   function sortearAmigo() {
      if (amigos.length === 0) {
         alert('No hay amigos en la lista.');
      } else {
         let indice = Math.floor(Math.random() * amigos.length);
         let nombre = amigos[indice];
         document.getElementById('resultado').innerHTML = nombre;
      }
   }
</pre>

<h2>🤝 Contribuciones</h2>
<p>
   Si deseas mejorar este proyecto, ¡eres bienvenido/a a contribuir!
</p>

1. 🍴 Haz un fork del repositorio.
2. 🌿 Crea una nueva rama con tu mejora.
3. 💾 Realiza los cambios y haz un commit.
4. 🔄 Envía un pull request para revisión.

#
<h3 align="center">🎉 ¡Diviértete organizando tu Amigo Secreto! 🎉</h3>
