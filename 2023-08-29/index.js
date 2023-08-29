const input = document.getElementById('input')
const paragraph = document.querySelector('.paragraph')
const button = document.getElementById('button')

button.addEventListener('click', () => {
  const inputValue = input.value
  paragraph.innerHTML = inputValue
})