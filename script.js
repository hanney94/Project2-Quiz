"use strict"

const startButton = document.getElementById('start-butn')
const nextButton = document.getElementById('next-butn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



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

   	question: 'ABBA formed in 1972 in which city?',
   	answers: [
   		{ text: 'Stockholm, Sweden', correct: true},
   		{ text: 'Barcelona, Spain', correct: false},
   		{ text: 'Lisbon, Portugal', correct: false},
   		{ text: 'Copenhagen, Denmark', correct: false},

   		]
    },
     {

   	question: 'ABBA is an acronym formed from the first letters of each group members first name. What do the two Bs stand for?',
   	answers: [
   		{ text: 'Bjorn, Benny', correct: true},
   		{ text: 'Barry, Brent', correct: false},
   		{ text: 'Bob, Brad', correct: false},
   		{ text: 'Bill, Brian', correct: false},

   		]
    },
     {

   	question: 'What was the band’s last single? It was released in 1983.',
   	answers: [
   		{ text: 'SOS', correct: false},
   		{ text: 'Mamma Mia', correct: false},
   		{ text: 'Thank You For The Music', correct: true},
   		{ text: 'Andante, Andante', correct: false},

   		]
    },
     {

   	question: 'In the lyrics, how old was the dancing queen?',
   	answers: [
   		{ text: '22', correct: false},
   		{ text: '17', correct: true},
   		{ text: '40', correct: false},
   		{ text: '19', correct: false},

   		]
    },

]