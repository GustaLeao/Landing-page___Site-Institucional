var elementosDuvida = document.querySelectorAll(".duvida");
const headerNav = document.getElementById("header_nav");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});
const verifyResolution = () => {
  if (window.innerWidth < 580) {
    headerNav.innerHTML =
      '<input type="checkbox" id="navigation_button"></input>';

    /*var links = ['inicio', 'farmacia', 'clinica', 'duvidas'];
    const linksContent = ['Início', 'Farmácia', 'Clínica', 'Dúvidas']

    for(i=0;i<links.length;i++){
        var a = document.createElement('a');
        a.href = `#${links[i]}`; // Você pode definir o href conforme necessário
        a.textContent = linksContent[i];
        headerNav.appendChild(a);
    }
    console.log()
    */

    /* Código experimental para adicionar os links no headerNav
    links.forEach(function(link) {
        var a = document.createElement('a');
        a.id = link;
        a.href = `#${links}`; // Você pode definir o href conforme necessário
        a.textContent = linksContent;
        headerNav.appendChild(a);
    });*/
  }
};

window.onload = verifyResolution;
window.onresize = verifyResolution;
