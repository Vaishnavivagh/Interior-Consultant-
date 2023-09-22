const navbar =  document.querySelector("nav");

const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", ()=> {
    navbar.classList.toggle("nav-bar");
    menuButton.classList.toggle("clicked");
}

);