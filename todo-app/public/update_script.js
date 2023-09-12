
import axios from 'axios'

const apiUrl = "https://64dc7dcae64a8525a0f69290.mockapi.io/todos"
const item_id = window.location.search.split("=")[1];

const name = document.querySelector("#name")
const location = document.querySelector("#location");
const date = document.querySelector("#date");
const description = document.querySelector("#todo-text");

let todo;

axios.get(apiUrl + `/${item_id}`)
.then(response => {
    todo = response.data;

    name.value = todo.name;
    location.value = todo.location;
    date.value = todo.date;
    description.value = todo.description;
})



// get submit button
const submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();

    if(!name.value || !location.value || !description.value){
        alert("All fields must be filled!");
        return;
    }

    const new_item = {
        name: name.value,
        location: location.value,
        date: date.value,
        description: description.value,
    }

    axios.put(apiUrl + `/${item_id}`, new_item)
    .then(alert("Todo updated!"));

})
