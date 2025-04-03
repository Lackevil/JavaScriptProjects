const riddle = [
	{
		question: "There is a pear hanging, you can't eat it",
		correctAnswer: 'Bulb',
		hints: ['This is not edible', 'Emits light'],
		tries: 3,
	},
	{
		question: "It has keys but can't open locks",
		correctAnswer: 'Keyboard',
		hints: ['Used for typing', 'Common with computers'],
		tries: 3,
	},
	{
		question: 'The more you remove, the bigger it gets',
		correctAnswer: 'Hole',
		hints: ['Can be dug', 'Has an empty space'],
		tries: 3,
	},
]

let riddleIndex = 0

const riddleEl = document.getElementById('riddle')
const triesEl = document.getElementById('tries')
const hintsEl = document.getElementById('hints')
const userAnswerEl = document.getElementById('userAnswer')
const checkbtn = document.getElementById('checkBtn')

function showRiddle() {
	riddleEl.textContent = riddle[riddleIndex].question
	triesEl.textContent = `You have ${riddle[riddleIndex].tries} attempts`
}

showRiddle()

checkbtn.addEventListener('click', checkAnswer)

function checkAnswer() {
	const userAnswer = userAnswerEl.value

	if (riddle[riddleIndex].tries === 2) {
		hintsEl.textContent = riddle[riddleIndex].hints
	}

	if (riddle[riddleIndex].tries > 0) {
		if (
			userAnswer.toLowerCase() ===
			riddle[riddleIndex].correctAnswer.toLowerCase()
		) {
			alert('You won!')
			userAnswerEl.value = ''
			updateRiddle()
		} else {
			alert('Wrong!')
			userAnswerEl.value = ''
			riddle[riddleIndex].tries--
			triesEl.textContent = `You have ${riddle[riddleIndex].tries} attempts`
		}
	} else {
		alert('There is no more tries. Next riddle!')
		userAnswerEl.value = ''
		updateRiddle()
	}
}

function updateRiddle() {
	if (riddleIndex >= riddle.length - 1) {
		riddleIndex = 0
	} else {
		riddle[riddleIndex].tries = 3
		hintsEl.textContent = ''
		riddleIndex++
	}

	showRiddle()
}
