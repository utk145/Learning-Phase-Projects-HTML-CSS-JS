const opeener = () => {
    document.querySelector(".backdrop").className = "backdrop active";
    document.querySelector("aside").className = "active";
}

const closer = () => {
    document.querySelector(".backdrop").className = "backdrop";
    document.querySelector("aside").className = "";
}

const menu = document.querySelector(".menu");
menu.onclick = event => {
    event.preventDefault();
    opeener();
}
document.querySelector("aside button.close").onclick = event => {
    closer();
}
document.querySelector("backdrop").onclick = event => {
    closer();
}