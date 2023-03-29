function alertNearestNumber(n1, n2){
    if (Math.abc(100 - n1) > Math.abc(100 - n2)) {
        alert(n2);
    }
    else {
        alert(n1);
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    const n1 = Number(document.getElementById('number1').value);
    const n2 = Number(document.getElementById('number2').value);
    alertNearestNumber(n1, n2);
}

document.querySelector('form').addEventListener('submit',handleFormSubmit);

