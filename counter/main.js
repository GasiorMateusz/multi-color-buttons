const button = document.getElementById("count")

window.addEventListener("click", function () {
    console.log(button.innerText)
    button.innerText = parseInt(button.innerText) +1;
})