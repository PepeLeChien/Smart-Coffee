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
        for (i=1; i <= 10; i++) {
            if (table != i) {
                let tableButton = document.getElementById(`table--${i}`).style.backgroundColor = '#CECDCD';
            }
        }
    //location.href = "../pages/clientInfo.html";
    }

}

function eatOutside(){
    let button = document.getElementById('button--outside');
    button.style.backgroundColor = '#B3B3B3';
    order.orderPlace = 'outside';

    location.href = "../pages/clientInfo.html";
}

 