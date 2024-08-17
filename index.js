var elementosDuvida = document.querySelectorAll(".duvida");
const headerNav = document.getElementById("header_nav");
const shape = document.getElementById("shape");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});

const verifyResolution = () => {
  if (window.innerWidth <= 580) {
    headerNav.innerHTML = `
    <ion-icon id="navigation_icon" name="reorder-three-sharp"></ion-icon>
      <label id="navigation_label" for="navigation_button">
        <input type="checkbox" id="navigation_button"></input>
      </label>
      <div id="nav_box">
        <a href="#inicio">Início</a>
        <a href="#clinica">Clínica</a>
        <a href="#farmacia">Farmácia</a>
        <a href="#duvidas">Dúvidas</a>
      </div>`;
    shape.classList.add("invisible");
    const navButton = document.getElementById("navigation_button");
    let navBox = document.getElementById("nav_box");

    

    document.onclick = (e) => {
      var isClickInside = navButton == e.target;
      console.log(isClickInside);

      if (isClickInside) {
        navBox.classList.toggle("visible");
      } else if(!isClickInside || navBox.classList.contains('visible')){
        navBox.classList.remove('visible')
      }
    };
  }
  if (window.innerWidth > 580) {
    const checkbox = document.getElementById("navigation_label");
    checkbox.remove();
    shape.classList.remove("invisible");
  }
};

window.onload = verifyResolution;
window.onresize = verifyResolution;
