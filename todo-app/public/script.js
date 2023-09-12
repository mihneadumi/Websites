// import { Todo } from "./Todo";

import axios from 'axios'

const apiUrl = "https://64dc7dcae64a8525a0f69290.mockapi.io/todos"
const updateUrl = "http://localhost:1234/update.html"

let todos = [];

const input = document.querySelector(".search-bar");
input.addEventListener("input", search)

axios.get(apiUrl)
.then(response => {
    todos = response.data
    render(list, todos);
})

// get ul with todos
const list = document.querySelector("#todo-list");


// render function
function render(ul, todos) {
    todos.sort((a, b) => {
        if(a.date > b.date){
            return 1;
        }
        else if(b.date > a.date){
            return -1
        }
        else return 0;
    });
    ul.innerHTML = "";
    todos.forEach(item => {
        const li = document.createElement("li");
        li.className = "item"
        
        const content = document.createElement("div");
        content.className = "item-content"
        content.addEventListener("click", (e) => {
            e.preventDefault();
            openPage(updateUrl + `?id=${item.id}`);
        })

        const div = document.createElement("div");
        div.className = "item-header"
    

        const h4_type = document.createElement("h4");
        h4_type.className = "h4-type";
        h4_type.innerText = "Task";
        
        const h4_date = document.createElement("h4");
        h4_date.innerText = item.date;
        h4_date.className = "item-date";
    
        const p = document.createElement("p");
        p.className = "item-text";
        p.innerText = `${item.name} has to ${item.description}, at ${item.location}`;
    
        const buttonDel = document.createElement("i");
        buttonDel.className = "fa fa-close"
        buttonDel.addEventListener("click", (e) => {
            e.preventDefault();
            axios.delete(`${apiUrl}/${item.id}`)
            .then(
                ul.removeChild(li)
            )
        })

        div.append(h4_type);
        div.append(h4_date);
        
        content.append(div);
        content.append(p);

        li.append(content);
        li.append(buttonDel)
    
        ul.append(li); 
    });
}

function openPage(updateUrl){
    window.open(updateUrl, "_self");
  }

function search() {
    const filter = document.querySelector(".search-bar").value.trim().toUpperCase();
    let filtered_todos = todos.filter(todo => {
        for(atr in todo){
            if(todo[atr].toUpperCase().includes(filter)){
                return todo;
            }
        }
    })
    render(list, filtered_todos);
}