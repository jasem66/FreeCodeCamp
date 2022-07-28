let input = document.querySelector('#input-counter')
let start = document.querySelector('#start-counter')
let error = document.querySelector('#error')
let circle = document.querySelector('.circle')
let startBox = document.querySelector('.start-box')
let timerNumber = document.querySelector('.circle > span')
let loading = document.querySelector(' .loading')
let success = document.querySelector(' .success')

console.log(timerNumber)

start.addEventListener('click', (e) => {
  let addedNum = parseInt(input.value)

  if (isNaN(addedNum)) {
    error.textContent = 'Add a Number'
    error.classList.add('active')
    return
  }
  error.classList.remove('active')
  // circle.style.display = 'block'
  // startBox.style.display = 'none'
  timerNumber.textContent = addedNum
  loading.style.display ="block"
    success.style.display = 'none'

    let originalSecond = addedNum;
  let timer = setInterval(() => {
    if (addedNum <= 0) {
      clearInterval(timer)
      // circle.style.display='none'
       startBox.style.display = 'block'
       input.value = ''
       input.focus()
         loading.style.display = 'none'
         success.style.display = 'block'
return

    }
    addedNum -= 1
    let percentage = Math.floor((( (originalSecond - addedNum) / originalSecond) *100 - 100))
    console.log(percentage)
    timerNumber.textContent = addedNum
  }, 1000)
})
