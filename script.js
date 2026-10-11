const totalPages = 18;

document.addEventListener("keydown", function(event) {
    // Flèche droite
    if (event.key === "ArrowRight") {
        event.preventDefault();
        changerPage(1);
    }

    // Flèche gauche
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        changerPage(-1);
    }
});

function changerPage(direction) {
    // Récupère le nom du fichier actuel
    const fichier = window.location.pathname.split("/").pop();

    // Détermine le numéro de la page actuelle
    let pageActuelle;

    if (fichier === "index.html" || fichier === "") {
        pageActuelle = 1;
    } else {
        const match = fichier.match(/^index(\d+)\.html$/);
        if (!match) return;
        pageActuelle = Number(match[1]);
    }

    // Calcule la page
    const nouvellePage = pageActuelle + direction;

    // Empêche de dépasser les pages
    if (nouvellePage < 1 || nouvellePage > totalPages) {
        return;
    }

    // Construit le nom du fichier et change de page
    const destination = nouvellePage === 1
        ? "index.html"
        : `index${nouvellePage}.html`;

    window.location.href = destination;
}