let button = document.getElementById("change-color")

button.addEventListener("click", function () {
    if(document.body.style.backgroundColor === "red"){
        document.body.style.backgroundColor = "White";
    }else {
        document.body.style.backgroundColor = "red";
    }
})