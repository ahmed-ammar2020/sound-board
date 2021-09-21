"use strict";
const audios = [
  new Audio("../audios/1.mp3"),
  new Audio("../audios/2.mp3"),
  new Audio("../audios/3.mp3"),
  new Audio("../audios/4.mp3"),
  new Audio("../audios/5.mp3"),
  new Audio("../audios/6.mp3"),
  new Audio("../audios/7.mp3"),
  new Audio("../audios/8.mp3"),
];

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  item.addEventListener("click", function () {
    nextRingtone();
    audios[index].play();
  });
});

function nextRingtone() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
