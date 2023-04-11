var vid = document.querySelector(".bgvideo");
vid.playbackRate = 2.0;

const preloader = document.querySelector(".preloader");
const btn = document.querySelector(".btn");
const fa = document.querySelector(".fa");
btn.addEventListener("click", () => {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause");
        vid.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
    } else {
        btn.classList.add("pause");
        vid.pause();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
    }
});

window.addEventListener("load", () => {
    preloader.style.zIndex = "-999";
});