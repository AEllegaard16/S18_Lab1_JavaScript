function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let n = document.getElementById("qty").value;
  let demo = document.getElementById("demo");
  demo.innerHTML = "";
  for (let i = 0; i < n; i++) {
    let titre = document.createElement("h2");
    titre.innerHTML = document.getElementById("titre").value + " " + i;
    titre.setAttribute("monId", "Id" + i);
    titre.addEventListener("mousedown", function(event) {
      console.log(event);
      console.log(event.target);
      console.log(event.target.getAttribute("monId"));
      if (event.target.style.backgroundColor == "gray") {
        event.target.style.backgroundColor = "white";
      }
      else event.target.style.backgroundColor = "gray";      
    });
    titre.addEventListener("mouseenter", function(event) {
      aside.classList.add('show');
    });
    titre.addEventListener("mouseleave", function(event) {
      aside.classList.remove('show');
    });
    demo.appendChild(titre);

    let aside = document.createElement("aside");
    aside.innerHTML = "Plus de détails à propos de : " + i;
    demo.appendChild(aside);

    let contenu = document.createElement("p");
    contenu.innerHTML = document.getElementById("contenu").value + " " + i;
    demo.appendChild(contenu);
  }
}
  
function changerStyle() {
  let contenus = document.getElementById("demo").getElementsByTagName("p");
  let couleur = document.getElementById("couleur").value;
  for (i = 0; i < contenus.length; i++) {
    contenus[i].style.color = couleur
  }
}
  
function changerClassBoutons() {
  let boutons = document.getElementsByTagName("button");
  let nomClasse = document.getElementById("btnClass").value;
  for (i = 0; i < boutons.length; i++) {
    boutons[i].className = nomClasse;
  }
}