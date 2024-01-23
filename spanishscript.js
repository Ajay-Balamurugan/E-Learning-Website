const quizData = [
    {
    question: "Which language runs in a web browser?", 
    a: "Java",  
    b: "C",   
    c: "Python",  
    d: "javascript",  
    correct: "d", 
    }, 
    {
    question: "What does CSS stand fuck?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVS Sailboats",
    correct: "b",
    }, 
    {
    question: "What does HTML stand for?", 
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language", 
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

currentQuiz = 0
score=0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers () {
answerEls.forEach(answerEl  => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
    if(answerEl.checked) {
    answer = answerEl.id
    }
    })
    return answer
    }
    

    submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer == quizData[currentQuiz].correct) {
            score++
        }
    
        currentQuiz++
    
        if (currentQuiz < quizData.length) {
        loadQuiz()
        } else{
        quiz.innerHTML = `
        <h3>You Answered ${score}/5 questions correctly</h3>
        <button onclick="location.reload()">Reload</button>
        `
        }
    }
    
})
