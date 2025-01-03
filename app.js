let team1Points = 0;
let team2Points = 0;

let gameLog = [];
const fouls = [];

let quarter = 1;

//nusiskaitome taškų mygtukus
const t1pointsButtons = document.querySelectorAll('.t1-points-btn');
const t2pointsButtons = document.querySelectorAll('.t2-points-btn');

//nusiskaitom pražangų mygtukus
const t1foulButtons = document.querySelectorAll('.t1-foul-btn');
const t2foulButtons = document.querySelectorAll('.t2-foul-btn');

//nusiskaitome id
let team1PointsCounter = document.querySelector('#team1-points');
let team2PointsCounter = document.querySelector('#team2-points');

let team1FoulCounter = document.querySelectorAll('.team2 .foul-number')
console.log(team1FoulCounter);

let log = document.querySelector('.log');

t1pointsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        team1Points += parseInt(button.innerText);
        team1PointsCounter.innerText = 'Taškai: ' + team1Points;
        gameLog.unshift(`Komanda 1 pelnė ${parseInt(button.innerText)} tšk., viso taškų: ${team1Points}, (${new Date().toLocaleTimeString()})`)
        console.log(gameLog);
        logRender();
    })
});

t2pointsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        team2Points += parseInt(button.innerText);
        team2PointsCounter.innerText = 'Taškai: ' + team2Points;
        gameLog.unshift(`Komanda 2 pelnė ${parseInt(button.innerText)} tšk., viso taškų: ${team2Points}, (${new Date().toLocaleTimeString()})`)
        console.log(gameLog);
        logRender();
    })
});

const logRender = _ => {
    let html = '';

    gameLog.forEach(el => {
        html += `${el} <br>`
    })
    log.innerHTML = html;

}

console.log(team1Points);



