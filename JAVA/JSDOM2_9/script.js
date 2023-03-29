const button = document.querySelector('button');
button.style.cssText = 'position:absolute; top:0; left:0;';

let isInOriginalPosition = true;
function changPosition(Event) {
    Event.target.style.cssText = isInOriginalPosition ? 'position:absolute; bottom:0; right:0;' : "position:absolte; top:0; left:0;";
    isInOriginalPosition = !isInOriginalPosition;
}

button.addEventListener('click' , changePosition);