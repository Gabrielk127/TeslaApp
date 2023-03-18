const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnOpen = document.querySelector('#btnOpen')
const btnOff = document.querySelector('#btnOff')

btnOpen.addEventListener('click', openClick)
btnOff.addEventListener('click', openClick)

function openClick() {
    toggleScreen()
}


function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}