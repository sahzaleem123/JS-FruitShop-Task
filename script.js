var haveMoney= 0;
var totalBill= 0;
var purchase= 0;
var appleQuantity= 0;
var orangeQuanity= 0;
var bananaQuanity= 0;


 
function haveCash() {
  haveMoney = document.querySelector('.have-cash').value;
}

function fullBill() {
   document.querySelector("span").innerHTML = totalBill;
}

function addApple(){
    if (haveMoney >= 10) {
        appleQuantity += 1;
        purchase += 10;
        haveMoney = haveMoney - purchase;
        totalBill = purchase + totalBill;
        purchase = 0;
        document.querySelector(".app-quantity").value = appleQuantity;
        fullBill();

    }
    else {
        alert("Not Enough Money to Buy Apple")
    }
}

function minusApple(){
    if (totalBill > 0 && appleQuantity > 0) {
        appleQuantity -= 1;
        purchase += 10;
        haveMoney = haveMoney + purchase;
        totalBill = totalBill - purchase;
        purchase = 0;
        document.querySelector(".app-quantity").value = appleQuantity;
        fullBill();
    }
}
function addOrange() {

    if (haveMoney >= 15) {
        orangeQuanity += 1;
        purchase += 15;
        haveMoney = haveMoney - purchase;
        totalBill = purchase + totalBill;
        purchase = 0;
        document.querySelector(".org-quantity").value = orangeQuanity;
        fullBill();

    }
    else {
        alert("Not Enough Money to Buy Orange")
    }
}
function minusOrange() {

    if (totalBill > 0 && orangeQuanity > 0) {
        orangeQuanity -= 1;
        purchase += 15;
        haveMoney = haveMoney + purchase;
        totalBill = totalBill - purchase;
        purchase = 0;
        document.querySelector(".org-quantity").value = orangeQuanity;
        fullBill();
    }

}
function addBanana() {

    if (haveMoney >= 7) {
        bananaQuanity += 1;
        purchase += 7;
        haveMoney = haveMoney - purchase;
        totalBill = purchase + totalBill;
        purchase = 0;
        document.querySelector(".ban-quantity").value = bananaQuanity;
        fullBill();

    }
    else {
        alert("Not Enough Money to Buy Banana")
    }
}
function minusBanana() {

    if (totalBill > 0 && bananaQuanity > 0) {
        bananaQuanity -= 1;
        purchase += 7;
        haveMoney = haveMoney + purchase;
        totalBill = totalBill - purchase;
        purchase = 0;
        document.querySelector(".ban-quantity").value = bananaQuanity;
        fullBill();
    }
}