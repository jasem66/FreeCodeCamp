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
     return toggleErrorMsg({show:true , msg:'Enter a number '})
  
 
  }
 
messages({show: true})
  error.classList.remove('active')
  // circle.style.display = 'block'
  // startBox.style.display = 'none'
  timerNumber.textContent = addedNum
  
    let originalSecond = addedNum;
  let timer = setInterval(() => {
    if (addedNum <= 0) {
      clearInterval(timer)
      // circle.style.display='none'
       startBox.style.display = 'block'
       input.value = ''
       input.focus()
       messages({show:false})
  
       
         
return

    }
    addedNum -= 1
    let percentage = Math.floor((( (originalSecond - addedNum) / originalSecond) *100 - 100))
    console.log(percentage)
    timerNumber.textContent = addedNum
  }, 1000)
})

let toggleErrorMsg=({show, msg})=>{
 if(show){
     error.textContent = msg
    error.classList.add('active')
    return
 }else{
    error.classList.remove('active')
 }
}
let messages =({show})=>{

 if(show){
    loading.style.display = 'block'
     success.style.display = 'none'
 }else{
 success.style.display = 'block'
   loading.style.display = 'none'
 }
}