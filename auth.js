document.addEventListener("DOMContentLoaded", function () {
    const authForm = document.getElementById("auth-form");
    const authSection = document.getElementById("auth-section");
    const contentSection = document.getElementById("content-section");
    const authMessage = document.getElementById("auth-message");

    // Code d'accès correct
    const correctCode = "1234";

    // Vérifie le code d'accès
    if (authForm) {
        authForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêche l'envoi du formulaire

            const enteredCode = document.getElementById("code").value;

            if (enteredCode === correctCode) {
                authMessage.textContent = "Accès accordé !";
                authMessage.className = "message success";

                // Stocke la réussite dans le stockage local
                localStorage.setItem("accessGranted", "true");

                // Affiche le contenu protégé et cache le formulaire
                authSection.style.display = "none";
                contentSection.style.display = "block";
            } else {
                authMessage.textContent = "Code incorrect. Essayez de nouveau.";
                authMessage.className = "message error";
            }
        });
    }

    // Vérifie si l'accès a déjà été accordé
    if (localStorage.getItem("accessGranted") === "true") {
        authSection.style.display = "none";
        contentSection.style.display = "block";
    }
});
