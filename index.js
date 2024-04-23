var elementosDuvida = document.querySelectorAll(".duvida");
const headerNav = document.getElementById("header_nav");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});

const verifyResolution = () => {
  if (window.innerWidth < 580) {
    headerNav.innerHTML = `
      <label id="navigation_label" for="navigation_button">
        <input type="checkbox" id="navigation_button"></input>
        <ion-icon id="navigation_icon" name="reorder-three-sharp"></ion-icon>
      </label>
      <div id="nav_box">
        <a href="#inicio">Início</a>
        <a href="#clinica">Clínica</a>
        <a href="#farmacia">Farmácia</a>
        <a href="#duvidas">Dúvidas</a>
      </div>`;

    const navButton = document.getElementById("navigation_button");
    let navBox = document.getElementById("nav_box");

    navButton.onchange = () => {
      navBox.classList.toggle("visible");
      console.log("apertado");
    };
    document.onclick = (e) => {
      var isClickInside = navBox.contains(e.target);

      if (!isClickInside) {
        navBox.classList.remove("visible");
      }
      else{
        console.log('foi dentro')
      }
    };
  }
};

window.onload = verifyResolution;
window.onresize = verifyResolution;
