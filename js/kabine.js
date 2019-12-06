
//////////////////////////////////////
//Lav en function så man kan vælge tid
var time = 20;

var Cabin = function (number, amountOfTubes, pricePerMin) {
    this.number = number;
    this.amountOfTubes = amountOfTubes;
    this.pricePerMin = pricePerMin;
};

Cabin.prototype.calcPrice = function() {
    //Tid * pris
    console.log(time * this.pricePerMin);
};

var cabin1 = new Cabin('Kabine 1', 52, 5,);
var cabin2 = new Cabin('Kabine 2', 48, 4.5,);
var cabin3 = new Cabin('Kabine 3', 40, 3,);

cabin1.calcPrice();
cabin2.calcPrice();
cabin3.calcPrice();