const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
btn.addEventListener('click', function () {
  let randomNum = () => Math.floor(Math.random() * hex.length)
  
  let hexColor = '#'

     for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNum()]
  }
let time=()=>{ setInterval(() => {
 console.log(3)
 clearInterval(time)
}, 1000)};

  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
})
