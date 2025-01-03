let team1Points = 0;
let team2Points = 0;

let gameLog = [];
let fouls = [[0, 0, 0], [0, 0, 0]];

let quarter = 1;

const allButtons = document.querySelectorAll('.btn');

//nusiskaitome taškų mygtukus
const t1pointsButtons = document.querySelectorAll('.t1-points-btn');
const t2pointsButtons = document.querySelectorAll('.t2-points-btn');

//nusiskaitom pražangų mygtukus
const t1foulButtons = document.querySelectorAll('.t1-foul-btn');
const t2foulButtons = document.querySelectorAll('.t2-foul-btn');

//nusiskaitoma apatinius mygtukus
const finishButton = document.querySelector('.finish-btn');
const renewButton = document.querySelector('.restart-btn');

//nusiskaitome žaidėjų vardų input'us
const t1players = document.querySelectorAll('.team1 input');
const t2players = document.querySelectorAll('.team2 input');

//nusiskaitome id
let team1PointsCounter = document.querySelector('#team1-points');
let team2PointsCounter = document.querySelector('#team2-points');

let team1FoulCounter = document.querySelectorAll('.team1 .foul-number');
let team2FoulCounter = document.querySelectorAll('.team2 .foul-number');

let log = document.querySelector('.log');

//funkicjos

const logRender = _ => {
    let html = '';

    gameLog.forEach(el => {
        html += `${el} <br>`
    })
    log.innerHTML = html;

}

const restart = _ => {
    allButtons.forEach((btn) => {
        btn.disabled = false;
        btn.style.backgroundColor = '#007BFF';
    });


    team1Points = 0;
    team1PointsCounter.innerText = 'Taškai:' + team1Points;

    team2Points = 0;
    team2PointsCounter.innerText = 'Taškai:' + team2Points;

    gameLog = [];
    fouls = [[0, 0, 0], [0, 0, 0]];
    team1FoulCounter.forEach(el => {
        el.innerText = 0;
    })
    team2FoulCounter
    team2FoulCounter.forEach(el => {
        el.innerText = 0;
    })

    quarter = 1;
    logRender();
}

t1pointsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        team1Points += parseInt(button.innerText);
        team1PointsCounter.innerText = 'Taškai: ' + team1Points;
        gameLog.unshift(`Komanda 1 pelnė ${parseInt(button.innerText)} tšk., viso taškų: ${team1Points}, (${new Date().toLocaleTimeString()})`)
        logRender();
    })
});

t2pointsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        team2Points += parseInt(button.innerText);
        team2PointsCounter.innerText = 'Taškai: ' + team2Points;
        gameLog.unshift(`Komanda 2 pelnė ${parseInt(button.innerText)} tšk., viso taškų: ${team2Points}, (${new Date().toLocaleTimeString()})`)
        logRender();
    })
});

t1foulButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (fouls[0][parseInt(button.value - 1)] < 4) {
            fouls[0][parseInt(button.value - 1)]++;
            team1FoulCounter[button.value - 1].innerText = fouls[0][parseInt(button.value - 1)];
            gameLog.unshift(`Komandos 1 žaidėjas - "${t1players[button.value - 1].value}" gavo pražangą (${new Date().toLocaleTimeString()})`)
            logRender();
        } else {
            fouls[0][parseInt(button.value - 1)]++;
            team1FoulCounter[button.value - 1].innerText = fouls[0][parseInt(button.value - 1)];
            gameLog.unshift(`Komandos 1 žaidėjas - "${t1players[button.value - 1].value}" gavo pražangą (${new Date().toLocaleTimeString()})`)
            logRender();
            button.disabled = true;
            button.style.backgroundColor = 'red';
        }
    })
});

t2foulButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (fouls[0][parseInt(button.value - 1)] < 4) {
            fouls[0][parseInt(button.value - 1)]++;
            team2FoulCounter[button.value - 1].innerText = fouls[0][parseInt(button.value - 1)];
            gameLog.unshift(`Komandos 2 žaidėjas - "${t2players[button.value - 1].value}" gavo pražangą (${new Date().toLocaleTimeString()})`)
            logRender();
        } else {
            fouls[0][parseInt(button.value - 1)]++;
            team2FoulCounter[button.value - 1].innerText = fouls[0][parseInt(button.value - 1)];
            gameLog.unshift(`Komandos 2 žaidėjas - "${t2players[button.value - 1].value}" gavo pražangą (${new Date().toLocaleTimeString()})`)
            logRender();
            button.disabled = true;
            button.style.backgroundColor = 'red';
        }
    })
});
renewButton.addEventListener('click', () => {
    restart();
    console.log('restart')
});

finishButton.addEventListener('click', () => {
    if (quarter === 3) {
        gameLog.unshift(`${quarter} kėlinys pasibaigė (${new Date().toLocaleTimeString()})`)
        quarter++;
        logRender();
        finishButton.innerText = 'Baigti varžybas';
        finishButton.style.backgroundColor = 'red';
    }
    else if (quarter < 4) {
        gameLog.unshift(`${quarter} kėlinys pasibaigė (${new Date().toLocaleTimeString()})`)
        quarter++;
        logRender();
    } else {
        gameLog.unshift(`4 kėlinys baigėsi - Varžybos baigtos (${new Date().toLocaleTimeString()})`)

        allButtons.forEach((btn) => {
            btn.disabled = true;
        });
        logRender();

        setTimeout(function () {
            alert(`varžybos baigtos! (${new Date().toLocaleTimeString()})`);
        }, 100);
    }
});



console.log(team1Points);



