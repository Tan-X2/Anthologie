
const totalPages = 19;

document.addEventListener("keydown", function(event) {
    // Flèche droite : page suivante
    if (event.key === "ArrowRight") {
        event.preventDefault();
        changerPage(1);
    }

    // Flèche gauche : page précédente
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

        // index1.html = page 2, index2.html = page 3, etc.
        pageActuelle = Number(match[1]) + 1;
    }

    // Calcule la nouvelle page
    const nouvellePage = pageActuelle + direction;

    // Empêche de dépasser les limites
    if (nouvellePage < 1 || nouvellePage > totalPages) {
        return;
    }

    // Convertit le numéro de page en nom de fichier
    const destination = nouvellePage === 1
        ? "index.html"
        : `index${nouvellePage - 1}.html`;

    // Change de page
    window.location.href = destination;
}