const openBtn =
document.getElementById("openInvitation");

const invitation =
document.getElementById("invitation");

const welcome =
document.getElementById("welcome");

const music =
document.getElementById("bgMusic");

openBtn.addEventListener("click",()=>{

    welcome.style.display="none";

    invitation.style.display="block";

    music.play();

});

const targetDate =
new Date("2026-08-28 18:00:00").getTime();

setInterval(()=>{

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days =
        Math.floor(distance/(1000*60*60*24));

    const hours =
        Math.floor((distance%(1000*60*60*24))
        /(1000*60*60));

    const minutes =
        Math.floor((distance%(1000*60*60))
        /(1000*60));

    const seconds =
        Math.floor((distance%(1000*60))
        /1000);

    const pad2 = (n) => String(n).padStart(2, "0");

    const timerEl = document.getElementById("timer");
    timerEl.innerHTML =
        `
        <div class="timer-box">
            <div class="timer-time">
                <span class="t">${pad2(days)}</span><span class="sep">:</span>
                <span class="t">${pad2(hours)}</span><span class="sep">:</span>
                <span class="t">${pad2(minutes)}</span><span class="sep">:</span>
                <span class="t">${pad2(seconds)}</span>
            </div>

            <div class="timer-labels">
                <span>DÍAS</span>
                <span>HORAS</span>
                <span>MINUTOS</span>
                <span>SEGUNDOS</span>
            </div>
        </div>
        `;

},1000);

document
.getElementById("musicBtn")
.addEventListener("click",()=>{

    const icon = document.querySelector("#musicBtn .play-icon i");

    if(music.paused){

        music.play();
        if(icon){
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
        }
        document.getElementById("musicBtn").setAttribute("aria-label","Pausar música");

    }else{

        music.pause();
        if(icon){
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
        }
        document.getElementById("musicBtn").setAttribute("aria-label","Reproducir música");
    }

});
