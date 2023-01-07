// questions data.
const allQuestions = [
    {
        question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        correctAnswer: "c"
    },
    {
        question: "what does HTML stand for?",
        a: "Hellotext Markup Language",
        b: "Hypertext Mockup Language",
        c: "Hypertext Markup Language",
        correctAnswer: "c"
    },
    {
        question: "what does CSS stand for?",
        a: "Correcting Style Sheets ",
        b: "Cascading Style Sheets",
        c: "Cascading Style Show",
        correctAnswer: "b"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementbyid()",
        b: "getElementsByClassName()",
        c: "Both A and B",
        correctAnswer: "c"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "Let",
        c: "Both A and B",
        correctAnswer: "c"
    },
    {
        question: " What are JavaScript Data Types?",
        a: "String",
        b: "Boolean",
        c: "Object",
        d: "All Of Them",
        correctAnswer: "d"
    },
    {
        question: "What does '…' operator do in JS??",
        a: "It is used to spread iterables to indivisiual elements.",
        b: "Its is used to describe a data type of undefined size",
        c: "There is No Such Opreator",
        correctAnswer: "a"
    },
    {
        question: "How do we write a comment in javascript?",
        a: "/* */",
        b: "//",
        c: "$ $",
        correctAnswer: "a"
    },
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        correctAnswer: "c"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        a: "document.write()",
        b: "console.log",
        c: "windows.alert",
        d: "All Of Them",
        correctAnswer: "d"
    },
];


// grab elements.
let question = document.getElementById('question');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let submitBtn = document.getElementById('submitBtn');
let answers = document.querySelectorAll('.answer');
let scoreElement = document.getElementById('scoreElem');

// scoreElement initialy none.
scoreElement.style.display = "none";

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    // variable for index of questionData.
    let questionData = allQuestions[questionCount]
    question.innerText = questionData.question
    option1.innerText = questionData.a
    option2.innerText = questionData.b
    option3.innerText = questionData.c
    option4.innerText = questionData.d
    console.log(allQuestions);
}

loadQuestion()


const answerCheck = () => {
    let answer;
    answers.forEach((currentOption) => {
        if (currentOption.checked) {
            answer = currentOption.id
            console.log(answer);
        }
    });
    return answer;
}


const removeChecked = () => {
    answers.forEach((currentOption) => currentOption.checked = false)
}


submitBtn.addEventListener('click', () => {
    const check = answerCheck()
    if (check == allQuestions[questionCount].correctAnswer) {
        console.log('correct');
        score++
    }
    removeChecked();
    questionCount++
    if (questionCount < allQuestions.length) {
        console.log('next question');
        loadQuestion()
    } else {
        scoreElement.style.display = "flex"
        scoreElement.innerHTML = `
            <p>Your Score <b>${score}</b> out of <b>10</b> 👍</p>
            <button class="btn btn-success" onclick="location.reload()">Play Again</button>`
    }
})






















































































// questions data.
// const allQuestions = [
//     {
//         question: "Who invented JavaScript?",
//         answers: {
//             a: "Douglas Crockford",
//             b: "Sheryl Sandberg",
//             c: "Brendan Eich"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "what does HTML stand for?",
//         answers: {
//             a: "Hellotext Markup Language",
//             b: "Hypertext Mockup Language",
//             c: "Hypertext Markup Language"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "what does CSS stand for?",
//         answers: {
//             a: "Correcting Style Sheets ",
//             b: "Cascading Style Sheets",
//             c: "Cascading Style Show",
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "Which of the following methods is used to access HTML elements using Javascript?",
//         answers: {
//             a: "getElementbyid()",
//             b: "getElementsByClassName()",
//             c: "Both A and B"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Which of the following keywords is used to define a variable in Javascript?",
//         answers: {
//             a: "var",
//             b: "Let",
//             c: "Both A and B"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: " What are JavaScript Data Types?",
//         answers: {
//             a: "String",
//             b: "Boolean",
//             c: "Object",
//             d: "All Of Them"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "What does '…' operator do in JS??",
//         answers: {
//             a: "It is used to spread iterables to indivisiual elements.",
//             b: "Its is used to describe a data type of undefined size",
//             c: "There is No Such Opreator"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "How do we write a comment in javascript?",
//         answers: {
//             a: "/* */",
//             b: "//",
//             c: "$ $"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
//         answers: {
//             a: "Boolean",
//             b: "Undefined",
//             c: "Object"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Which of the following methods can be used to display data in some form using Javascript?",
//         answers: {
//             a: "document.write()",
//             b: "console.log",
//             c: "windows.alert",
//             d: "All Of Them"
//         },
//         correctAnswer: "d"
//     },
// ];

