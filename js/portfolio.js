"use strict";

// When video finishes downloading, display it fading.
let video = document.getElementById("background-video");

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

// Photo showrell script.
window.addEventListener('DOMContentLoaded', () => {
    new SmartPhoto(".js-smartPhoto");
});

// custom stuff
console.log("well, hello there, guess youre quite the explorer, aren't you?, well, if youre up to the challenge, try searching the secret behind stealthboats.com");
