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
        "./assets/portfolio/video/mars.webm",
        "./assets/portfolio/video/rainy.webm",
        "./assets/portfolio/video/blackholestation.webm",
        "./assets/portfolio/video/fiber.webm",
        "./assets/portfolio/video/purpleforest.webm",
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
let musicFile = document.getElementById("background-music-musicfile");

music.setAttribute("src", "./assets/portfolio/sound/bgm.mp3");
music.setAttribute("type", "audio/mp3");

let plb = document.getElementById("play-button")
let pab = document.getElementById("pause-button")

pab.addEventListener("click", () => {
    plb.hidden = false;
    pab.hidden = true;
    music.pause();
});

plb.addEventListener("click", () => {
    plb.hidden = true;
    pab.hidden = false;
    music.play();
});

music.onloadeddata = () => {
    plb.hidden = false;
    music.loop = true;
    music.volume = 0.2
}

musicFile.onchange = (e) => {
    plb.hidden = false;
    pab.hidden = true;
    music.pause();
    music.setAttribute("src", URL.createObjectURL(e.target.files[0]));
    music.load();
}

// Photo showrell script.
Fancybox.bind("[data-fancybox]", {});

// live type
var options = {
    strings: ["my portfolio!^500 😊", "nordlicht^300@^500vmi105", "0x1001000", "Sirius ^300Lagrange"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 3000,
    cursorChar: '|',
    loop: true,
};

var typed = new Typed('.typed', options);

// custom stuff
console.log("well, hello there, guess youre quite the explorer, aren't you?, well, if youre up to the challenge, try searching the secret behind stealthboats.com");
