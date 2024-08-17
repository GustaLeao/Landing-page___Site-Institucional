const clickPointsNodeList = document.querySelectorAll(".click_point");
const clickPointsDuvida = []
const headerNav = document.getElementById("header_nav");
const shape = document.getElementById("shape");
const containersDuvida = document.querySelectorAll('.duvida')

clickPointsNodeList.forEach(el => clickPointsDuvida.push(el))
clickPointsDuvida.forEach(function (duvida,i) {
  duvida.addEventListener("click", (e) => {
    const containerIndex = clickPointsDuvida.findIndex(container => container == e.target);
    containersDuvida[containerIndex].classList.toggle('ativa')
  });
});

const verifyClick = (e,clickedEl,modifyEl)=>{
    var isClickInside = clickedEl == e.target;

    if (isClickInside) {
      modifyEl.classList.toggle("visible");
    } else if(!isClickInside || modifyEl.classList.contains('visible')){
      modifyEl.classList.remove('visible')
    }
  
}


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

    document.onclick = (e) => verifyClick(e,navButton,navBox)

    
  }
  if (window.innerWidth > 580) {
    const icon = document.getElementById('navigation_icon');
    const checkbox = document.getElementById("navigation_label");
    checkbox.remove();
    icon.remove();
    shape.classList.remove("invisible");
  }
};

window.onload = verifyResolution;
window.onresize = verifyResolution;
