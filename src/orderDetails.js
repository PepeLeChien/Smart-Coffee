function changeLocation () {
    location.href = '../pages/allOrders.html';
}
let giant = document.getElementById('button--giant');
let big = document.getElementById('button--big');
let regular = document.getElementById('button--regular');
let cream = document.getElementById('button--cream');
let nocream = document.getElementById('button--nocream');

function paintSizes (size) {
    giant.style.backgroundColor = '#D9D9D9';
    big.style.backgroundColor = '#D9D9D9';
    regular.style.backgroundColor = '#D9D9D9';

    switch (size) {
        case 1: giant.style.backgroundColor = 'rgb(179, 179, 179)';
        break;
        case 2: big.style.backgroundColor = 'rgb(179, 179, 179)';
        break;
        case 3: regular.style.backgroundColor = 'rgb(179, 179, 179)';
        break;
    }
}

function paintCream (y) {
    cream.style.backgroundColor = '#D9D9D9';
    nocream.style.backgroundColor = '#D9D9D9';

    switch (y) {
        case 1: cream.style.backgroundColor = 'rgb(179, 179, 179)';
        break;
        case 2: nocream.style.backgroundColor = 'rgb(179, 179, 179)';
        break;
    }
}
