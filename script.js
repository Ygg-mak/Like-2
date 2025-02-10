(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/Ygg-mak/Like-2/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// Ajouter l'élément audio
const audioElement = document.createElement('audio');
audioElement.id = 'background-music';
audioElement.loop = true;

const sourceElement = document.createElement('source');
sourceElement.src = 'audio/votre-musique-coupee.mp3'; // Chemin vers votre fichier audio
sourceElement.type = 'audio/mpeg';

audioElement.appendChild(sourceElement);
document.body.appendChild(audioElement);

const messages = [
    "Tu es sûre?",
    "Vraiment??",
    "Vraiment sûre?",
    "Ohrrr s'il te plaît",
    "Réfléchis bien!",
    "Arrête de faire genre ",
    "Ohrrr s'il te plaît",
    "...",
    "Ok, j'arrête",
    "Je rigole ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play(); // Démarrer la musique
    window.location.href = "yes_page.html"; // Rediriger vers la page suivante
}

document.querySelector('.yes-button').addEventListener('click', handleYesClick);
document.querySelector('.no-button').addEventListener('click', handleNoClick);
