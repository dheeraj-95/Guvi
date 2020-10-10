function submitForm(){
    alert("Thanks Your data is saved.!")
}

let $homeBtn = document.querySelector("homebtn");

$homeBtn.addEventListener("click",function(){
    window.location.href = 'index.html';
})