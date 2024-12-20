console.log('hello from JS file');

let k1Points;
let k2Ponts;
let kelinys;

let prazangos = {};

const init = _ => {
    k1Points = 0;
    k2Ponts = 0;
    kelinys = 1;

    prazangos = {
        komanda1: {
            z1: 0,
            z2: 0,
            z3: 0
        },
        komanda2: {
            z1: 0,
            z2: 0,
            z3: 0
        }
    }
}

init();

let prazangosk1z1 = document.querySelector('[data-prazangos-k1z1]').innerText = prazangos.komanda1.z1
let prazangosk1z2 = document.querySelector('[data-prazangos-k1z2]').innerText = prazangos.komanda1.z2
let prazangosk1z3 = document.querySelector('[data-prazangos-k1z3]').innerText = prazangos.komanda1.z3

let prazangosk2z1 = document.querySelector('[data-prazangos-k2z1]').innerText = prazangos.komanda2.z1
let prazangosk2z2 = document.querySelector('[data-prazangos-k2z2]').innerText = prazangos.komanda2.z2
let prazangosk2z3 = document.querySelector('[data-prazangos-k2z3]').innerText = prazangos.komanda2.z3

const renderPrazangos = _ => {
    prazangosk1z1.innerText = prazangos.komanda1.z1

};


const btnPrazangak1z1 = document.querySelector('[data-btn-k1z1]')
const btnPrazangak1z2 = document.querySelector('[data-btn-k1z2]')
const btnPrazangak1z3 = document.querySelector('[data-btn-k1z3]')

const btnPrazangak2z1 = document.querySelector('[data-btn-k2z1]')
const btnPrazangak2z2 = document.querySelector('[data-btn-k2z2]')
const btnPrazangak2z3 = document.querySelector('[data-btn-k2z3]')

btnPrazangak1z1.addEventListener('click', () => {
    if (prazangosk1z1 < 5) {
        prazangosk1z1++;
        document.querySelector('[data-prazangos-k1z1]').innerText = prazangosk1z1;
    } else {
        btnPrazangak1z1.disabled = true;
        btnPrazangak1z1.style.backgroundColor = 'red';
        btnPrazangak1z1.style.cursor = 'not-allowed';
    }
})

console.log(prazangos.komanda1.z1);


