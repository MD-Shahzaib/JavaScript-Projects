
// get boxes
var boxes = document.querySelectorAll('.box')
for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.opacity = ''
}

function getBox(event) {
    event.target.innerHTML = 'c'
}