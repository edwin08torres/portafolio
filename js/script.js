const mobile = document.querySelector("#menu-mobile");
const linea1 = document.querySelector("#linea1");
const linea2 = document.querySelector("#linea2");
const linea3 = document.querySelector("#linea3");
const container = document.querySelector("#container");

cargarEventListeners();
function cargarEventListeners() {
  // mostraremos el menu mobile
  document.querySelector("#btn").onclick = () => {
    mobile.classList.toggle("active");
    linea1.classList.toggle("active");
    linea2.classList.toggle("active");
    linea3.classList.toggle("active");
  };
}

const proyectoList = [];
proyectoList.push({
  image: "../img/proy1.png",
  title: "Cafeteria",
  descripcion: "Pagina web de una cafeteria, con su respectivo carrito",
});
proyectoList.push({
  image: "../img/proy5.png",
  title: "Filtro de autos",
  descripcion: "Paginas web de autos",
});
proyectoList.push({
  image: "../img/proy2.png",
  title: "Simulador de correo",
  descripcion:
    "Pagina web de un simulador de correo, con su respectivas validaciones",
});
proyectoList.push({
  image: "../img/proy3.png",
  title: "Reseñas",
  descripcion: "Pagina web de reseñas para tu pagina web",
});
proyectoList.push({
  image: "../img/proy4.png",
  title: "Blog-Reseña",
  descripcion: "Blog de como se verían las reseñas",
});

//creando los proyectos
function renderizarProy(arr) {
  arr.forEach((proy) => {
    //card
    const card = document.createElement("DIV");
    card.classList.add("card"); //se nombra la clase

    //contenedor de la imagen
    const imgContainer = document.createElement("DIV");
    imgContainer.classList.add("img");

    //imagen de los proy
    const imgProy = document.createElement("IMG");
    imgProy.setAttribute("src", proy.image);
    imgContainer.append(imgProy); // se captura la img en el contenedor

    //contenido o descripcion del proy
    const content = document.createElement("DIV");
    content.classList.add("content");

    //creamos el contenedor de la descripción del proy
    const descripcion = document.createElement("DIV");
    descripcion.classList.add("descripcion"); // se le da una clase

    //titulo del proyecto
    const titleContent = document.createElement("H2");
    titleContent.innerHTML = proy.title; //se le asigna el titulo establecido en el array

    //se crea una etiqueta parrafo para el resumen del proyecto
    const resumenContent = document.createElement("P");
    resumenContent.innerHTML = proy.descripcion; // se le asigna el resumen establecido en el array

    //se add el titulo, y el resumen al contenedor de las descripciones
    descripcion.append(titleContent, resumenContent);

    const btn = document.createElement("DIV");
    btn.classList.add("btn");

    const btnDeploy = document.createElement("A");
    btnDeploy.setAttribute(
      "href",
      "https://shimmering-lebkuchen-346495.netlify.app/"
    );
    btnDeploy.setAttribute("target", "_blank");

    const iconoBtnDeploy = document.createElement("I");
    iconoBtnDeploy.classList.add("fa-solid", "fa-arrow-up-right-from-square");

    btnDeploy.append(iconoBtnDeploy);

    const btnGithub = document.createElement("A");
    btnGithub.setAttribute("href", "#");

    const iconoBtnGithub = document.createElement("I");
    iconoBtnGithub.classList.add("fa-brands", "fa-github");

    btnGithub.append(iconoBtnGithub);

    btn.append(btnDeploy, btnGithub);

    content.append(descripcion, btn);

    card.append(imgContainer, content);

    container.appendChild(card);
  });
}

renderizarProy(proyectoList);

window.onscroll = () => {{
     mobile.classList.remove("active");
     linea1.classList.remove("active");
     linea2.classList.remove("active");
     linea3.classList.remove("active");
}}