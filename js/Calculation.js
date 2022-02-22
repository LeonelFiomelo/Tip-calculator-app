class Calculation {
    constructor() {
        this.bill = 0;
        this.percentage = 0;
        this.people = 0;
        this.amount = 0;
        this.total = 0;
    }

    calculateTip(bill, percentage) {
        this.bill = bill;
        this.percentage = percentage;
        this.amount = this.bill * (this.percentage/100);
    }

    calculateTotal(bill, people) {
        this.bill = bill;
        this.people = people;
        this.total = this.bill / this.people;
    }

    printAmount(){
        return this.amount;
    }

    printTotal(){
        return this.total;
    }
}