let inputTexto = document.querySelector("#entradaTexto");
let cardContainer = document.querySelector(".card-container");

let btnEncriptar = document.querySelector(".encriptar");
let btnDesencriptar = document.querySelector(".desencriptar");




function validarInput(input) {
  const regex = /^[a-z\s]+$/;  
  return regex.test(input);
}

btnEncriptar.addEventListener("click", () => {   //validador
  if (inputTexto.value === "") {
    alert("El campo de texto no puede estar vacío");
    return;
  }
  if (!validarInput(inputTexto.value)) {
    alert("El texto solo debe contener letras minúsculas y espacios");  
    return;
  }

  cardContainer.innerHTML = "";
  let textoEncriptado = encriptar(inputTexto.value); // Obtener el texto encriptado
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-body">
      <p class="card-text">${textoEncriptado}</p>
    </div>
    <div class="card-footer">
      <button class="secondary-button button-copy">Copiar</button>
    </div>
  `;
  inputTexto.value = "";
  cardContainer.appendChild(card);

  let copyButton = card.querySelector(".button-copy");

  copyButton.addEventListener("click", () => {
    let texto = card.querySelector("p").innerText;

    navigator.clipboard.writeText(texto)
      .then(() => {
        copyButton.textContent = "Copiado al portapapeles!";

        setTimeout(() => {
          copyButton.textContent = "Copiar";
        }, 1000);
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  });

  let cardBody = document.querySelector(".card-body");
  cardBody.style.justifyContent = "space-between";
});

function encriptar(texto) {
  let textoEncriptado = "";

  for (let i = 0; i < texto.length; i++) {        //encriptar
    if (texto[i] === "a") {
      textoEncriptado += "ai";
    } else if (texto[i] === "e") {
      textoEncriptado += "enter";
    } else if (texto[i] === "i") {
      textoEncriptado += "imes";
    } else if (texto[i] === "o") {
      textoEncriptado += "ober";
    } else if (texto[i] === "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += texto[i];
    }
  }

  return textoEncriptado;
}

btnDesencriptar.addEventListener("click", () => {
  if (inputTexto.value === "") {
    alert("El campo de texto no puede estar vacío");
    return;
  }

  // Limpiar el contenedor y crear una nueva tarjeta
  cardContainer.innerHTML = "";
  let textoDesencriptado = desencriptar(inputTexto.value); // Obtener el texto desencriptado
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-body">
      <p class="card-text">${textoDesencriptado}</p>
    </div>
    <div class="card-footer">
      <button class="secondary-button button-copy">Copiar</button>
    </div>
  `;
  inputTexto.value = "";
  cardContainer.appendChild(card);

  let copyButton = card.querySelector(".button-copy");

  copyButton.addEventListener("click", () => {
    let texto = card.querySelector("p").innerText;

    navigator.clipboard.writeText(texto) 
      .then(() => {
        // Cambiar el texto del botón a "Copiado al portapapeles!"
        copyButton.textContent = "Copiado al portapapeles!";

        // Restaurar el texto original del botón después de 1 segundo
        setTimeout(() => {
          copyButton.textContent = "Copiar";
        }, 1000);
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  });

  // Asegurar que el estilo del texto de la tarjeta se mantenga igual
  let cardBody = document.querySelector(".card-body");
  cardBody.style.justifyContent = "space-between";
});

function desencriptar(textoEncriptado) {                //desencriptar
  let texto = "";

  for (let i = 0; i < textoEncriptado.length; i++) {
    if (textoEncriptado[i] === "a" && textoEncriptado[i + 1] === "i") {
      texto += "a";
      i++;
    } else if (
      textoEncriptado[i] === "e" &&
      textoEncriptado[i + 1] === "n" &&
      textoEncriptado[i + 2] === "t" &&
      textoEncriptado[i + 3] === "e" &&
      textoEncriptado[i + 4] === "r"
    ) {
      texto += "e";
      i += 4;
    } else if (
      textoEncriptado[i] === "i" &&
      textoEncriptado[i + 1] === "m" &&
      textoEncriptado[i + 2] === "e" &&
      textoEncriptado[i + 3] === "s"
    ) {
      texto += "i";
      i += 3;
    } else if (
      textoEncriptado[i] === "o" &&
      textoEncriptado[i + 1] === "b" &&
      textoEncriptado[i + 2] === "e" &&
      textoEncriptado[i + 3] === "r"
    ) {
      texto += "o";
      i += 3;
    } else if (
      textoEncriptado[i] === "u" &&
      textoEncriptado[i + 1] === "f" &&
      textoEncriptado[i + 2] === "a" &&
      textoEncriptado[i + 3] === "t"
    ) {
      texto += "u";
      i += 3;
    } else {
      texto += textoEncriptado[i];
    }
  }

  return texto;
}
