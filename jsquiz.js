// Questions that will be asked
const Questions = [{
	q: "When the fourth shinobi war began, how many White Zetsu's did Tobi summon?",
	a: [{ text: "50,000", isCorrect: false },
	{ text: "150,000", isCorrect: false },
	{ text: "100,000", isCorrect: true },
	{ text: "1,000,000", isCorrect: false }
	]

},
{
	q: "How old was Itachi when he mastered the Sharigan?",
	a: [{ text: "10 years old", isCorrect: false, isSelected: false },
	{ text: "12 years old", isCorrect: false },
	{ text: "8 years old", isCorrect: true },
	{ text: "5 years old", isCorrect: false }
	]

},
{
	q: "What is the name of the book Kakashi loves to read the most",
	a: [{ text: "Love Paradise", isCorrect: false },
	{ text: "Make-Out Journey", isCorrect: false },
	{ text: "Make-Out Paradise", isCorrect: true },
	{ text: "Love Journey", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
