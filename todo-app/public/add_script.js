
import axios from 'axios'

const apiUrl = "https://64dc7dcae64a8525a0f69290.mockapi.io/todos"

// get submit button
const submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name")
    const location = document.querySelector("#location");
    const date = document.querySelector("#date");
    const description = document.querySelector("#todo-text");

    if(!name.value || !location.value || !description.value){
        alert("All fields must be filled!");
        return;
    }

    const item = {
        name: name.value,
        location: location.value,
        date: date.value,
        description: description.value,
    }

    axios.post(apiUrl, item).then(
        alert("Succesfully added ToDo!")
    )

    name.value = null;
    location.value = null
    date.value = "2023-08-11";
    description.value = null;
})
