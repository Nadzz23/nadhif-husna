document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const playPauseButton = document.getElementById('play-pause');
    const playPauseIcon = document.getElementById('play-pause-icon');

    playPauseButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
        } else {
            music.pause();
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
        }
    });
});
