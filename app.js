function updateItems(productName, update){
    const itemQuentity = document.getElementById(productName)
    let updateQuentity = parseInt(itemQuentity.value)
    if(update){
        updateQuentity = updateQuentity+ 1;
    }else if(updateQuentity > 0){
        updateQuentity = updateQuentity- 1;
    }
    itemQuentity.value = updateQuentity;
    return updateQuentity;
}
function balanceAccounts(productPrice, amount , perQuentity){
    const itemPerPrice = document.getElementById(productPrice);
    itemPerPrice.innerText = amount * perQuentity;
    subtotal()
}
function subtotal (){
    let subAmount = document.getElementById('sub-amount')
    const mobilePrice = parseInt(document.getElementById('mobile-price').innerText)
    const casePrice = parseInt(document.getElementById('case-price').innerText)
    const subAmountTotal = mobilePrice + casePrice;
    subAmount.innerText = subAmountTotal;
    textTotal(subAmountTotal)
}
subtotal()

function textTotal(taxAmount){
    const tax = document.getElementById('tax')
    const taxMoney = taxAmount/5;
    tax.innerText = taxMoney;
    document.getElementById('total-amount').innerText= taxAmount + taxMoney;
}

document.getElementById('mobile-plus').addEventListener('click', function (){
    const totalQuentity = updateItems('mobile-quentity', true)
     balanceAccounts('mobile-price', 1219, totalQuentity )
 })
 document.getElementById('mobile-minus').addEventListener('click', function (){
    const totalQuentity = updateItems('mobile-quentity', false)
     balanceAccounts('mobile-price', 1219, totalQuentity )
 })

document.getElementById('case-plus').addEventListener('click', function (){
   const totalQuentity = updateItems('case-quentity', true)
    balanceAccounts('case-price', 59, totalQuentity )
})
document.getElementById('case-minus').addEventListener('click', function (){
    const totalQuentity = updateItems('case-quentity', false)
    balanceAccounts('case-price', 59, totalQuentity )
})





























/* function increaseInput(inputId, iscreasing) {
    let inputField = document.getElementById(inputId);
    let inputNum = parseInt(inputField.value);
    if (iscreasing) {
        inputNum = inputNum + 1;
    } else if (inputNum > 0) {
        inputNum = inputNum - 1;
    }
    inputField.value = inputNum;
    return inputNum;

}

function productBalance(amount, input, price) {
    let balance = document.getElementById(amount);
    balance.innerText = input * price;
    summationBalance()
}

function summationBalance() {
    let valPhone = document.getElementById('phone-amount').innerText
    let valCase = document.getElementById('case-amount').innerText
    let sumVal = document.getElementById('sum')
    let sumBalance = parseInt(valPhone) + parseInt(valCase);
    sumVal.innerText = sumBalance;
    let totalTaxt = taxtCount(sumBalance);
}

function taxtCount(totalsum) {
    let taxval = document.getElementById('taxt')
    let taxcount = (totalsum / 15).toFixed(2);
    taxval.innerText = taxcount;
    let sub = document.getElementById('sub-total');
    sub.innerText = Math.round(totalsum - taxcount);
}

document.getElementById('phone-plus').addEventListener('click', function () {
    let val = increaseInput('phone-number', true);
    productBalance('phone-amount', val, 1219)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    let val = increaseInput('phone-number', false);
    productBalance('phone-amount', val, 1219)
})

document.getElementById('case-plus').addEventListener('click', function () {
    let val = increaseInput('case-number', true)
    productBalance('case-amount', val, 59)
})

document.getElementById('case-minus').addEventListener('click', function () {
    let val = increaseInput('case-number', false)
    productBalance('case-amount', val, 59)
})
 */