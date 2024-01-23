const quizData = [
    {
    question: " What is the French word for the number 'three'?", 
    a: "un",  
    b: "deux",   
    c: "trois",  
    d: "quatre",  
    correct: "c", 
    }, 
    {
    question: "Which pronoun in French means 'you'?",
    a: "il",
    b: "elle",
    c: "tu",
    d: "nous",
    correct: "c",
    }, 
    {
    question: "What is the French word for 'cat'?", 
    a: "Chien",
    b: "Chat", 
    c: "Oiseau",
    d: "Cheval",
    correct: "b",
    },
    {
        question: "How do you say 'Hello' in French?", 
        a: "Au revoir",
        b: "Bonjour", 
        c: "Merci",
        d: "Excusez-moi",
        correct: "b",
    },
    {
        question: "Which phrase is used to say 'Thank you' in French?", 
        a: "Pardon",
        b: "Merci", 
        c: "Excusez-moi",
        d: "S'il vous plaît",
        correct: "b",
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
