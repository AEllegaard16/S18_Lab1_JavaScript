function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let n = document.getElementById("qty").value;
  let demo = document.getElementById("demo");
  demo.innerHTML = "";
  for (let i = 0; i < n; i++) {
    let titre = document.createElement("h2");
    titre.innerHTML = document.getElementById("titre").value + " " + i;
    demo.appendChild(titre);
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