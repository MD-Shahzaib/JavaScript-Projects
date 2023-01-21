// --------------------------- question 1 ---------------------------.
/*
// a
var body = document.getElementById('body').style.fontFamily = "Arial, sans-serif"
// b
document.getElementById('nickname').innerHTML = 'shahzaib'
document.getElementById('favorites').innerHTML = 'cricket'
document.getElementById('hometown').innerHTML = 'karachi'
// c
document.getElementById('redcolor').style.color = 'red'
// d
var image = document.createElement('img')
image.setAttribute('src', 'download.png')
var body = document.getElementById('body').appendChild(image);
*/
// --------------------------- question 1 ---------------------------.


// --------------------------- question 3 ---------------------------.
function parain() {
    document.getElementsByClassName('color')[0].style.color = "red"
    document.getElementsByClassName('color')[1].style.color = "red"
    document.getElementsByClassName('color')[2].style.color = "red"
    document.getElementsByClassName('color')[3].style.color = "red"
    document.getElementsByClassName('color')[4].style.color = "red"
    document.getElementsByClassName('color')[5].style.color = "red"
    document.getElementsByClassName('color')[6].style.color = "red"
    document.getElementsByClassName('color')[7].style.color = "red"
}
function paraout() {
    document.getElementsByClassName('color')[0].style.color = "blue"
    document.getElementsByClassName('color')[1].style.color = "blue"
    document.getElementsByClassName('color')[2].style.color = "blue"
    document.getElementsByClassName('color')[3].style.color = "blue"
    document.getElementsByClassName('color')[4].style.color = "blue"
    document.getElementsByClassName('color')[5].style.color = "blue"
    document.getElementsByClassName('color')[6].style.color = "blue"
    document.getElementsByClassName('color')[7].style.color = "blue"
}
// --------------------------- question 3 ---------------------------.


// --------------------------- question 4 ---------------------------.
function options() {
    var sel = document.getElementById('sel')
    var text = `No. of items in dropdown is : ${sel.length}`
    var i;
    for (var i = 0; i < sel.length; i++) {
        console.log(sel.options[i].text)
        alert(`${text} \n ${sel.options[i].text}`)
    }
}
// --------------------------- question 4 ---------------------------.


// --------------------------- question 5 ---------------------------.
function createTable() {
    rn = window.prompt("Input number of rows", 1);
    cn = window.prompt("Input number of columns", 1);

    for (var r = 0; r < parseInt(rn, 10); r++) {
        var x = document.getElementById('myTable').insertRow(r);
        for (var c = 0; c < parseInt(cn, 10); c++) {
            var y = x.insertCell(c);
            y.innerHTML = "Row-" + r + " Column-" + c;
        }
    }
}
// --------------------------- question 5 ---------------------------.


// --------------------------- question 6 ---------------------------.
function getAttributes() {
    var h = document.getElementById("myLink").href
    alert('The value of the href attribute of the link is : ' + h);
    var hl = document.getElementById("myLink").hreflang
    alert('The value of the hreflang attribute of the link is : ' + hl);
    var rl = document.getElementById("myLink").rel
    alert('The value of the rel attribute of the link is : ' + rl);
    var trgt = document.getElementById("myLink").target
    alert('The value of the target attribute of the link is : ' + trgt);
    var typ = document.getElementById("myLink").type
    alert('The value of the type attribute of the link is : ' + typ);
}
// --------------------------- question 6 ---------------------------.


// --------------------------- question 7 ---------------------------.
function changebg() {
    document.getElementById('bg').style.background = 'grey';
}
// --------------------------- question 7 ---------------------------.


// --------------------------- question 8 ---------------------------.
// -------------------- example 1 ---------------------.
function converter1() {
    var us = document.getElementById('usd')
    var pk = document.getElementById('pkr')
    // us.value = pk.value / 240
    pk.value = us.value * 240
}
function converter2() {
    var us = document.getElementById('usd')
    var pk = document.getElementById('pkr')
    us.value = pk.value / 240
    // pk.value = us.value * 240
}
// -------------------- example 1 ---------------------.

// -------------------- example 2 ---------------------.
function converter(event) {
    var us = document.getElementById('usd')
    var pk = document.getElementById('pkr')
    if (event.target.id == 'usd') {
        pk.value = us.value * 240
    }
    else {
        us.value = pk.value / 240
    }
}
// -------------------- example 2 ---------------------.
// --------------------------- question 8 ---------------------------.


// --------------------------- question 9 ---------------------------.
function link(event) {
    if (event.target.innerHTML == 'Home') {
        var hh1 = document.getElementById('heading')
        hh1.innerHTML = 'Home'
        var hp1 = document.getElementById('para')
        hp1.innerHTML = 'Home Content goes here'
    }
    else if (event.target.innerHTML == 'Products') {
        var ph1 = document.getElementById('heading')
        ph1.innerHTML = 'Products'
        var pp1 = document.getElementById('para')
        pp1.innerHTML = 'Products Content goes here'
    }
    else if (event.target.innerHTML == 'About-us') {
        var ah1 = document.getElementById('heading')
        ah1.innerHTML = 'About-us'
        var ap1 = document.getElementById('para')
        ap1.innerHTML = 'About-us Content goes here'
    }
    else if (event.target.innerHTML == 'Contact-us') {
        var ch1 = document.getElementById('heading')
        ch1.innerHTML = 'Contact-us'
        var cp1 = document.getElementById('para')
        cp1.innerHTML = 'Contact-us Content goes here'
    }
    else {
        var eh1 = document.getElementById('heading')
        eh1.innerHTML = 'blah blah blah'
        var ep1 = document.getElementById('para')
        ep1.innerHTML = 'blah blah blah'
    }
}
// --------------------------- question 9 ---------------------------.