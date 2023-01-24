const button = document.getElementById("change-color")
let el = button;

el.addEventListener("click", function () {
    el = el.nextSibling;
    if (el.tagName === undefined) {
        el = el.nextSibling;
    }
    if (el == null) {
        el = button;
    }
    if (el.style.backgroundColor === "red") {
        el.style.backgroundColor = "white"
    } else {
        el.style.backgroundColor = "red";
    }
})