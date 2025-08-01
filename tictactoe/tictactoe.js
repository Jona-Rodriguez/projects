let playGame = true;
let board = [[],[]];
let gamesPlayer = 0;

const Player1 = {
    name: "",
    symbol:"",
    wins:0,
    losses:0,
    ties:0
}


function gameBoard(){
    const SIZE = 3;
    let board = [SIZE][SIZE];

    for (let i = 0; i < SIZE; i++){
        for (let j = 0; j < SIZE; j++){
            board[i][j] = '*';
        }
        board[i][j] = '*';
    }
    return board;
}

function gameState(arr){
    let winner = '';
    // check if anyone won
    // all the columns need checking then either cross section
    // if no winner end game on a tie.
    if (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]){
        // colum 1 win
        winner = arr[0][0];
    }
    if (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]){
        // colum 2 win
        winner = arr[0][1];
    }
    if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]){
        // colum 3 win
        winner = arr[0][2];
    }
    if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]){
        //check cross code 
        winner = arr[0][0];   
    }
    if (arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2]){
        //check cross code 
        winner = arr[2][0];   
    }
    return winner;
}

do{
    switch(playerChoice){
        case 1: // Play a game
            gamesPlayed++;
            // clear the screen
            board = gameBoard()
            // game logic

            break;
        case 2: // Display game stats
            console.log(`Current game stats are Player 1 wins ${Player1.wins} and player 2 wins ${Player1.losses} and their ties are ${Player1.ties}`)
            break;        
        case 3: // Quit
            playGame = false;
            break;
        default:
            console.log("Invalid, Please choose an option")
            break;
    }
}while(playGame)