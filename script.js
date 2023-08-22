let color = 'black'


document.addEventListener("DOMContentLoaded",function(){
    createBoard(16)
    let select = document.getElementById('popup')
    select.addEventListener('click',function(){
        let num = getSize()
        createBoard(num)

    })
})
   //create dynamic grid
function createBoard(num){
    let board = document.querySelector(".board")
    board.style.gridTemplateColumns = `repeat(${num},1fr)`
    board.style.gridTemplateRows = `repeat(${num},1fr)`

    let numDivs = num * num;

    for(let i = 0;i < numDivs;i++){
        let div =document.createElement('div')
        div.addEventListener('mouseover',colorDiv)
        board.insertAdjacentElement('beforeend',div)
    }
}

// getting users input for number of grids

function getSize(){
    let input = prompt('Enter a number of grids')
    let message = document.getElementById('message')
    if (input == ''){
        message.textContent = 'Please enter a number'
    }
    else if (input < 0 || input>100){
        message.textContent='Invalid number. Please enter a number from 1-100.'
    }
    else{
        message.innerHTML = 'play'
        return input
    }
}

function colorDiv(){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`
    }
    else{
        this.style.backgroundColor = 'black'
    }
}
function setColor(colorChoice){
     color = colorChoice
}

function reset(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div)=> div.style.backgroundColor = 'white')
}