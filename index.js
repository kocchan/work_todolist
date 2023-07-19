const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));
console.log(todos)

if(todos){
    todos.forEach(todo =>{
        add(todo);
    })
}

// formにsubmit（enterキーが押されたら）されたらfunctonの処理がされる
form.addEventListener("submit", function(event){
    event.preventDefault();
    add();
})

function add(x) {
    let todoText = input.value;
    if(x){
        todoText = x;
    }
    if ( todoText.length > 0 ){
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");
        li.addEventListener("contextmenu", function(event){
            event.preventDefault();
            li.remove();
            saveData();
        })
        li.addEventListener("click",function(event){
            li.classList.toggle("text-decoration-line-through");
        })
        ul.appendChild(li);
        input.value = "";
        saveData();
    }
}

// データを残すための配列を作成する
function saveData(){
    const lists = document.querySelectorAll("li") ;
    let todos = [];
    lists.forEach(list => {
        todos.push(list.innerText)
    })
    // console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));
}