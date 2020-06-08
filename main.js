class Game{
    constructor(){
        this.board = document.querySelector('#board');
        this.symbol = document.querySelector('#player');
        this.clicked;
        this.winningPositions = [
            ['1', '2', '3'],
            ['1', '5', '9'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['7', '5', '3'],
            ['3', '6', '9']
        ];
        this.xMove = [];
        this.oMove = [];
        this.setBoard();
    }

    setBoard(){
        for (let i = 1; i <= 9 ; i++){
            let square = document.createElement('div');
            square.classList.add('square');
            square.dataset.number = i;
            this.board.appendChild(square);
        }
        this.symbol.innerHTML = 'X'
    }

    switchPlayer(currentPlayer, nextPlayer){
        this.clicked.innerHTML = currentPlayer;
        this.clicked.classList.replace('square', 'square'+currentPlayer);
        this.symbol.innerHTML = nextPlayer;
    }

    start(){
        this.board.addEventListener('click', (event) => {
            this.clicked = event.target;
            console.log(this);
            if(this.clicked.classList.contains('square')){
                if(this.symbol.innerHTML === "X"){
                    this.xMove.push(this.clicked.dataset.number);
                    this.checkWin(this.xMove);
                    this.switchPlayer("X", "O" );
                    return
                }
                if(this.symbol.innerHTML === "O"){
                    this.oMove.push(this.clicked.dataset.number);
                    this.checkWin(this.oMove);
                    this.switchPlayer("O", "X");
                    return
                }
            }
        })
    }

    checkWin(playerMove){
        let checkmove = this.winningPositions.filter((index) =>
           index.filter((numberIndex) =>
               playerMove.includes(numberIndex)
            ).length === 3
        )
        if(checkmove.length === 1){
            alert('Player ' + this.symbol.innerHTML +  ' win !')
            location.reload();
            return
        }
        let allSquares = document.querySelectorAll('.square');
        if(allSquares.length === 0){
            alert('draw !')
            location.reload();
            return
        }        
    }
}
let game = new Game();
game.start();