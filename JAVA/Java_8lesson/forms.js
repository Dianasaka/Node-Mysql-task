function drawL(event) {
    const size = Number(event.target.value);
    const outputElement = document.getElementById('output');

    let output = '';
    for (i = 0; i < size -1; i++){
        output += 'L<br>'
    }
    for (i = 0; i < size; i++) {
        output += 'L'
    }
    outputElement.innerHTML = output;
}

document.getElementById('output').addEventListener('input', drawL)

