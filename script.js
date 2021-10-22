// Permet lors du clic sur le bouton d'exécuter cette fonction, elle change la classe ".white-theme" de :root à l'inverse de son état actuel
const toggle_dark_light_theme = () => { document.documentElement.classList.toggle("white-theme"); }

function disable_loading_animations() {
    // A la fois récupérer et modifier la propriété animation du div qui a l'ID loader
    document.getElementById("loader").style.animation = "none";

    // A la fois récupérer et modifier la propriété animation des sections qui match le selecteur CSS
    let sections = document.querySelectorAll("div.container > section");
    sections.forEach(function(section) {
        section.style.animation = "none";
    });
}

// Attendre le chargement de la page sinon la variable document renvoie des valeurs nulles
window.addEventListener('load', () => {
    /* Si la page est inférieure à 1500px en largeur dès le chargement de la page
    on désactive TOUT DE SUITE les animations, comme ça si quelqu'un redimensionne
    la page il n'y aura pas l'animation de la version ordinateur */
    if (window.innerWidth <= 1500) {
        disable_loading_animations();
    }
    /* Sinon désactiver l'animation après 4600ms soit 4.6 secondes, le temps du loader + animation des sections */
    else {
        /* Attend 4.6 secondes avant d'exécuter le code */
        setTimeout(function() {
            disable_loading_animations();
        }, 4600);
    }
})
