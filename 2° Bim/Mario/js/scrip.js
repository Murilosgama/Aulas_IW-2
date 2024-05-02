const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const restartBtn = document.querySelector('.restart-btn');

const showRestartBtn = () => {
    restartBtn.style.display = 'block';
}

const hideRestartBtn = () => {
    restartBtn.style.display = 'none';
}

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

let score = 0;

const loopFunction = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        showRestartBtn(); 

        document.querySelector('.nuvens').classList.remove('nuvens-animada');
    } else if (pipePosition === 0 && marioPosition > 80) {
        score++; 
        document.querySelector('.score-value').textContent = score;
    }
}

let loop = setInterval(loopFunction, 10);

document.addEventListener('keydown', pulo);
restartBtn.addEventListener('click', () => {
    location.reload();
});