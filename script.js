let total = 0;
let applequantity=0;
let orangequanity=0;
let bananaquanity=0;

let qtyValue = document.querySelector('.quantity');
let totalBill = document.querySelector('.totalbill');

function addapple(){
    applequantity++;
    qtyValue.value =applequantity;
    total=applequantity*10+orangequanity*15+bananaquanity*20;
    totalBill.innerHTML=total;  
}
function minusapple(){
    applequantity--;
    qtyValue.value =applequantity;
    total=applequantity*10+orangequanity*15+bananaquanity*20;
    totalBill.innerHTML=total;
}