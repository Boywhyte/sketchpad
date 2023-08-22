document.addEventListener("DOMContentLoaded",function(){
    createCanvas(num)
})

function createCanvas(num){
    let board = document.querySelector(".board")
    board.style.gridTemplateColumns = `repeat(${num},1fr)`
    board.style.gridTemplateRows = `repeat(${num},1fr)`

    let numDivs = size * size;

    for(let i = 0;i < numDivs;i++){
        let div =document.createElement('div')
        board.insertAdjacentElement('beforeend',div)
    }
}