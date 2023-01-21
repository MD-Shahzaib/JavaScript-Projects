// ------------------ ASSIGNMENT 1 ------------------.
/*
// ______________________________________________________________________.
// QUESTION 1
var UserName = prompt('ENTER YOUR NAME')
alert('Hi, ' + UserName)
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION 2
var number = prompt('Write a number')
for (var i = 1; i <= number; i++) {
    document.write(number + ' x ' + i + ' = ' + number * i + '<br>')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION 3
var cityName = prompt('Enter your city!')
if (cityName == 'karachi') {
    alert('Welcome to the city of lights!')
}
else {
    alert('Welcome to ' + cityName + '!')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION 4
var Gender = prompt('Enter your Gender').toLowerCase()
if (Gender == 'male') {
    alert('Good Morning, sir!')
}
else if (Gender == 'female') {
    alert("Good Morning, ma'am!")
}
else {
    alert("Good Morning, Other")
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION 5
var traficSignal = prompt('Enter trafic signal color')
if (traficSignal == 'red') {
    alert('vehicles must stop')
}
else if (traficSignal == 'yellow') {
    alert('vehicles should ready to move')
}
else if (traficSignal == 'green') {
    alert('vehicles can move now')
}
else {
    alert("wrong color")
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION 6
var maxAge = prompt('Enter your maximmum age')
var currentAge = prompt('Enter your current age')
if (maxAge >= currentAge) {
    alert('you are welcome')
}
else {
    alert('get out')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION 7
var currentFuel = prompt('Enter the remaining fuel in the car (liters):')
if (currentFuel <= 0.25) {
    alert('Refill the fuel in your car,')
}
else {
    alert('the fuel in your car, is not necessary to refill!')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION 8
// a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION 9
var totalMarks = 300
var subject1 = +prompt('enter marks obtined in html')
var subject2 = +prompt('enter marks obtined in css')
var subject3 = +prompt('enter marks obtined in js')
var obtainMarks = (subject1 + subject2 + subject3)
console.log(obtainMarks);
var percntage = (obtainMarks / totalMarks * 100)

if (percntage >= 80) {
    document.write(
        '<h2> Marks Sheet</h2>' + '<br>' +
        'Total marks ' + ': 300' + '<br>' +
        'ObtainMarks : ' + obtainMarks + '<br>' +
        'Percntage : ' + percntage + '%' + '<br>' +
        'Grade : ' + 'A-one' + '<br>' +
        'Remarks : Excellent'
    )
}
else if (percntage >= 70) {
    document.write(
        '<h2> Marks Sheet</h2>' + '<br>' + '<br>' +
        'Total marks ' + ': 300' + '<br>' +
        'ObtainMarks : ' + obtainMarks + '<br>' +
        'Percntage : ' + percntage + '%' + '<br>' +
        'Grade' + ' : A ' + '<br>' +
        'Remarks : Good'
    )
}
else if (percntage >= 60) {
    document.write(
        '<h2> Marks Sheet</h2>' + '<br>' + '<br>' +
        'Total marks ' + ': 300' + '<br>' +
        'ObtainMarks : ' + obtainMarks + '<br>' +
        'Percntage : ' + percntage + '%' + '<br>' +
        'Grade' + ' : B ' + '<br>' +
        'Remarks : you need to improve'
    )
}
else {
    document.write(
        '<h2> Marks Sheet</h2>' + '<br>' + '<br>' +
        'Total marks ' + ': 300' + '<br>' +
        'ObtainMarks : ' + obtainMarks + '<br>' +
        'Percntage : ' + percntage + '%' + '<br>' +
        'Grade' + ' : Fail ' + '<br>' +
        'Remarks : Sorry'
    )
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// QUESTION 10
var item1 = prompt('Please enter the name of item 1')
var price1 = +prompt('Please enter the price of item 1')
var quantity1 = +prompt('Please enter the quantity of item 1')
var item2 = prompt('Please enter the name of item 2')
var price2 = +prompt('Please enter the price of item 2')
var quantity2 = +prompt('Please enter the quantity of item 2')
var shipCharges = +prompt('Shipping charges')
var totalCost = (price1 * quantity1 + price2 * quantity2 + shipCharges)
var discount = totalCost * 10 / 100;
if (totalCost > 2000) {
    document.write(
        `<h1>SHOPPING CART</h1>
        Price of ${item1} is ${price1} <br>
        Quantity of ${item1} is ${quantity1} <br>
        Price of ${item2} is ${price2} <br>
        Quantity of ${item2} is ${quantity2} <br> <br>
        Shipping Charges ${shipCharges}  <br> <br>
        Total cost of your order is ${totalCost} PKR <br>
        Discounted Price is ${discount} PKR`)
} else {
    document.write(
        `<h1>SHOPPING CART</h1>
         Price of ${item1} is ${price1} <br>
        Quantity of ${item1} is ${quantity1} <br>
        Price of ${item2} is ${price2} <br>
        Quantity of ${item2} is ${quantity2} <br> <br>
        Shipping Charges ${shipCharges}  <br> <br>
        Total cost of your order is ${totalCost} PKR <br> <br>`)
}
// ______________________________________________________________________.
*/
// ------------------ ASSIGNMENT 1 ------------------.




// ------------------ ASSIGNMENT 2 ------------------.
/*
// ______________________________________________________________________.
// question 11
var userInput = prompt('Guess the secret number, from (1 to 10)')
var secretNumber = 5
if (userInput == secretNumber) {
    alert('"Bingo! correct answer"')
}
else if (userInput == 4) {
    alert('"Close enough to the correct answer"')
}
else if (userInput == 6) {
    alert('"Close enough to the correct answer"')
}
else {
    alert('wrong answer !')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 12
var number = prompt('Check whether the given number is Divisible by 3')
if ((number % 3 == 0) ) {
    alert('YES, This number is divisible by 3')
}
else {
    alert(' noooooo, This number is not divisible by 3')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 13
var nameInputA = prompt('Enter the name of teams A')
var nameInputB = prompt('Enter the name of teams B')
var scoreInputA = +prompt('Enter the score of ' + nameInputA)
var scoreInputB = +prompt('Enter the score of ' + nameInputB)
if (scoreInputA > scoreInputB) {
    alert(nameInputA + ' has won the game')
}
else if (scoreInputB > scoreInputA) {
    alert(nameInputB + ' has won the game')
}
else if (scoreInputB === scoreInputA) {
    alert('there is a tie.')
}
else if (scoreInputA === scoreInputB) {
    alert('there is a tie.')
}
else {
    alert('PLease enter name and scores of team')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 14
var type = prompt('type anything to know the type')
alert(typeof (type))
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 15
var number = prompt('enter your number')
if (number % 2 == 0) {
    alert(number + ' is even number')
}
else {
    alert(number + ' is odd number')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 16
var temp = prompt('Enter the weather temperature in karachi')
if (temp > 40) {
    alert('It is too hot outside.')
}
else if (temp > 30) {
    alert('The weather today is normal.')
}
else if (temp > 20) {
    alert("Today's weather is cool.")
}
else if (temp > 10) {
    alert("'OMG! Today's weather is so cool.")
}
else {
    alert('oh no I am freezing')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 17
var Number1 = +prompt('Enter first number')
var operation = prompt("Please select one operator from ('+' , '-' , '*' , '/' , '%')")
var Number2 = +prompt('Enter second number')
if (operation == '+') {
    console.log(Number1 + '+' + Number2 + '=' + (Number1+Number2))
}
else if (operation == '-') {
    console.log(Number1 + '-' + Number2 + '=' + (Number1-Number2))
}
else if (operation == '*') {
    console.log(Number1 + '*' + Number2 + '=' + (Number1*Number2))
}
else if (operation == '/') {
    console.log(Number1 + '/' + Number2 + '=' + (Number1/Number2))
}
else {
    console.log(Number1 + '%' + Number2 + '=' + (Number1%Number2))
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 18
var userInput = prompt('Enter the name of days in a week')
if (userInput === 'sunday') {
    document.write('"Yay! Its a  holiday"')
}
else if ( userInput === 'monday' || userInput === 'tuesday' || userInput === 'wednesday' || userInput === 'thursday' || userInput === 'friday')  {
    document.write('Its a week day')
}
else {
    document.write("'It's weekend'")
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// question 19
var userInput = +prompt('Enter the score')
if (userInput >= 50) {
    document.write('“You are passed”')
}
else {
    document.write("“Try again!”")
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 20
var num1 = +prompt('Please enter first number');
var num2 = +prompt('Please enter second number');
if (num1 < num2) {
    document.write(`The greater number of ${num1} and ${num2} is ${num2}`);
}
else {
    document.write(`The greater number of ${num1} and ${num2} is ${num1}`);
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 21
var lang = prompt('Enter language code')
switch (lang) {
    case 'es': alert('Hola Mundo')
        break;
    case 'de': alert('Hallo Welt')
        break;
    case 'ur': alert('ہیلو دنیا')
        break;
    case 'ar': alert('مرحبا بالعالم')
        break;
    default: alert('hellow world')
        break;
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 22
var numInput = +prompt('Enter a number')
if (numInput > 0) {
    document.write(numInput, ' is positive number')
}
else {
    document.write(numInput, ' is negative number')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 23
var number = +prompt('enter a number')
var noun = prompt('enter a noun')
if (number > 1) {
    alert(number + ' ' + noun + 's')
} else {
    alert(number + ' ' + noun)
}
// ______________________________________________________________________.
*/
// ------------------ ASSIGNMENT 2 ------------------.




// ------------------ ASSIGNMENT 3 ------------------.
/*
// ______________________________________________________________________.
// question 1
var userInput = prompt('Check whether the given number is Divisible by 3')
if (userInput % 3 == 0) {
    alert('YES, This number is divisible by 3')
}
else {
    alert(' This number is not divisible by 3')
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// question 2
var number = prompt('enter your number')
if (number % 2 == 0) {
    alert(number + ' is even number')
}
else {
    alert(number + ' is odd number')
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// question 3
var age = prompt('enter your age')
if (age >= 18) {
    alert('old enough')
}
else {
    alert('too young')
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// question 4
var userInput = prompt('Enter your name')
if(userInput == 'muhammad shahzaib'){
    alert('ASSALAM-WA-ALIKUM '+ userInput)
} else{
    alert(' ')
    }
// ______________________________________________________________________.


// 6. Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)
// question 6 (incomplete)
// question 5 = (complete in js 2)
// question 7 = (complete in js 2)
// question 13 = (complete in js 2)
// question 14 = (complete in js 2)
// question 16 = (complete in js 2)
// question 8 complete
// question 9 complete

// ______________________________________________________________________.
// question 10
var userInput1 = +prompt('ENTER YOUR PASSWORD')
var userInput2 = +prompt('VERIFY YOUR PASSWORD')
switch (userInput1) {
    case userInput2 == !userInput1: alert('please enter your password'); break;
    case userInput2 == userInput1: alert('correct!'); break;
    default: alert('incorrect password');
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// question 11
var userName = prompt('enter your name')
 if(userName == 'shahzaib'){
     alert('hellow shahzaib')
 }
 else{
     alert('you are not shahzaib')
 }
// ______________________________________________________________________.



// ______________________________________________________________________.
// question 12
var hour = 18
if (hour < 13) {
    alert('good day')
}
else {
    alert('good evening')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 15
var currentHour = +prompt('enter currrent hour')
if (currentHour >= 6 && currentHour <= 9) {
    alert('break fast is served')
}
else if (currentHour >= 11 || currentHour <= 1) {
    alert('Time for lunch')
}
else if (currentHour >= 5 || currentHour <= 8) {
    alert('its dinner time')
}
else {
    alert('sojao rat ho gai')
}
// ______________________________________________________________________.




// ______________________________________________________________________.
// question 17
var str = prompt('enter any string')
if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u') {
    alert(true)
} else {
    alert(false)
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// question 18
var compare = 10 !== 9
alert(compare)
// ______________________________________________________________________.



// ______________________________________________________________________.
// question 19
var monthNO = +prompt('enter month number')
switch (monthNO) {
    case 1: alert('JANUARY'); break
    case 2: alert('FEBRUARY'); break
    case 3: alert('MARCH'); break
    case 4: alert('APRAIL'); break
    case 5: alert('MAY'); break
    case 6: alert('JUNE'); break
    case 7: alert('JULY'); break
    case 8: alert('AUGUST'); break
    case 9: alert('SEPTEMBER'); break
    case 10: alert('OCTOBER'); break
    case 11: alert('NOVEMBER'); break
    case 12: alert('DECEMBER'); break
    default: alert('invalid month number')
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// question 20
var age = +prompt('enter your age')
age <= 18 ? alert('too young') : alert('old enough')
// ______________________________________________________________________.
*/
// ------------------ ASSIGNMENT 3 ------------------.




// ------------------ ASSIGNMENT 4 ------------------.
/*
// ______________________________________________________________________.
// Question (1 , 2)
var emptyArray = ['', '', '']
console.log(emptyArray)
// ______________________________________________________________________.


// ______________________________________________________________________.
// Question 3
var str = ['aaaaa', 'bbbbb', 'ccccc']
console.log(str)
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question 4
var num = [3465, 2563, 3642]
console.log(num)
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question 5
var boolean = [true, false]
console.log(boolean)
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question 6
var mix = ['pehla', 'dosra', 'tesra', 123, 456, 789, true, false]
console.log(mix)
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question 7
var networkInPakistan = ['JAZZ', 'TELENOR', 'ZONG', 'UFONE', 'WARID']
console.log(networkInPakistan);
document.write(networkInPakistan);
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question 8
var QALIFICATION = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil', 'PHD']
QALIFICATION.length  // = 8
QALIFICATION.pop('') // = 'PHD' ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil']
QALIFICATION.push('') // = 8 ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil', '']
QALIFICATION.shift('') // = 'SSC' ['HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil', '']
QALIFICATION.unshift('') // = 8 ['', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil', '']
QALIFICATION.splice(2, 1) // = ['BSC'] ['SSC', 'HSC', 'BS', 'BCOM', 'MS', 'M.Phil', 'PHD']
QALIFICATION.splice(2, 0, 'BSC') // = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil', 'PHD']
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question 9
var topMovies2015 = ['avengers', 'spectre', 'jurassic world', 'inside out']
document.write(topMovies2015);
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question 10
var favoriteCars = ['Audi', 'volvo', 'ford', 'lamborghini']
favoriteCars.indexOf('Audi')
0
favoriteCars[0]
'Audi'
favoriteCars.indexOf('lamborghini')
3
favoriteCars[3]
'lamborghini'
document.write(favoriteCars);
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question 11
var studentNames = ['SHAYAN' , 'ANAS' , 'AHSAN']
var studentScores = [40 , 50 , 60]
console.log('Score of ' + studentNames[0] + ' is ' + studentScores[0] + '. Percentage: ' + studentScores[0]/100*100 + '%')
console.log('Score of ' + studentNames[1] + ' is ' + studentScores[1] + '. Percentage: ' + studentScores[1]/100*100 + '%')
console.log('Score of ' + studentNames[2] + ' is ' + studentScores[2] + '. Percentage: ' + studentScores[2]/100*100 + '%')
// ______________________________________________________________________.




// ______________________________________________________________________.
// Question 12
var color = ['red', 'blue', 'green', 'yellow', 'black']
// a
var colorName = prompt('konsa color start me add karna hai')
color.unshift(colorName)
document.write(color)

// b
var colorName = prompt('konsa color end me add karna hai')
color.push(colorName)
document.write(color)

// c
var colorName1 = prompt('konsa color start me add karna hai')
var colorName2 = prompt('konsa dosra color start me add karna hai')
color.unshift(colorName1 , colorName2)
document.write(color)

// d
color.splice(0 , 1)
document.write(color)

// e
color.splice(4 , 1)
document.write(color)

// f
var index = prompt('index batao')
var colorName = prompt('color batao')
color.splice(index , 0 , colorName)
document.write(color)

// f
var index = prompt('index batao jo delete karna h')
var colorName = prompt('color batao jo delete karna h')
color.splice(index, colorName, index)
document.write(color)
// ______________________________________________________________________.
*/
// ------------------ ASSIGNMENT 4 ------------------.




// ------------------ ASSIGNMENT 5 ------------------.
/*
// ______________________________________________________________________.
// Question no = 1
for (var i = 1 ; i<=5 ; i++) {
    console.log('hellow world');
    document.write('hellow world' + '<br>');
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// Question no = 2
for (var i = 1 ; i<=10 ; i++) {
    console.log(i);
    document.write(i + '<br>');
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question no = 3
var tableNumber = +prompt('Enter a number to print its multiplication table')
var tableLength = +prompt('Enter length of multiplication table')
for (var i = 1 ; i<=tableLength ; i++) {
    document.write(tableNumber + ' x ' + i + ' = ' + tableNumber * i + '<br>');
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question no = 4
var device = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
for (var i = 0; i < device.length; i++) {
    document.write(device[i] + '<br>');
}
// ______________________________________________________________________.



// ______________________________________________________________________.
// Question no = 5
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>'+ '<hr>');
}
for (var i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + ' is ' +fruits[i] + '<br>');
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// Question no = 6
var items = []
var itemsNumber = +prompt('Enter number of items')
for (var i = 0; i < itemsNumber; i++) {
    items.push(prompt('Enter an item'))
}
document.write(items);
// ______________________________________________________________________.


// ______________________________________________________________________.
// Question no = 8
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var search = prompt("welcome to ABC bakery. What do you want to order sir/ma'am ? ")
for (var i = 0; i <= search; i++) {
    document.write('');
}
// ______________________________________________________________________.



// ______________________________________________________________________.
//  QUESTION NO 7
//COUNTING
Array.from(Array(20).keys())
//EVEN
for (var i = 2; i <= 20; i += 2) {
    console.log(i)
}
//ODD
for (var i = 1; i <= 20; i += 2) {
    console.log(i)
}
//sort
series = ['2k', '7k', '11k', '88k', '21k', '6k', '80k', '50k', '28k', '5k', '9k']
series.sort()
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION NO 8
var bakeryStock = ['Apple Pie', 'cookies', 'Chips', 'Cake', 'Patties', 'Pastry']
var bakeryItem = prompt('What Item You Want!')
for (var i = 0; i < bakeryStock.length; i++) {
    if (bakeryItems[i] === 'Apple Pie') {
        console.log(bakeryItems[i] + ' is available at index 0 at our Bakery')
    } else if (bakeryItems[i] === 'cookies') {
        console.log(bakeryItems[i] + ' is available at index 1 at our Bakery')
    } else if (bakeryItems[i] === 'Chips') {
        console.log(bakeryItems[i] + ' is available at index 2 at our Bakery')
    } else if (bakeryItems[i] === 'Cake') {
        console.log(bakeryItems[i] + ' is available at index 3 at our Bakery')
    } else if (bakeryItems[i] === 'Patties') {
        console.log(bakeryItems[i] + ' is available at index 4 at our Bakery')
    } else if (bakeryItems[i] === 'Pastry') {
        console.log(bakeryItems[i] + ' is available at index 5 at our Bakery')
    }

    else {
        console.log(bakeryItems + ' is not available at ou bakery')
    }
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION NO 9
var arr = [3, 6, 2, 12, 91, 78, 53, 24];
var largest = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION NO 10
var arr = [24, 53, 78, 91, 12];
var smallest = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(smallest);
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION NO 11
var arr = [24, 53, 78, 91, 12];
var smallest = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
var largest = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(smallest + ' is the smallest number');
console.log(largest + ' is the Largest number');
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION NO 12
var input = 5
for (var i = 1; i <= 20; i++) {
    console.log(input * i)
}
// ______________________________________________________________________.


// ______________________________________________________________________.
// QUESTION NO 14
var userInput = prompt('How many number do you want from the start of (12, 45, 3, 22, 34, 50) ')
var number = [12, 45, 3, 22, 34, 50];
if (userInput == 12) { console.log(number[0]) }
// ______________________________________________________________________.

// ______________________________________________________________________.
// QUESTION NO 15
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(A[0])
console.log(A[1])
console.log(A[2])
// ______________________________________________________________________.

// ______________________________________________________________________.
// QUESTION NO 17
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) { console.log(i + ' is a even number') }
    else console.log(i + ' is an odd number')
    console.log(i)
}
// ______________________________________________________________________.
*/
// ------------------ ASSIGNMENT 5 ------------------.




// ------------------ ASSIGNMENT 8 ------------------.
/*
// ______________________________________________________________________.
// 1.	Create a block of code that you can use several times.
function greet() {
    var name = prompt(`Enter your name: `);
    document.write(`Good Morning ${name}`);
}
greet();
// ______________________________________________________________________.



// ______________________________________________________________________.
// 2.	Write a function that displays current date & time in your browser.
function currentDateTime() {
    var date = new Date();
    document.write(`current time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} current date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
}
currentDateTime();
// ______________________________________________________________________.


// ______________________________________________________________________.
// 3.	Write a function that takes first & last name and then it greets the user using his full name.
function fullName() {
    var fname = prompt(`Enter first name: `);
    var lname = prompt(`Enter last name: `);
    document.write(`Good Morning ${fname} ${lname}`);
}
fullName();
// ______________________________________________________________________.



// ______________________________________________________________________.
// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function sum() {
    var num1 = +prompt(`Enter first number: `);
    var num2 = +prompt(`Enter second number: `);
    return (num1 + num2);
}
sum();
// ______________________________________________________________________.



// ______________________________________________________________________.
// 5.	 Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
function myCalculator() {
    var num1 = +prompt(`Enter first number: `);
    var num2 = +prompt(`Enter second number: `);
    var operator = prompt(`Enter operator: `);
    var result;
    if (operator == "+") { result = (num1 + num2) }
    else if (operator == "-") { result = (num1 - num2) }
    else if (operator == "*") { result = (num1 * num2) }
    else if (operator == "/") { result = (num1 / num2) }
    else if (operator == "%") { result = (num1 % num2) }
    document.write(`${num1} ${operator} ${num2} = ${result}`);
    return result;
}
myCalculator();
// ______________________________________________________________________.



// ______________________________________________________________________.
// 6.	 Write a function that squares its argument.
function square(num) {
    return (num * num);
}
square(3);
// ______________________________________________________________________.



// ______________________________________________________________________.
//7. Write a function that computes factorial of a number.
function calFactorial(num) {
    var factorial = 1;
    for (var i = num; i > 0; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
calFactorial(6);
// ______________________________________________________________________.



// ______________________________________________________________________.
// 8.	Write a function that take start and end number as inputs & display counting in your browser.
function counting() {
    var startNum = +prompt(`Enter starting number: `);
    var endNum = +prompt(`Enter ending number: `);
    for (var i = startNum; i <= endNum; i++) {
        document.write(`${i} <br />`)
    }
}
counting();
// ______________________________________________________________________.



// ______________________________________________________________________.
// 9.	Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
function triangleCalc() {
    var base = +prompt("Enter value of base: ");
    var perp = +prompt("Enter value of perpendicular: ");
    function square(num) {
        return (num * num);
    }
    var hypotenuse = square(base) + square(perp);
    return hypotenuse;
}
triangleCalc();
// ______________________________________________________________________.




// ______________________________________________________________________.
// 10.	Write a function that writes variable length arguments list in your browser.
function argLength() {
    return arguments.length;
}
argLength(12, 2, 34, 5);
// ______________________________________________________________________.



// ______________________________________________________________________.
// 11.	Write a function that accepts any number of arguments & find largest of the number.
function largestNum(...a) {
    var bigNo = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > bigNo) {
            bigNo = arguments[i];
        }
    }
    return bigNo;
}
largestNum(25, 11, 36, 10000, 2, 1, 0);
// ______________________________________________________________________.



// ______________________________________________________________________.
// 12.	Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a.	Arguments as values
// b.	Arguments as variables
function area(width, height) {
    var area = width * height;
    return area;
}
var width = 3, height = 4;
area(2, 5);
area(width, height)
// ______________________________________________________________________.



// ______________________________________________________________________.
// 13.	Write a function that receives an array & returns the sorted array.
var nums = [5, 4, 3, 2, 1];
function myfunc(...a) {
    return nums.sort();
}
myfunc.apply(nums);
// ______________________________________________________________________.



// ______________________________________________________________________.
// 14.	Write a function that takes numbers array, sums its elements & returns the sum.
var nums = [10, 20, 30, 40];
function myfunc(...a) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}
myfunc.apply(nums);
// ______________________________________________________________________.



// ______________________________________________________________________.
// 15.	Execute & monitor the output of following JS program:
var param = function inner() {
    return typeof inner;
}
alert(param());
// ans: function
// ______________________________________________________________________.



// ______________________________________________________________________.
// 16.	Write a function that computes power of a number. E.g. 23 is 8.
function calPower(num, power) {
    var result = 1;
    for (var i = 0; i < power; i++) {
        result *= num
    }
    return result
}
calPower(3, 2);
// ______________________________________________________________________.



// ______________________________________________________________________.
// 17.	Write a function that simulates a dice & returns a random dice value.
function diceSimulator() {
    var result = Math.ceil(Math.random() * 6)
    return result;
}
diceSimulator();
// ______________________________________________________________________.



// ______________________________________________________________________.
// 18.	Write a JavaScript function that reverse a number.
// Example x = 32243;
// EXPECTED OUTPUT : 34223
function reverseNum(num) {
    var mynum = num.toString();
    var reverse = []
    for (var i = mynum.length; i >= 0; i--) {
        reverse.push(mynum[i]);
        var reverseString = reverse.join('');
    }
    return reverseString;
}
reverseNum(12345);
// ______________________________________________________________________.


// ______________________________________________________________________.
// 19.	Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
function palindrome(word) {
    var reverse = []
    for (var i = word.length; i >= 0; i--) {
        reverse.push(word[i]);
        var reverseString = reverse.join('');
    }
    if (reverseString == word) {
        return 'string is palindrome';
    }
    else {
        return 'string is not palindrome';
    }
}
palindrome('civic');
// ______________________________________________________________________.


// ______________________________________________________________________.
// 20.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function titleCase(string) {
    var splitString = string.split(" ");
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);
    }
    return splitString.join(" ");
}
titleCase('the quick brown fox');
// ______________________________________________________________________.


// ______________________________________________________________________.
// 21.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
function longestWord(string) {
    var splitString = string.split(' ');
    var lengthArr = [];
    var max = 0;
    for (var i = 0; i < splitString.length; i++) {
        lengthArr.push(splitString[i].length);
    }
    for (i = 1; i < lengthArr.length; i++) {
        if (lengthArr[i] > max) {
            max = lengthArr[i];
        }
    }
    var maxIndex = lengthArr.indexOf(max);
    return (splitString[maxIndex]);
}
longestWord('Web Development Tutorial');
// ______________________________________________________________________.


// ______________________________________________________________________.
// 22.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// EXAMPLE STRING : 'The quick brown fox'
// EXPECTED OUTPUT : 5

function vowelCount(text) {
    var myVowels = ['a', 'e', 'i', 'o', 'u'];
    var vowels = 0;
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < myVowels.length; j++) {
            if (text[i] == myVowels[j]) {
                vowels++;
            }
        }
    }
    return vowels;
}
vowelCount('the quick brown fox');
// ______________________________________________________________________.


// ______________________________________________________________________.
// 23.	Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function returnDType(data) {
    return (typeof data);
}
returnDType(12);
// ______________________________________________________________________.



// ______________________________________________________________________.
// 24.	Write a JavaScript function to extract unique characters from a string.
// EXAMPLE STRING : "thequickbrownfoxjumpsoverthelazydog"
// EXPECTED OUTPUT : "thequickbrownfxjmpsvlazydg"
function uniqueChar(string) {
    var uniqueCharacter = "";
    for (var i = 0; i < string.length; i++) {
        if (uniqueCharacter.indexOf(string.charAt(i)) == -1) {
            uniqueCharacter += string[i];
        }
    }
    return uniqueCharacter;
}
uniqueChar("thequickbrownfoxjumpsoverthelazydog");
// ______________________________________________________________________.



// ______________________________________________________________________.
// 25.	Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// EXPECTED OUTPUT : 2
function repetitionCounter(string, letter) {
    var a = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() == letter.charCodeAt()) {
            a++
        }
    }
    return a;
}
repetitionCounter('JSResourceS.com', 'o');
// ______________________________________________________________________.



// ______________________________________________________________________.
// 26.	The Age Calculator
// Forgot how old you are? Calculate it!
// •	Write a function named calculateAge that:
// o	takes 2 arguments: birth year, current year.
// o	calculates the 2 possible ages based on those years.
// o	outputs the result to the screen like so: "You are either NN or NN"
// •	Call the function three times with different sets of values.
// •	Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calcAge(birthYear) {
    var date = new Date();
    var age = date.getFullYear() - birthYear
    console.log(`you are either ${age - 1} or ${age} years old`);
}
calcAge(2002);
calcAge(2015);
calcAge(1990);
// ______________________________________________________________________.


// ______________________________________________________________________.
// 27.	The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// •	Write a function named calculateSupply that:
// o	takes 2 arguments: age, amount per day.
// o	calculates the amount consumed for rest of the life (based on a constant max age).
// o	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// •	Call that function three times, passing in different values each time.
// •	Bonus: Accept floating point values for amount per day, and round the result to a round number.
function supplyCalc(age, amountPerDay) {
    var finAge = 80;
    var remainingAge = finAge - age
    var total = remainingAge * 12 * 365
    console.log(`You will need ${Math.round(total)} to last you until the ripe old age of ${finAge}`);
}
supplyCalc(1.2, 10)
supplyCalc(2.6, 20)
supplyCalc(1, 65)
// ______________________________________________________________________.


// ______________________________________________________________________.
// 28.	The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// •	Pass the radius to the function.
// •	Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// •	Pass the radius to the function.
// •	Calculate the area based on the radius, and output "The area is NN".
function calcCircumference(radius) {
    var circumference = Math.round(2 * 3.142 * radius);
    console.log(`the circumference is ${circumference}`);
}
function calcArea(radius) {
    var area = Math.round(3.142 * radius * radius);
    console.log(`the area is ${area}`);
}

// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// •	Store a celsius temperature into a variable.
// •	Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// •	Now store a fahrenheit temperature into a variable.
// •	Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(temperature) {
    var result = Math.round((temperature * 1.8) + 32);
    console.log(`${temperature}C is ${result}F`);
}
function fahrenheitToCelsius(temperature) {
    var result = Math.round((0.5555555555555556) * (temperature - 32));
    console.log(`${temperature}F is ${result}C`);
}
// ______________________________________________________________________.
*/
// ------------------ ASSIGNMENT 8 ------------------.





// ------------------ ASSIGNMENT 14 ------------------.
// PART 1 ____________________________________________________________________.
/*
// 1) Create 10 objects for the USER using constructor function and push them in an array, consisting of these fields.
// _id: Should be random,
// name: Hardcoded,
// profileImage: Hardcoded Image Url,
// createdAt: Current Date in milliseconds,
// friends: Array consisting of some other user Ids.
// Loop through each user and show the list of friend's name for each user!
// 2) Create a function to add a friend to a user object, that will take two arguments 1) userId 2) friend's Id.
// 3) Create a function to delete a friend from a user object, that will take two arguments 1) userId 2) friend's Id.

// ______________________________________________________________________.
// 1-
function Objects(name, profileImage) {
    this.id = Math.random().toFixed(8).slice(2)
    this.name = name
    this.profileImage = profileImage
    this.createdAt = Date.now()
    this.friends = []
}
var user1 = new Objects('shayan', 'shayan.jpg')
var user2 = new Objects('shahzaib', 'shahzaib.jpg')
var user3 = new Objects('zohaib', 'zohaib.jpg')
var user4 = new Objects('sohaib', 'sohaib.jpg')
var user5 = new Objects('airaf', 'airaf.jpg')
var users = []
users.push(user1, user2, user3, user4, user5)
for (var i = 0; i < users.length; i++) {
    for (var key in users[i]) {
        document.write(key, ' ------ ', users[i][key], '<br>')
    }
    document.write('<hr>')
    console.log(users[i], ' ------ ', users[i][key])
}



// 2- addFriend function me 2 parameter denge (1.user.id  2.friend.Id). if (userId = users[i].id) to same users[i] k friends me push(friendId).
function addFriend(userId, friendId) {
    for (var i = 0; i < users.length; i++) {
        if (userId === users[i].id) {
            users[i].friends.push(friendId)
        }
    }
}
addFriend(user1.id, user2.id)
addFriend(user1.id, user3.id)



// 3- deleteFriend function me 2 parameter denge (1.user.id  2.friend.Id). if (userId = users[i].id) to same users[i].friends.indexOf(friendId) ko ye kardo users[i].friends.splice(friendIndex, 1).
function deleteFriend(userId, friendId) {
    for (var i = 0; i < users.length; i++) {
        if (userId === users[i].id) {
            var friendIndex = users[i].friends.indexOf(friendId)
            users[i].friends.splice(friendIndex, 1)
        }
    }
}
deleteFriend(user1.id, user2.id)

// */
// PART 1 ____________________________________________________________________.

// PART 2 ____________________________________________________________________.
/*

// Q1: I want this code to log out "hey amy", but it logs out "hey arnold" - why?
function greet(person) {
    if (person == { name: 'amy' }) {
        return console.log('hey amy')
    } else {
        return console.log('hey arnold')
    }
}
greet({ name: 'amy' })
// ------solution-------
function greet(person) {
    if (person.name === 'amy') {
        return console.log('hey amy')
    } else {
        return console.log('hey arnold')
    }
}
greet({ name: 'amy' })


// Q2: I want this code to log out the numbers 0, 1, 2, 3 in that order, but it doesn’t do what I expect (this is a bug you run into once in a while, and some people love to ask about it in interviews).
for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}
// ----solution----
for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 5000)
}


// Q3: I want this code to log out "doggo", but it logs out undefined!
let dog = {
    name: 'doggo',
    sayName() {
        console.log(this.name)
    }
}
let sayName = dog.sayName
sayName()
// ----solution----
let dog = {
    name: 'doggo',
    sayName() {
        console.log(this.name)
    }
}
let sayName = dog.sayName.bind(dog)
sayName()


// Q4: I want my dog to bark(), but instead I get an error. Why?
function Dog(name) {
    this.name = name
}
Dog.bark = function () {
    console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()
// ----solution----
function Dog(name) {
    this.name = name
}
Dog.prototype.bark = function () {
    console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()


// Q5: Why does this code return the results that it does?
function isBig(thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
        return false
    }
    return true
}
isBig(1) // false
isBig([2]) // false
isBig([3]) // true
// ----solution----
function isBig(thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
        return console.log(false)
    }
    return console.log(true)
}
isBig(1) // false
isBig([2]) // false
isBig([3]) // true

*/
// PART 2 ________________________________________________________________.
// ------------------ ASSIGNMENT 14 ------------------.






// ------------------ Class TASK ------------------.
// Question 1 ____________________________________________________________.
/*
// i) Replace the 3rd index with {name: 'Siddiq', age: 23}
var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }
]
var name1 = arr[3].name = 'siddiq'
var age1 = arr[3].age = 23
document.write(name1, '<br>', age1, '<br>')
// ii) Push {name: 'Umair', age: '23'} from the end
arr.push({ name: 'Umair', age: '23' })
// iii) Remove the first element
arr.shift()
// iv) Add a field createdAt: new Date() with each through loop.
for (var i = 0; i < arr.length; i++) {
    var today = new Date()
    var time = today.getDate() + ':' + today.getMonth() + ':' + today.getFullYear()
    document.write(`${arr[i].name} ----- ${arr[i].age} ----- ${time}  <br>`)
}
*/
// Question 1 ____________________________________________________________.


// Question 2 ____________________________________________________________.
/*
Using above array I want an array consisting only those names whose ages are between 18 to 28 and their names consist of letter 'f'.Then convert the output array to string.For e.g. ['Asher', 'Zubair'] to 'Asher', 'Zubair'.
var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }
]
for (var i = 0; i < arr.length; i++) {
    if (arr[i].age <= 18 && arr[i].age <= 28 && arr[i].name.includes('f')) {
        document.write(arr[i].name, ' ', arr[i].age)
    }
}
*/
// Question 2 ____________________________________________________________.


// Question 3 ____________________________________________________________.
/*
3.These are two arrays
var students = [
    { id: 'std1', name: 'Bill Gates', age: 30 },
    { id: 'std2', name: 'Steve Jobs', age: 30 },
    { id: 'std3', name: 'Suzanne Collins', age: 30 }
];
var courses = [
    { name: 'Maths', std_id: ['std3', 'std1'] },
    { name: 'Computer Science', std_id: ['std3', 'std2'] },
    { name: 'Commerce', std_id: ['std1'] },
];
Expected Output Get an array consisting of student name and student Id with courses(array).
*/
/*
var students = [
    { id: 'std1', name: 'Bill Gates', age: 30 },
    { id: 'std2', name: 'Steve Jobs', age: 30 },
    { id: 'std3', name: 'Suzanne Collins', age: 30 }
];
var courses = [
    { name: 'Maths', std_id: ['std3', 'std1'] },
    { name: 'Computer Science', std_id: ['std3', 'std2'] },
    { name: 'Commerce', std_id: ['std1'] },
];

var ExpectedOutput = [
    {
        id: students[0].id,
        name: students[0].name,
        age: students[0].age,
        course: [courses[0].name, courses[2].name]
    },
    {
        id: students[1].id,
        name: students[1].name,
        age: students[1].age,
        course: [courses[1].name]
    },
    {
        id: students[2].id,
        name: students[2].name,
        age: students[2].age,
        course: [courses[0].name, courses[1].name]
    }
]
for (var i = 0; i < ExpectedOutput.length; i++) {
    document.write(`${ExpectedOutput[i].id} -- ${ExpectedOutput[i].name} -- ${ExpectedOutput[i].age} -- ${ExpectedOutput[i].course}<br>`)
}
*/
// Question 3 ____________________________________________________________.

// ------------------ Class TASK ------------------.