"use strict";

// When video finishes downloading, display it fading.
let video = document.getElementById("background-video");
let bgcbutton = document.getElementById("ch-bgv");

video.onloadeddata = () => {
    video.style.display = "block";
    video.style.animation = "fadeInAnimation ease 2s";
    video.style.animationIterationCount = 1;
    video.style.animationFillMode = "forwards";
};

// the script is associated to the background video switch on refresh.
let bglist =
    [
        "./assets/portfolio/video/hall.webm",
        "./assets/portfolio/video/nebulax.webm",
        "./assets/portfolio/video/blackholestation.webm",
        "./assets/portfolio/video/purpleforest.webm",
        "./assets/portfolio/video/huntshowdown.webm",
        "./assets/portfolio/video/galaxy.webm",
        "./assets/portfolio/video/rpg.webm",
        "./assets/portfolio/video/fiber.webm",
        "./assets/portfolio/video/duel.webm",
    ];

let counter = Number(window.localStorage.getItem("counter")) || 0;
window.localStorage.setItem("counter", counter >= bglist.length - 1 ? 0 : counter + 1);

let videosouce = document.createElement("source");

videosouce.setAttribute("src", bglist[counter]);
videosouce.setAttribute("type", "video/webm");
video.appendChild(videosouce);

video.loop = true;
video.muted = true;
video.playsinline = true;
video.autoplay = true;

bgcbutton.addEventListener("click", () => {
    video.style.display = "none";

    video.pause();

    window.localStorage.setItem("counter", counter >= bglist.length - 1 ? 0 : counter + 1);
    counter = Number(window.localStorage.getItem("counter"));

    videosouce.setAttribute("src", bglist[counter]);
    video.load();
    video.play();
})

// background music.
let music = document.getElementById("background-music");
music.setAttribute("src", "./assets/portfolio/sound/027906.mp3");
music.setAttribute("type", "audio/mp3");

let plb = document.getElementById("play-button")
let pab = document.getElementById("pause-button")

pab.addEventListener("click", () => {
    plb.hidden = false;
    pab.hidden = true;
    music.pause();
})

plb.addEventListener("click", () => {
    plb.hidden = true;
    pab.hidden = false;
    music.play();
})

music.onloadeddata = () => {
    plb.hidden = false;
    music.loop = true;
    music.volume = 0.2
}



// Photo showrell script.
Fancybox.bind("[data-fancybox]", {});

// custom stuff
console.log("well, hello there, guess youre quite the explorer, aren't you?, well, if youre up to the challenge, try searching the secret behind stealthboats.com");
