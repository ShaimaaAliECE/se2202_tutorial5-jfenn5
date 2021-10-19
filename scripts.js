let nextPlayer = '[X]'; // takes a value of either 'X' or 'O' according to the game turns

document.getElementById("next-lbl").innerHTML = nextPlayer;

createGameBoard()

function createGameBoard()
{
    for (let i = 1; i < 10; i++) {
        document.getElementById("c" + i).appendChild(document.createElement("button")).innerHTML = "[ ]";
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    event.path[1].removeChild(event.path[0]);
    event.path[1].innerHTML = nextPlayer;
    event.path[1].style.textAlign = 'center';

    if(nextPlayer == "[X]") nextPlayer = "[O]";
    else nextPlayer = "[X]";

    document.getElementById("next-lbl").innerHTML = nextPlayer;
    
    if (isGameOver())
    {
        document.getElementById("game-over-lbl").innerHTML = "Game Over";
    }

    // could add winning functionality here
}

function isGameOver()
{
    for (let i = 1; i < 10; i++) {
        if(document.getElementById("c" + i).firstChild.innerHTML == "[ ]" || document.getElementById("c" + i).innerHTML == "[ ]") return false;
    }
    return true;
}
