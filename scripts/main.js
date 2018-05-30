const divs = document.querySelectorAll('.box')
console.log(divs)

divs.forEach(div => {
  div.addEventListener('click', (event) => {
    console.log(div.textContent)
  })
})