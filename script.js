document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'path/to/your/mini-games.html'; // Remplace par le chemin vers ta page de mini-jeux
});

document.getElementById('game1Button').addEventListener('click', function() {
    window.location.href = 'path/to/your/game1.html'; // Remplace par le chemin vers le premier jeu
});

document.getElementById('heartButton').addEventListener('click', function() {
    showModal('https://via.placeholder.com/800x600?text=Surprise', 'Félicitations ! Tu as trouvé le cœur caché.');
});

function showModal(imageSrc, text) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalText').innerText = text;
    modal.style.display = 'block';
}

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});
