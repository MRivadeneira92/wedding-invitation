
document.getElementById("#Acomp").scrollIntoView({behavior: 'smooth'});

let btnMenu = document.getElementById("#btn-menu");

function showMenu() {
    let navMenu = document.querySelector("#nav-menu");
    
    if (navMenu.style.display == "block") {
        navMenu.style.display = "none";
    } else {
        document.querySelector("#nav-menu").style.display = "block";
    }
}

