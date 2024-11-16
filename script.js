// Song Player Variables
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');

// List of songs (titles and file paths)
const songs = [
    { title: 'Song 1', path: 'music/song1.mp3' },
    { title: 'Song 2', path: 'music/song2.mp3' },
];

let currentSongIndex = 0;

// Load and play the song
function loadSong(songIndex) {
    const song = songs[songIndex];
    audioPlayer.src = song.path;
    songTitle.textContent = song.title;
    audioPlayer.load();
    audioPlayer.play();
    playBtn.textContent = 'Pause';
}

// Play/Pause functionality
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playBtn.textContent = 'Play';
    }
});

// Next song functionality
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Previous song functionality
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Update the progress bar as the song plays
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
});

// Allow the user to click on the progress bar to skip to a specific time
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

// Initialize the first song
loadSong(currentSongIndex);
