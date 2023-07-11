// TO-DO !

const todoList = [];

const todoListElement = document.querySelector("#myUL");

todoListElement.innerHTML = localStorage.getItem('todoList');

document.querySelector("#add_button").addEventListener("click", addTodo);
document.querySelector("#myInput").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addTodo()
  }
});


//-------Obtenir des valeur de l'input à un tableau d'objet-------
function addTodo() {

  const todoText = document.querySelector("#myInput").value;
  if (todoText == "") {
    alert("You did not enter any item");
  } else {
    const todoObject = {
      id: todoList.length,
      todoText: todoText,
      isDone: false,
    };

    //---Avec UNSHIFT nous ajoutons le nouvel élément au tableau d'objet
    //--Pour que le noveau article affiche en haut
    todoList.unshift(todoObject);
    displayTodos();


  }
}

//------Modification de la valeur isDone à TRUE lorsque l'élément est cliqué
//------ou à FALSE si ça etait TRUE avant
function doneTodo(todoId) {
  //------findIndex() sert à trouver le numéro de l'index d'un certain 
  //------objet dans la todoList  
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);

  todoList[selectedTodoIndex].isDone
    ? (todoList[selectedTodoIndex].isDone = false)
    : (todoList[selectedTodoIndex].isDone = true);
  displayTodos();

}
 
//----Pour supprimer un élément de la liste
function deleteItem(x) {
  todoList.splice(
    todoList.findIndex((item) => item.id == x),
    1
  );
  displayTodos();

}

//---------afficher l'élément saisie à l'écran------
function displayTodos() {

    todoListElement.innerHTML = "";
    document.querySelector("#myInput").value = "";

    todoList.forEach((item) => {
    const listElement = document.createElement("li");
    const delBtn = document.createElement("i");

    listElement.innerHTML = item.todoText;
    listElement.setAttribute("data-id", item.id);

    delBtn.setAttribute("data-id", item.id);
    delBtn.classList.add("far");
    delBtn.classList.add("fa-trash-alt");
    delBtn.setAttribute("data-id", item.id);

    if (item.isDone) {
      listElement.classList.add("checked");
    }

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneTodo(selectedId);
    });

    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data-id");
      deleteItem(delId);
    });


    //On attache li sur ul
    todoListElement.appendChild(listElement);
    //On rattache le boutoon supprimer sur li
    listElement.appendChild(delBtn);

    localStorage.setItem("todoList", JSON.stringify(todoList));

  });

}

