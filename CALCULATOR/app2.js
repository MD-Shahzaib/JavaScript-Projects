// =====================this for remove bug=====================


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

    // changes starts here for bug <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // agr input ki (last value) r (last value -1) equal orpands.includes ho to splice ke zariye (last value -1) ko delete kar k (last value) add karde.

    var input = document.getElementById('Input')
    // for oprands
    var oprands = ['-', '+', '*', '/', '.']
    // for second_last_value
    var second_last_index = input.value.length - 1
    var second_last_value = input.value[second_last_index]
    console.log("second_last_value ", second_last_value)
    // for last_value
    var last_value = event.target.innerHTML
    console.log('last_value ', last_value)

    if (oprands.includes(second_last_value) && oprands.includes(last_value)) {
        var temp = input.value.split('')
        var temp_length = temp.length - 1
        var temp2 = temp.splice(second_last_value, temp_length, [last_value])
        input.value = temp2.join('')
    }
    // changes ends here for bug <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    else if (event.target.innerHTML == 'sin') {
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