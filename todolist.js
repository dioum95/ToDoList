"use strict"
 form.onsubmit = ()=>{
    const li = document.createElement("li");
    const spanDel = document.createElement("span");
    spanDel.textContent = "[x]";
    spanDel.onclick = ()=>del(li);
    li.innerHTML = champ.value;
    li.appendChild(spanDel);
    ol.appendChild(li);
    champ.value = "";
    return false

 };

 function del (element){
    element.remove();
 }