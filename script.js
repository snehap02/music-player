const song = document.querySelector('audio');
const previousBtn = document.querySelector('#previous');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');

//check if the song is playing
let isPlayingSong = false;

const playSongs = () => {
    isPlayingSong = true;
    playBtn.classList.add('fa-circle-pause')
    playBtn.classList.remove('fa-circle-play');
    song.play();
}

const pauseSongs = () => {
    isPlayingSong = false;
    playBtn.classList.add('fa-circle-play')
    playBtn.classList.remove('fa-circle-pause');
    song.pause();
}

playBtn.addEventListener('click', () => {
    (isPlayingSong ? pauseSongs() : playSongs())
});
