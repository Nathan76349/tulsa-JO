document.addEventListener("DOMContentLoaded", function () {
    // Données fictives pour les participants, les épreuves et les mises à jour
    const participants = [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
        { name: "Charlie", email: "charlie@example.com" }
    ];

    const epreuves = [
        { name: "Course de vitesse", date: "2024-07-25" },
        { name: "Saut en longueur", date: "2024-07-26" },
        { name: "Épreuve de natation", date: "2024-07-27" }
    ];

    const updates = [
        "La course de vitesse commence dans 10 minutes.",
        "Charlie a remporté la médaille d'or au saut en longueur !",
        "La natation commence maintenant."
    ];

    // Ajouter les participants à la page participants.html
    const participantsList = document.getElementById("participants-list");
    if (participantsList) {
        participants.forEach(participant => {
            const li = document.createElement("li");
            li.textContent = `${participant.name} (${participant.email})`;
            participantsList.appendChild(li);
        });
    }

    // Ajouter les épreuves à la page epreuves.html
    const epreuvesList = document.getElementById("epreuves-list");
    if (epreuvesList) {
        epreuves.forEach(epreuve => {
            const li = document.createElement("li");
            li.textContent = `${epreuve.name} - ${new Date(epreuve.date).toDateString()}`;
            epreuvesList.appendChild(li);
        });
    }

    // Ajouter les mises à jour en direct à la page live-updates.html
    const updatesList = document.getElementById("updates-list");
    if (updatesList) {
        updates.forEach(update => {
            const li = document.createElement("li");
            li.textContent = update;
            updatesList.appendChild(li);
        });
    }

   
});
