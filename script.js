const form = document.querySelector(".email");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".email-error");
const heroBody = document.querySelector(".hero-body");


form.addEventListener("submit", e => {
    let reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    e.preventDefault();
    const targetElVal = e.target.firstElementChild.firstElementChild.value
    if (!targetElVal.match(reg)) {
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
    } else {
        errorIcon.style.display = "none";
        errorMessage.style.display = "none";
        setTimeout(() => {
            form.innerHTML = "<h2 style='color: hsl(0, 6%, 24%)'>We'll be in touch</h2>"
        }, 1000)
    }
})
