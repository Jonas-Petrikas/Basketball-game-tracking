let k1Points;
let k2Ponts;
let kelinys;

let prazangos = [];
let log = [];

const init = _ => {
    k1Points = 0;
    k2Ponts = 0;
    kelinys = 1;

    prazangos = [0, 0, 0, 0, 0, 0]
}

init();


let prazangos1 = document.querySelector('[data-prazangos1]').innerText = prazangos[0]
let prazangos2 = document.querySelector('[data-prazangos2]').innerText = prazangos[1]
let prazangos3 = document.querySelector('[data-prazangos3]').innerText = prazangos[2]

let prazangos4 = document.querySelector('[data-prazangos4]').innerText = prazangos[3]
let prazangos5 = document.querySelector('[data-prazangos5]').innerText = prazangos[4]
let prazangos6 = document.querySelector('[data-prazangos6]').innerText = prazangos[5]

const renderPrazangos = _ => {
    prazangos1.innerText = prazangos[0];

};


const btnPrazangak1z1 = document.querySelector('[data-btn-k1z1]')
const btnPrazangak1z2 = document.querySelector('[data-btn-k1z2]')
const btnPrazangak1z3 = document.querySelector('[data-btn-k1z3]')

const btnPrazangak2z1 = document.querySelector('[data-btn-k2z1]')
const btnPrazangak2z2 = document.querySelector('[data-btn-k2z2]')
const btnPrazangak2z3 = document.querySelector('[data-btn-k2z3]')

const prazangosBtn = document.querySelectorAll('button.prazangos-btn')
console.log(prazangosBtn);

let i = 0;
prazangosBtn.forEach(mygtukas => {
    i++;
    mygtukas.addEventListener('click', () => {
        if (prazangos[i] < 5) {
            prazangos[i]++;
            console.log(prazangos[i])
            document.querySelector(`[data-prazangos${i + 1}]`).innerText = prazangos[i];
            if (i < 3) {
                log.push(`1 komandos ${i + 1} žaidėjas gavo pražangą` + new Date().toLocaleTimeString())
            } else if (i >= 3) {
                log.push(`2 komandos ${i + 1 - 3} žaidėjas gavo pražangą` + new Date().toLocaleTimeString())
            }
        }

    })
});

// btnPrazangak1z1.addEventListener('click', () => {
//     if (prazangosk1z1 < 5) {
//         prazangosk1z1++;
//         //čia if ir pakeist spalvą?
//         document.querySelector('[data-prazangos-k1z1]').innerText = prazangosk1z1;
//         log.push('1 komandos 1 žaidėjas gavo pražangą ' + new Date().toLocaleTimeString())
//     } else {
//         btnPrazangak1z1.disabled = true;
//         btnPrazangak1z1.style.backgroundColor = 'red';
//         btnPrazangak1z1.style.cursor = 'not-allowed';
//     }
// })


console.log(log);
console.log(prazangos3);

