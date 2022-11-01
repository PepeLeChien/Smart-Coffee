const order = {
    orderPlace: undefined,
    orderTable: undefined,
    clientName: undefined,
    phoneNumber: undefined,
    drink: undefined,
}

function eatInside(table){
    let button = document.getElementById('button--inside');
    button.style.backgroundColor = '#B3B3B3';

    if (table) {
        let tableButton2 = document.getElementById(`table--${table}`);
        tableButton2.style.backgroundColor = '#B3B3B3';
        location.href = "../pages/clientInfo.html";
    }

}

function eatOutside(){
    let button = document.getElementById('button--outside');
    button.style.backgroundColor = '#B3B3B3';
    order.orderPlace = 'outside';

    location.href = "../pages/clientInfo.html";
}

 