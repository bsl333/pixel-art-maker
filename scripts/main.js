// functions Definitions
function createGrid(num) {
  const table = document.createElement('table')
  // const tableBody = document.createElement('tbody')
  for (let i = 0; i < num; i++) {
    const row = document.createElement('tr');        
    for (let j = 0; j < num; j++) {
      const cell = document.createElement('td');
      row.appendChild(cell)
    }
    table.appendChild(row);
  }
  // table.appendChild(tableBody)
  document.body.appendChild(table);
}

function generateColorPalette() {
  const mainDiv = document.createElement('div')
  mainDiv.classList.add('color-palette')
  document.body.appendChild(mainDiv)  
  const colors = [
    'red', 'blue', 'green', 
    'limegreen', 'pink', 'black', 
    'brown', 'orange', 'yellow'
  ]
  for (let i = 0; i < colors.length; i++) {
    const div = document.createElement('div')
    div.classList.add('color-box')
    div.style.background = colors[i]
    // document.body.appendChild(div)
    mainDiv.appendChild(div)
  }
}

createGrid(20);
generateColorPalette()
let colorSelected = '';

const tds = Array.from(document.querySelectorAll('td'))
tds.forEach(td => {
  td.addEventListener('click', (event) => {
    console.log('click fired')
    const changeColor = td.style.background !== colorSelected
    td.style.background = changeColor ? colorSelected : ''
    td.style.borderColor = changeColor ? colorSelected : 'black'
  })
})

const colors = document.querySelectorAll('.color-box')
colors.forEach(color => {
  color.addEventListener('click', (event) => {
    colorSelected = color.style.background
    console.log(colorSelected)
  })
})