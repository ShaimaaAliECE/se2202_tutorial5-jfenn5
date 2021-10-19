let nextPlayer = "X"; // takes a value of either 'X' or 'O' according to the game turns
let gameboard;

document.getElementById("next-lbl").innerHTML = nextPlayer;

createGameBoard()

function createGameBoard() {
    for (let i = 1; i < 10; i++) {
        document.getElementById("c" + i).appendChild(document.createElement("button")).innerHTML = " ";
        document.getElementById("c" + i).firstChild.style.width = "2em";
        document.getElementById("c" + i).firstChild.style.height = "2em";
        document.getElementById("c" + i).style.padding = "0px 0px 0px 0px";
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => { takeCell(event) });
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event) {
    // redoing the inplementation here with a js array as the main arbiter
    // event.path[0].disabled = "disabled";
    // event.path[1].innerHTML = nextPlayer;
    // event.path[1].style.textAlign = 'center';

    // document.getElementById("next-lbl").innerHTML = nextPlayer;

    // if (isGameOver() && !isGameWon())
    // {
    //     document.getElementById("game-over-lbl").innerHTML = "Game Over";
    // }

    // if(isGameWon(event)) {
    //     document.getElementById("game-over-lbl").innerHTML = nextPlayer + " won!";
    // }

    let gameboard = convertGameboard("gameboard");
    
    event.path[0].disabled = "disabled";
    event.path[0].innerHTML = nextPlayer;

    let indexes = getIndexOfChange(gameboard, convertGameboard("gameboard"));

    if(isGameWon() != "") {
        document.getElementById("game-over-lbl").innerHTML = nextPlayer + " won!";
        endGame();
    } else if(isGameOver()) {
        document.getElementById("game-over-lbl").innerHTML = "Game Over";
    }

    if (nextPlayer == "X") nextPlayer = "O";
    else nextPlayer = "X";


}

function isGameOver(gameboard) {
    for(let j = 0; i < gameboard.length; j++) {
        if(gameboard[j].contains(" ")) return false;
    }
    return true;
}

function isGameWon(gameboard) {

}

function endGame() {

}

function convertGameboard(table_id) {
    myData = document.getElementById(table_id)

    gameboard = []
    for (var i = 0; i < myData.rows.length; i++) {
        element = myData.rows[i].children
        temp = []
        for (var j = 0; j < element.length; j++) {
            temp.push(element[j].firstChild.innerText);
        }
        gameboard.push(temp);

    }
    return gameboard;
}

function getIndexOfChange(preArray, postArray) {
    for (let i = 0; i < preArray.length; i++) {
        for (let j = 0; j < preArray[i].length; j++) {
            if (preArray[i][j] != postArray[i][j]) {
                return [i, j];
            }
        }
    }
}
