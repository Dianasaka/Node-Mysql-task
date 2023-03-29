/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
}

var objektus = {
    suma : function sumNumber(a, b){
        return (parseInt(a) + parseInt(b));
    },

    subtraction : function subtractionNumber(a, b) {
        return (parseInt(a) - parseInt(b));
    },

    multiplication : function multiplicationNumber(a, b){
        return (parseInt(a) * parseInt(b));
    },

    division : function divisionNumber(a, b){
        return (parseInt(a) / parseInt(b));
    }
};

//document.getElementById().value;

console.log(objektus);

