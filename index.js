const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");


// formにsubmit（enterキーが押されたら）されたらfunctonの処理がされる
form.addEventListener("submit", function(event){
    event.preventDefault();
    add();
})

function add() {
    let todoText = input.value;
    if ( todoText.length > 0 ){
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");
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
    console.log(todos);
}