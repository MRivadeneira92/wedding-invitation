
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



function selectOption() {


}


    url = 'https://script.google.com/macros/s/AKfycbwY5CfUC1niDgsQgwXYJ15fKvjR9jYTRG57aRahITVZv1_1szIXkOYTwjqli97WYX0l/exec'


document.querySelector("#btn-form-submit").addEventListener('click', function(e) {
    console.log("Click!")
    e.preventDefault();
    var jqxhr = $.ajax({
        
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }
    ).success(
        // do something
    );
    })

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

