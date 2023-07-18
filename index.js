const form = document.getElementById("form");
const input = document.getElementById("input");

// formにsubmit（enterキーが押されたら）されたらfunctonの処理がされる
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(input.value)
    add();
})

function add() {
    const li = document.createElement("li")
}