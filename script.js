// Permet lors du clic sur le bouton d'exécuter cette fonction, elle change la classe de :root à l'inverse de son état actuel
const toggle_dark_light_theme = () => { document.documentElement.classList.toggle("white-theme"); }

function disable_loading_animations() {
    // A la fois récupérer et modifier la propriété animation de l'élément qui a la classe loader
    document.getElementById("loader").style.animation = "none";
    // A la fois récupérer et modifier la propriété animation des éléments qui match le selecteur CSS
    let articles = document.querySelectorAll("div.container > article");
    articles.forEach(function(article) {
        article.style.animation = "none";
    });
}

// Attendre le chargement de la page
window.addEventListener('load', () => {
    /* Si la page est inférieure à 1500px en largeur dès le chargement de la page */
    if (window.innerWidth <= 1500) {
        disable_loading_animations();
    }
    else {
        /* Permet de ne plus faire le loader après le chargement de la page,
         utiliser un timeout pour ne pas empêcher l'éxécution de l'animation */
        setTimeout(function() {
            disable_loading_animations();
        }, 6900);
    }
})
