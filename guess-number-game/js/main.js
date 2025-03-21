const buttons = document.querySelectorAll('.buttons__item')
const triesEl = document.getElementById('triesEl')

let tries = 5
const randomNumber = Math.ceil(Math.random() * 10)

buttons.forEach(btn => {
	btn.addEventListener('click', guessNumber)
})

function guessNumber(e) {
	const userNumber = Number(e.target.value)

  if (tries < 1) {
    return alert('Game Ended')
  }

	if (userNumber === randomNumber) {
		tries = 0
    changeTriesDisplay()
		alert('You won!')
	} else if (userNumber < randomNumber) {
		tries--
    changeTriesDisplay()
		alert('Bigger')
	} else if (userNumber > randomNumber) {
		tries--
    changeTriesDisplay()
		alert('Less')
	}
}

function changeTriesDisplay() {
  triesEl.textContent = tries
}