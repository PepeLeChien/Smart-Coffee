const order = {
    orderPlace: undefined,
    orderTable: undefined,
    clientName: undefined,
    phoneNumber: undefined,
    drink: undefined,
}

function eatInside(){
    order.orderPlace = 'inside';
}

function eatOutside(){
    order.orderPlace = 'outside';
    location.href = "../pages/clientInfo.html";
}