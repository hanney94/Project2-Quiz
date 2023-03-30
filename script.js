"use strict"

const startButton = document.getElementById('start-butn')
const nextButton = document.getElementById('next-butn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const score = document.getElementById ('score')
 
 console.log (score)

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})



function startGame() {
	startButton.classList.add('hide')
	shuffledQuestions = questions.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()


}

function setNextQuestion () {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('butn')
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	})
}
 function resetState() {
 	nextButton.classList.add('hide')
 	while (answerButtonsElement.firstChild) {
 		answerButtonsElement.removeChild
 		(answerButtonsElement.firstChild)
 	}
 }
function selectAnswer (e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct 
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)

	})
	if (shuffledQuestions.length > currentQuestionIndex + 1)	{
		score += 100
		score.innerText= score
		nextButton.classList.remove('hide')
} else {
	startButton.innerText = 'Restart'
	startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {

	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	}
	else {
		element.classList.add('wrong')  
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions = [
   {

   	question: 'Abba is...what?',
   	answers: [
   		{ text: 'the best', correct: true},
   		{ text: 'the worst', correct: false},
   		{ text: 'test', correct: false},
   		{ text: 'hello', correct: false},

   		]
    },
     {

   	question: 'Mamma Mia...',
   	answers: [
   		{ text: 'Here i go again', correct: true},
   		{ text: 'having the time', correct: false},
   		{ text: 'test', correct: false},
   		{ text: 'hello', correct: false},

   		]
    },
     {

   	question: 'Abba stands for?',
   	answers: [
   		{ text: 'a b b a', correct: true},
   		{ text: 'hello', correct: false},
   		{ text: 'test', correct: false},
   		{ text: 'hello', correct: false},

   		]
    },
     {

   	question: 'Abba are from',
   	answers: [
   		{ text: 'Sweden', correct: true},
   		{ text: 'denmark', correct: false},
   		{ text: 'test', correct: false},
   		{ text: 'hello', correct: false},

   		]
    },

]