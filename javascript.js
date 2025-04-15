
document.onload = (event) => {
    let btnSubmit = document.querySelector("#btn-form-submit")
    btnSubmit.addEventListener("click", function(e) {
        console.log("Clack!");

    }) 
    var form = document.querySelector('#form-RSVP')
    console.log(form)
    form.addEventListener("submit", function(event) {
        const name = form.elements.Nombre.value;
        const civil = form.elements.civil.value;
        const ceremonia = form.elements.ceremonia.value;
    })
}
let btnMenu = document.getElementById("#btn-menu");

function selectOption(lugar) {
    document.querySelector(`#${lugar}`).click() 
}

function showMenu() {
    let navMenu = document.querySelector("#nav-menu");
    
    if (screen.width < 800){
        if (navMenu.style.display == "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        } 
    }
}

