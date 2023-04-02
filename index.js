let control = document.getElementById("control");
let win = document.getElementById("won");
let defaut = document.getElementById("default");
let theme = document.getElementById("theme");
let balls = document.querySelectorAll(".col");
let board = document.querySelector(".container");
let start = false;


function stop() {
    control.innerHTML = `Start`
    control.style.backgroundColor = "red";
    control.style.boxShadow = `0 0 20px 3px red`;
    control.borderColor = "red";
    start = false;
    win.style.zIndex = 1;
    setTimeout(() => {
        win.style.zIndex = -1;
    }, 1500);
}
document.addEventListener('click', checkfield);

function checkfield(e) {

    let tar = e.target;
    console.log(e.target);
    if (tar.className == 'col') {
        if (start == true) {
            let tarId = tar.dataset.id;
            let max = 18;
            let min = 1;
            let id = Math.floor(Math.random() * (max - min)) + min;
            let curtar = document.querySelector(`[data-id="${id}"]`).firstChild;
            curtar.style.zIndex = 1;
            curtar.style.transition = `all 0.5s`;
            curtar.style.top = -55 + "px";
            let x = setTimeout(() => {
                curtar.style.zIndex = -1;
                curtar.style.top = 0 + "px";
            }, 1000);
            if (tarId == id) {
                stop();
            }
        }
    } else if (e.target.getAttribute("id") == 'control') {
        tar = e.target;
        let text = tar.innerHTML;
        if (text == 'Start') {
            tar.innerHTML = 'Stop';
            tar.style.backgroundColor = 'green';
            tar.style.borderColor = 'green';
            tar.style.boxShadow = `0 0 20px 3px green`;
            start = true;
        } else {
            tar.innerHTML = 'Start';
            tar.style.backgroundColor = 'red';
            tar.style.borderColor = 'red';
            tar.style.boxShadow = ``
            start = false;
        }

    } else if (e.target.getAttribute("id") == 'default') {
        board.style.setProperty("--board", "#14213d");
        console.log(balls[0]);
        for (let i = 0; i < balls.length; i++) {
            balls[i].style.setProperty("--home", "#fca311");
        }
    } else if (e.target.getAttribute("id") == 'theme') {
        let bx = Math.random().toString('16').substring(2, 8);
        let by = Math.random().toString('16').substring(2, 8);
        bx = '#'.concat(bx);
        by = '#'.concat(by);
        board.style.setProperty("--board", bx);
        for (let i = 0; i < balls.length; i++) {
            balls[i].style.setProperty("--home", by);
        }

    }
}