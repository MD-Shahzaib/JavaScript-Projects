// To-do ------------------------------------------------------------
// 1.remove bug
// 2.create (del,sqrt,abs,%) buttons --------------------------------


// sounds ----------------------------------------------------------------------
// function button click sound
function sound1() {
    const audio = new Audio('audio1.wav')
    audio.play();
}
// function C button click sound
function sound2() {
    const audio = new Audio('audio2.wav')
    audio.play();
}
// function sum button click sound
function sound3() {
    const audio = new Audio('audio3.wav')
    audio.play();
}
// sounds --------------------------------------------------------------------


// main function -------------------------------------------------------------

//  button , Sin , cos , tan function
function getValue(event) {
    var input = document.getElementById('Input')
    if (event.target.innerHTML == 'sin') {
        sound1();
        var inp = +prompt('Enter value of sin')
        var val = eval(Math.sin(inp).toFixed(10))
        input.value = val
        console.log('Enter value of sin')
    }
    else if (event.target.innerHTML == 'cos') {
        sound1();
        var inp = +prompt('Enter value of cos')
        var val = eval(Math.cos(inp).toFixed(10))
        input.value = val
        console.log('Enter value of cos')
    }
    else if (event.target.innerHTML == 'tan') {
        sound1();
        var inp = +prompt('Enter value of tan')
        var val = eval(Math.tan(inp).toFixed(10))
        input.value = val
        console.log('Enter value of tan')
    }
    else {
        var input = document.getElementById('Input')
        sound1();
        var val = event.target.innerHTML
        input.value += val

    }
}

// clear function
function C() {
    var input = document.getElementById('Input')
    sound2();
    input.value = ''
}

// equal function
function sum() {
    var input = document.getElementById('Input')
    sound3();
    var equal = eval(input.value)
    input.value = equal
}

// main function ---------------------------------------------------------------




