// Crea la clase tarea con sus respectivas caracteristicas, siendo 
// titulo, la unica ingresada por el usuario
class Tarea {
    constructor(titulo) {
        this.titulo = titulo;
        this.fecha = new Date().toLocaleString();
        this.id = new Date().getTime();
        this.realizada = false;
    }
}
//Seleccionar los elementos del html
const addTask = document.getElementById('add-task');
const textInput = document.getElementById('text-input');
const taskList = document.getElementById('task-list');
let tareas = [];
//Cuando se clickea el boton...
addTask.addEventListener("click", (event) => {
    event.preventDefault();
    //Instancia el objeto "Tarea"
    let task = new Tarea(textInput.value);
    //añade la tarea ingresada por el usuario a una lista "permanente"
    tareas.push(task);
    //se muestran por consola las tareas sin borrarse
    ShowTarea(task);
});

function ShowTarea(tarea) {
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    h3.innerText = tarea.titulo;
    if (tarea.realizada === true) {
        h3.style.textDecoration = "line-through";
    }
    taskList.appendChild(h3);
    let checkbox = document.createElement('input');
    checkbox.setAttribute("class", "checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.onclick = () => ToggleCheckbox(tarea.id);
    //checkbox.innerHTML = `<input type="checkbox" onclick="ToggleCheckbox(${tarea.id})">`
    li.id = tarea.id;
    li.appendChild(h3)
    li.appendChild(checkbox);
    taskList.appendChild(li);
}
//Cuando se clickea la checkbox...
function ToggleCheckbox(id){
    let tarea = tareas.find((tarea) => tarea.id === id);
    if (tarea.realizada === true) {
        tarea.realizada = false;
    }
    else{
        tarea.realizada = true;
    }

    ShowTarea(tarea)
    BorraTareaDOM(id);
    console.table(tareas);
}
function BorraTareaDOM(id){
    let tareaHtml = document.getElementById(id);
    taskList.removeChild(tareaHtml);
}
