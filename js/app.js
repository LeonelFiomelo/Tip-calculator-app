const IBill = document.getElementById('bill__input');
const ITip = document.querySelectorAll('.tip__ul-li-button');
const ITipCustom = document.getElementById('tip__ul-li-input');
const IPeople = document.getElementById('people__input');
const OAmount = document.getElementById('result__display-value--amount');
const OTotal = document.getElementById('result__display-value--total');
const IReset = document.getElementById('result__reset-button');

const calculation = new Calculation();

ITip.forEach(element => {
    element.addEventListener('click', () => {
        let bill = IBill.value;
        let percentage = parseInt(element.value.toString().slice(0, -1));
        calculation.calculateTip(bill, percentage);
        OAmount.textContent = `$ ${calculation.printAmount().toFixed(0)}`;
    })
});

ITipCustom.addEventListener('keydown', (event) => {
    let bill = IBill.value;
    let percentageCustom = ITipCustom.value;
    let key = event.key;
    if(key == 'Enter' && percentageCustom >= 0 && percentageCustom <= 100) {
        calculation.calculateTip(bill, percentageCustom);
        OAmount.textContent = `$ ${calculation.printAmount().toFixed(0)}`; 
    }
})

IPeople.addEventListener('keydown', (event) => {
    let bill = IBill.value;
    let people = IPeople.value;
    let key = event.key;
    if(key == 'Enter' && people >= 1) {
        calculation.calculateTotal(bill, people);
        OTotal.textContent = `$ ${calculation.printTotal().toFixed(0)}`;
    }
})

IReset.addEventListener('click', () => {
    IBill.value = '';
    IPeople.value = '';
    ITipCustom.value = '';
    OAmount.textContent = '$ 0';
    OTotal.textContent = '$ 0';
})

