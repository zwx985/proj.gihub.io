let currentAudio = null;

function stopCurrentAudio() {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');

    characters.forEach((character) => {
        character.addEventListener('click', () => {
            const audioURL = character.dataset.audio;
            stopCurrentAudio();
            playAudio(audioURL);
        });
    });

    function playAudio(audioURL) {
        currentAudio = new Audio(audioURL);
        currentAudio.play();
    }
});
