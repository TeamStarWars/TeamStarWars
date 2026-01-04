// Liste de vos vidéos (Remplacez les ID par vos vrais ID de vidéos YouTube)
const videos = [
    { title: "Le secret des Sith", id: "VIDEO_ID_1" },
    { title: "Analyse Trailer Star Wars", id: "VIDEO_ID_2" },
    { title: "Top 10 des meilleurs Jedi", id: "VIDEO_ID_3" }
];

const container = document.getElementById('video-container');

// Fonction pour générer les cartes vidéos
function loadVideos() {
    container.innerHTML = ''; // Vide le message de chargement
    
    videos.forEach(video => {
        const card = `
            <div class="card">
                <iframe width="100%" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
                <h3>${video.title}</h3>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Lancer le chargement
window.onload = loadVideos;
const modal = document.getElementById("registerModal");
const btn = document.getElementById("openRegister");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("registerForm");

// Ouvrir la modale
btn.onclick = function() {
    modal.style.display = "block";
}

// Fermer la modale
span.onclick = function() {
    modal.style.display = "none";
}

// Gérer l'inscription
form.onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    
    // Ici, on simule l'enregistrement
    console.log("Nouvel inscrit : " + user);
    
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("successMsg").style.display = "block";
    document.getElementById("successMsg").innerText = `Bienvenue à bord, ${user} !`;
    
    // Fermer après 2 secondes
    setTimeout(() => {
        modal.style.display = "none";
    }, 2500);
  const form = document.getElementById("registerForm");
const successMsg = document.getElementById("successMsg");

form.onsubmit = async function(e) {
    e.preventDefault(); // On empêche le rechargement de la page
    
    const data = new FormData(form);
    
    // Envoi des données à Formspree
    const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.style.display = "none";
        successMsg.style.display = "block";
        successMsg.innerText = "Message transmis à la base rebelle ! Vérifie tes emails bientôt.";
        
        // Ferme la fenêtre automatiquement après 3 secondes
        setTimeout(() => {
            document.getElementById("registerModal").style.display = "none";
        }, 3000);
    } else {
        alert("Erreur de transmission... Es-tu un espion de l'Empire ?");
    }
}