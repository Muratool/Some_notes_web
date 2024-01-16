// Переменные формы
const popUpHolder = document.querySelector('.popUp')
const closeFormBtt = document.querySelector('.closeFormBtn')
const openFormBtn = document.querySelector('.popUpBtn')
const form = document.querySelector('.holder')

const noteText = document.querySelector('.inputNote')
const addNoteBtn = document.querySelector('.createNoteBtn')

// Переменные контента
const display = document.querySelector('.content')
const notesArea = document.querySelector('.notes-area')

let note = document.querySelectorAll('.note')

// Конец области переменных //

openFormBtn.addEventListener('click', openForm)
closeFormBtt.addEventListener('click', closeForm)

addNoteBtn.addEventListener('click', addNote)

function addNote() {
	if (noteText.value != '') {
		let NOTE = document.createElement('div')
		NOTE.className = 'note'
		NOTE.innerText = noteText.value

		display.appendChild(NOTE)
		noteText.value = ''
	}
}

function openForm() {
	popUpHolder.classList.add('active')
}

function closeForm() {
	popUpHolder.classList.remove('active')
}
