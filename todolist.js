"use strict"

ol.innerHTML = localStorage.getItem('list');

//affiche de l'info si aucune tache est en cours
maTache.style.display = (ol.innerHTML == "") ? "block" : "none";

//ajout de l'event del/urgent sur les span issus du storage
const spanDels = document.querySelectorAll(".delete");
for (let span of spanDels){
    span.onclick = () => del(span.parentElement);
}

const spanUrgs = document.querySelectorAll(".urgent");
for (let span of spanUrgs){ 
    span.onclick = () => urgent(span);
}

form.onsubmit = ()=>{
const li = document.createElement("li");
const texte = document.createElement("span");
texte.classList.add("texte");
texte.textContent = champ.value; //recupere le texte du 

const spanDel = document.createElement("span");
spanDel.classList.add("delete","material-icons","md-24")
spanDel.textContent = "delete_forever";

const spanUrg = document.createElement("span");
spanUrg.classList.add("urgent","material-icons","md-24")
spanUrg.textContent = "stars";

const spanOpt = document.createElement("span");
    spanOpt.classList.add("spanOpt");

spanOpt.appendChild(spanUrg);
spanOpt.appendChild(spanDel); //ajout de la span icone delete à li

 li.appendChild(texte);
    li.appendChild(spanOpt);

li.appendChild(spanUrg);
li.appendChild(spanDel);

ol.appendChild(li); //ajout du li à ol

champ.value = ""; // efface le champ
maTache.style.display = (ol.innerHTML == "") ? "block" : "none"; //met à jour la div tache en cours

//ajout de l'event del et urgent sur les span créées
spanDel.onclick = () => del(spanDel);
spanUrg.onclick = () => urgent(spanUrg);

localStorage.setItem('list', ol.innerHTML);

return false;

};

//fonction pour supprimer une tache
function del (element){
element.parentElement.remove(); //supprime le parent et les enfants

localStorage.setItem('list', ol.innerHTML);//met à jour le storage
maTache.style.display = (ol.innerHTML == "") ? "block" : "none"; //met à jour la div tache en cours
}

function urgent(el) {
    el.classList.toggle("gold");
    localStorage.setItem("list", ol.innerHTML); //save
}
