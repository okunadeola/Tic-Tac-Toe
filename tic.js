let player = 0 
let container = document.getElementById('container')
let result = document.getElementById('result')
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let startG = document.getElementById('startG')
result.style.display = 'none'
let i = 0;
let j = 0
const myFunc = (e)=>{
    if (e.target.innerHTML =="" && player == 0) {
        e.target.innerHTML = "X";
         player = 1;
    }
    else if (e.target.innerHTML =="" && player == 1) {
        e.target.innerHTML = "O";
        player = 0;
    } 
    if((one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML == "X") ||
       (four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML == "X") || 
       (seven.innerHTML == "X" && eight.innerHTML == "X" && nine.innerHTML == "X") ||
       (one.innerHTML == "X" && four.innerHTML == "X" && seven.innerHTML == "X") ||
       (two.innerHTML == "X" && five.innerHTML == "X" && eight.innerHTML == "X") ||
       (three.innerHTML == "X" && six.innerHTML == "X" && nine.innerHTML == "X") ||
       (seven.innerHTML == "X" && five.innerHTML == "X" && three.innerHTML == "X") ||
       (one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML == "X")){
        result.style.display = 'inline-block'
        result.innerHTML= player1.innerHTML + " won!!"
        container.style.userSelect = "none"
        player =2  
        scone.innerHTML = ++i
        
    }
    else if((one.innerHTML == "O" && two.innerHTML == "O" && three.innerHTML == "O") ||
        (four.innerHTML == "O" && five.innerHTML == "O" && six.innerHTML == "O") || 
        (seven.innerHTML == "O" && eight.innerHTML == "O" && nine.innerHTML == "O") ||
        (one.innerHTML == "O" && four.innerHTML == "O" && seven.innerHTML == "O") ||
        (two.innerHTML == "O" && five.innerHTML == "O" && eight.innerHTML == "O") ||
        (three.innerHTML == "O" && six.innerHTML == "O" && nine.innerHTML == "O") ||
        (seven.innerHTML == "O" && five.innerHTML == "O" && three.innerHTML == "O") ||
        (one.innerHTML == "O" && five.innerHTML == "O" && nine.innerHTML == "O")){
        result.style.display = 'inline-block'
        result.innerHTML= player2.innerHTML + ' won!!'
        container.style.userSelect = "none"
        player =3
        sctwo.innerHTML = ++j
       
    }
    if(((one.innerHTML == "O" || one.innerHTML == "X") &&
        (two.innerHTML == "O" || two.innerHTML == "X") &&
        (three.innerHTML == "O" || three.innerHTML =="X") &&
        (four.innerHTML == "O" || four.innerHTML =="X") &&
        (five.innerHTML == "O" || five.innerHTML =="X") &&
        (six.innerHTML == "O" || six.innerHTML =="X") &&
        (seven.innerHTML == "O" || seven.innerHTML =="X") &&
        (eight.innerHTML == "O" || eight.innerHTML =="X") &&
        (nine.innerHTML == "O" || nine.innerHTML == "X")) && ( result.innerHTML == "")) {
        result.style.display = 'inline-block'
        result.innerHTML= `its a draw`
    
    }
}

const startGame= () => {
    if (firstP.value !==  "" && secondP.value !== '') {
        container.style.display = 'flex'
        input.style.display = 'none'
        player1.innerHTML= firstP.value
        player2.innerHTML= secondP.value

        firstP.value = ''
        secondP.value = ''

    }
    else if(firstP.value ==  "" && secondP.value == ''){
        alert('insert player name to play the game')
    }
     if(container.style.display == 'flex'){
         startG.style.display = "none"
    }   
}

const endGame = () => {
    if (container.style.display == 'flex') {
        container.style.display = 'none'
        input.style.display = 'block'
        location.reload()
    }
}

const restartGame= ()=>{
    container.innerHTML = `<div class="divbox"  id="one" onclick="myFunc(event)"></div>
    <div class="divbox" id="two" onclick="myFunc(event)"></div>
    <div class="divbox" id="three" onclick="myFunc(event)"></div>
    <div class="divbox" id="four" onclick="myFunc(event)"></div>
    <div class="divbox" id="five" onclick="myFunc(event)"></div>
    <div class="divbox" id="six" onclick="myFunc(event)"></div>
    <div class="divbox" id="seven" onclick="myFunc(event)"></div>
    <div class="divbox" id="eight" onclick="myFunc(event)"></div>
    <div class="divbox" id="nine" onclick="myFunc(event)"></div>`
    result.style.display = 'none'
    
    if (result.innerHTML ==player2.innerHTML + " won!!") {
        player = 0
    }
    else if (result.innerHTML ==player1.innerHTML + " won!!") {
        player = 1
    }
    else if (result.innerHTML ==`its a draw `) {
        player = 1
    }
    result.innerHTML= ""
}

