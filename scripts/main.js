// functions Definitions
function generateGrid(num) {
  const table = document.createElement('table')
  const tableBody = document.createElement('tbody')
  for (let i = 0; i < num; i++) {
    const row = document.createElement('tr');        
    for (let j = 0; j < num; j++) {
      const cell = document.createElement('td');
      row.appendChild(cell)
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody)
  document.body.appendChild(table);
}

function generateColorPalette() {
  const mainDiv = document.createElement('div')
  mainDiv.classList.add('color-palette')
  document.body.appendChild(mainDiv)  
  const colors = [
    'red', 'blue', 'lightblue',
    'purple', 'magenta', 'green', 
    'limegreen', 'pink', 'black', 
    'brown', 'orange', 'yellow'
  ]
  for (let i = 0; i < colors.length; i++) {
    const div = document.createElement('div')
    div.classList.add('color-box')
    div.style.background = colors[i]
    mainDiv.appendChild(div)
  }

  const text = document.createElement('h5')
  text.textContent = 'selected color'
  mainDiv.appendChild(text)
}

// create grid and a number palette
generateGrid(13);
generateColorPalette()
let colorSelected = '';

const tds = Array.from(document.querySelectorAll('td'))
tds.forEach(td => {
  td.addEventListener('click', (event) => {
    const changeColor = td.style.background !== colorSelected
    td.style.background = changeColor ? colorSelected : ''
    td.style.borderColor = changeColor ? colorSelected : 'black'
  })
})

const colors = document.querySelectorAll('.color-box')
colors.forEach(color => {
  color.addEventListener('click', (event) => {
    colorSelected = color.style.background
    // document.getElementById('selected-color').style.background = colorSelected
    document.querySelector('h5').style.background = colorSelected
  })
})