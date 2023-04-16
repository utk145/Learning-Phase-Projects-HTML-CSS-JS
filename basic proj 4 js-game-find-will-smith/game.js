function game() {

    window.startTime = new Date().getTime();


    const horizontal = document.body.clientWidth - 35;
    const vertical = document.body.clientHeight - 45;

    const x = Math.round(Math.random() * horizontal);
    const y = Math.round(Math.random() * vertical);

    // console.log(x,y);
    const img = document.querySelector("img");
    img.style.left = x + 'px';
    img.style.top = y + 'px';

}

function found() {
    const findTime = (new Date().getTime() - window.startTime) / 1000; // To get in seconds
    alert("💡 Eureka! Found in " + findTime + " seconds ⏱️\nLet's celebrate 🎉🎉🎉\nTask completed on 💻 " + new Date().toLocaleDateString() + " 💬");
    game();
}

game();