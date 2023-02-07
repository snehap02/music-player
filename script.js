const song = document.querySelector('audio');
const previousBtn = document.querySelector('#previous');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const songImage = document.querySelector('img');
const songTitle = document.querySelector('#title');
const artist = document.querySelector('#artist');
const progressbar = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const all = document.querySelector('#allSongs')

const songLists = [
    {
        name: 'flightlessBird',
        songName: 'Flightless Bird, American Mouth',
        artist: 'Iron & Wine'
    },
    {
        name: 'nightChanges',
        songName: 'Night Changes',
        artist: 'One Direction'
    },
    {
        name: 'blankSpace',
        songName: 'Blank Space',
        artist: 'Taylor Swift'
    },
    {
        name: 'dandellions',
        songName: 'Dandellions',
        artist: 'Ruth B'
    }
]

//check if the song is playing
let isPlayingSong = false;

const playSongs = () => {
    isPlayingSong = true;
    playBtn.classList.add('fa-circle-pause')
    playBtn.classList.remove('fa-circle-play');
    playBtn.setAttribute = ('title', 'Pause');
    song.play();
}

const pauseSongs = () => {
    isPlayingSong = false;
    playBtn.classList.add('fa-circle-play')
    playBtn.classList.remove('fa-circle-pause');
    playBtn.setAttribute = ('title', 'Play');
    song.pause();
}

playBtn.addEventListener('click', () => {
    (isPlayingSong ? pauseSongs() : playSongs())
});

//update the DOM
const loadSongs = (songOfSongs) => {
    title.innerText = songOfSongs.songName; 
    artist.innerText = songOfSongs.artist;
    song.src = `/music/${songOfSongs.name}.mp3`;
    songImage.src = `/images/${songOfSongs.name}.jpeg`;
}

//current song
let songIndex = 0;

//play next song
const nextSong = () => {
    songIndex++;
    if(songIndex > songLists.length - 1){
        songIndex = 0;
    }
    loadSongs(songLists[songIndex]);
    playSongs();
}
//play previous song
const previousSong = () => {
    songIndex--;
    if(songIndex < 0){
        songIndex = songLists.length - 1;
    }
    loadSongs(songLists[songIndex]);
    playSongs();
}

loadSongs(songLists[songIndex]);

//progress bar
const progressBarUpdtae = (e) => {
    if(isPlayingSong){
        console.log(e);
    }
}

previousBtn.addEventListener('click', previousSong);
nextBtn.addEventListener('click', nextSong);
song.addEventListener('timeupdate', progressBarUpdtae);

// console.log(all);