//***************DOM SELECTORS***************/

const featuredFilmTrailer = document.getElementById("featured-film-trailer");
const soundControl = document.getElementById("sound-control");
const unmutedIcon = document.getElementById("unmuted");
const mutedIcon = document.getElementById("muted");
const movies = document.querySelectorAll(".movies img");
const trailer = document.getElementById("trailer");
const trailerEmbed = document.querySelector(".trailer iframe");
const overlay = document.getElementById("overlay");

console.log(featuredFilmTrailer);

const trailerURLs = {
  "Ironman 1": "https://www.youtube.com/embed/8ugaeA-nMTc",
  "Ironman 2": "https://www.youtube.com/embed/BoohRoVA9WQ",
  Thor: "https://www.youtube.com/embed/JOddp-nlNvQ",
  "Captain America the First Avenger":
    "https://www.youtube.com/embed/JerVrbLldXw",
  "The Avengers": "https://www.youtube.com/embed/eOrNdBpGMv8",
  "Ironman 3": "https://www.youtube.com/embed/Ke1Y3P9D0Bc",
  "Thor the Dark World": "https://www.youtube.com/embed/npvJ9FTgZbM",
  "Captain America the Winter Soldier":
    "https://www.youtube.com/embed/7SlILk2WMTI",
  "Guardians of the Galaxy": "https://www.youtube.com/embed/d96cjJhvlMA",
  "Avengers Age of Ultron": "https://www.youtube.com/embed/tmeOjFno6Do",
  Antman: "https://www.youtube.com/embed/pWdKf3MneyI",
  "Captain America Civil War": "https://www.youtube.com/embed/dKrVegVI0Us",
  "Doctor Strange": "https://www.youtube.com/embed/HSzx-zryEgM",
  "Guardians of the Galaxy Volume 2":
    "https://www.youtube.com/embed/wUn05hdkhjM",
  "Thor Ragnarok": "https://www.youtube.com/embed/ue80QwXMRHg",
  "Black Panther": "https://www.youtube.com/embed/xjDjIWPwcPU",
  "Avengers Infinity War": "https://www.youtube.com/embed/6ZfuNTqbHE8",
  "Antman and the Wasp": "https://www.youtube.com/embed/UUkn-enk2RU",
  "Captain Marvel": "https://www.youtube.com/embed/Z1BCujX3pw8",
  "Avengers Endgame": "https://www.youtube.com/embed/TcMBFSGVi1c",
  Wandavision: "https://www.youtube.com/embed/sj9J2ecsSpo",
  "The Falcon and the Winter Soldier":
    "https://www.youtube.com/embed/IWBsDaFWyTE",
};

let muted = false;

function toggleMute() {
  featuredFilmTrailer.muted = !featuredFilmTrailer.muted;

  muted = !muted;

  if (muted) {
    mutedIcon.style.display = "inline";
    unmutedIcon.style.display = "none";
  } else {
    mutedIcon.style.display = "none";
    unmutedIcon.style.display = "inline";
  }
}

soundControl.addEventListener("click", () => {
  toggleMute();
});

movies.forEach((movie) => {
  movie.addEventListener("click", (e) => {
    trailerEmbed.src = trailerURLs[e.target.alt];

    trailer.style.display = "block";
    overlay.style.display = "block";
  });
});

overlay.addEventListener("click", () => {
  trailer.style.display = "none";
  overlay.style.display = "none";
});
