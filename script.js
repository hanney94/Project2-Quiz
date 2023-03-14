"use strict";

const restartBtn = document.getElemenntById ('Restart');
const prevBtn = document.getElemenntById ('Prev');
const nextBtn = document.getElemenntById ('Next');
const submitBtn = document.getElemenntById ('Submit');
const trueBtn = document.getElemenntById ('True');
const falseBtn = document.getElemenntById ('False');
const userScore = document.getElemenntById ('user-score');
const questionText = document.getElemenntById ('question-text');

let currentQuestion = 0;
var score = 0;

let questions = [

{
	question : "ABBA was formed in 1972?",
	answers: [
		{option: "For Sure!" ,answer:true},
		{option: "No, not at all" ,answer:false}

		]
},
{
	question : "ABBA performed 'Waterloo' at the Eurovision Song Contest in 1974",
	answers: [
		{option:"Yes" ,answer:true},
		{option:"No" ,answer:false}
		]
},
{
	question : "The four members of the band are called Hannah, David, Katy & Stuart",
	answers: [
	    {option:"Maybe" ,answer:true},
	    {option:"Nope!" ,answer:false}
            ]

} 

]





