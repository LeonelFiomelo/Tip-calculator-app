const IBill = document.getElementById('bill__input');
const ITip = document.querySelectorAll('.tip__ul-li-button');
const IPeople = document.getElementById('people__input');
const OAmount = document.getElementById('result__display-value--amount');
const OTotal = document.getElementById('result__display-value--total');
const IReset = document.getElementById('result__reset-button');

ITip.forEach(element => {
    element.addEventListener('click', () => {
        value = parseInt(element.value.toString().slice(0, -1));
        percentage = value/100
        final = IBill.value * percentage;
        OAmount.textContent = `$ ${final}`
    })
});

IPeople.addEventListener('keydown', (event) => {
    let key = event.key;
    if(key == 'Enter') {
        let bill = IBill.value;
        let people = IPeople.value;
        let total = bill/people;
        OTotal.textContent = `$ ${total}`;
    }
})

IReset.addEventListener('click', () => {
    IBill.value = '';
    IPeople.value = '';
    OAmount.textContent = '$ 0';
    OTotal.textContent = '$ 0';
})

