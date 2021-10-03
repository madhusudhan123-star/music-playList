const musicContainer = document.querySelector(".container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector(".title");
const cover = document.querySelector("#cover");
const body = document.getElementsByTagName("h1");

const songs = ["music 1", "music 2", "music 3"];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `image/${song}.jpg`;
}

function PlaySong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  PlaySong();
  bla();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  PlaySong();
  bla();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

function blacks() {
  $("body").css("background-image", " none");
  $("body").css("background-color", " #7c7a7afa");
  $("#cover").css("filter", "grayscale(100%)");
  $(".container").css("box-shadow", "none");
  $(".container").css("background-color", "#aaa6a6fa");
  $(".active-btn-big").css("background-color", "#aaa6a6fa");
  $(".active-btn").css("background-color", "#aaa6a6fa");
  $("#prev").css("background-color", "#aaa6a6fa");
  $("#next").css("background-color", "#aaa6a6fa");
}

function bla() {
  $("body").css(
    "background-image",
    ` linear-gradient(
    0deg,
    rgb(247, 247, 247) 23.8%,
    rgb(252, 221, 221) 92%
  )`
  );
  $("body").css("background-color", `none`);
  $("#cover").css("filter", "grayscale(0%)");
  $(".container").css("box-shadow", " 0 20px 20px 0 rgba(252, 169, 169, 0.5)");
  $(".container").css("background-color", "#fff");
  $(".active-btn-big").css("background-color", "#fff");
  $(".active-btn").css("background-color", "#fff");
  $("#prev").css("background-color", "#fff");
  $("#next").css("background-color", "#fff");
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
    blacks();
  } else {
    PlaySong();
    bla();
  }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);
