let button = document.getElementById("flip-flop")

button.classList.add("button_left");

button.addEventListener("click", function () {
    if(button.classList.contains("button_left")){
        button.classList.remove("button_left");
        button.classList.add("button_right");
        button.innerText = "Go Left!";
    }else {
        button.classList.remove("button_right");
        button.classList.add("button_left");
        button.innerText = "Go Right!";
    }
})