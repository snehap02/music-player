const song = document.querySelector('audio');
const previousBtn = document.querySelector('#previous');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const songImage = document.querySelector('img');
const songTitle = document.querySelector('#title');
const artist = document.querySelector('#artist');
const progressbar = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const all = document.querySelector('#allSongs');
const allLists = all.querySelectorAll('div');

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
    // all.innerHTML = `<div class="song-lines flex justify-between font-poppins text-sm cursor-pointer mt-5 hover:scale-105 hover:font-medium hover:transition hover:duration-700" id="first">
    // <h1>${songOfSongs.name.toUpperCase()}</h1>
    // <span>${songOfSongs.duration}</span>
    // </div>`.join();
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
// all.addEventListener('click', (e) => {
//     for(let listSongs of songLists){
        
//         listSongs = song.play();
//         playBtn.classList.add('fa-circle-pause')
//         playBtn.classList.remove('fa-circle-play');
//     }
//     console.log(e);
// })
console.log(allLists);
for(let singleSong of allLists){
    singleSong.setAttribute
}