class Board{
	constructor(numberOfRows, numberOfColumns, numberOfBombs) { //constructor params represent, size of board and number of bombs
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = numberOfRows * numberOfColumns;//instance represents size of board and if game is over yet at end of each users turn
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);//static function, call using Board.
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);//static function, call using Board.
	}

	//playerBoard getter method
	get playerBoard() {
		return this._playerBoard;
	}

//got rid of const, inside class flipTile now a method
	flipTile (rowIndex, columnIndex) {//playerBoard and bombBoard now called in instance, rowIndex/Column are location we are flipping over
		if (playerBoard[rowIndex][columnIndex] !== ' ') {//if current position of the tile has already been flipped
			return 1;//alert('This tile has already been flipped');//alert pop up - will end function OR --- return; ----
		} else if(bombBoard[rowIndex][columnIndex] === 'B') {//if the flipped tile is a bomb
			this._playerBoard[rowIndex][columnIndex] = 'B';//Place bomb to the player board
		} else {
			this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighbourBombs(rowIndex, columnIndex);//setting guessed tile to number of surrounding bombs
			//if a cell is not a bomb, it should place the number of bombs on playerBoard
		} 
		return this._numberOfTiles--;
	}


	getNumberOfNeighbourBombs (rowIndex, columnIndex) {
		const neighbourOffSets = [ //8 possible directions you could use
			[-1, -1], //offset by row then column relative to BOMB
			[-1, 0], 
			[-1, 1], 
			[0, -1], 
			[0, 1], 
			[1, -1], 
			[1, 0], 
			[1, 1], 
		];

		const numberOfRows = bombBoard.length//retrieve dimensions of the board - in case BOMB is on edge of board
		const numberOfColumns = bombBoard[0].length;//same as above - find number of columns - [0] takes you outside of the initial array
		let numberOfBombs = 0;//stores number of bombs ADJACENT to flipped tile


		//Below provides position of the neighbouring squares


		//nehgbouroffSets function is counting the number of bombs adjacent to a given cell

		neighbourOffSets.forEach(offSet => {//runs through each nested array in neighbourOffset ie [-1, -1] -  computes the col and row indices for the neighbor you're trying to check
			const neighbourRowIndex = rowIndex + offSet[0];//store the row position
			const neighbourColumnIndex = columnIndex + offSet[1];//store index position
			
			if (//checks if the tiles/indices are within the allowable BOUNDS of the board
				neighbourRowIndex >= 0 && 
				neighbourRowIndex < numberOfRows && 
				neighbourColumnIndex >= 0 && 
				neighbourColumnIndex < numberOfColumns
			) 
			{
			if (bombBoard[neighbourRowIndex][neighbourColumnIndex] === 'B' ) {//Checks if neighbour of CURRENT cell has a bomb
				this._numberOfBombs++;//if YES, add 1 to bombCount
			}
			}
			return this._numberOfBombs;//otherwise do nothing
		});
	//Check if neighbouring tiles are off grid or don't exist
	}

	//Way of letting user know they WON and when all non bomb tiles are flipped
	hasSafeTiles() {
		return this._numberOfTiles !== this._numberOfBombs;//returns TRUE cuz statement is TRUTHY, otherwise false
	}

	static generatePlayerBoard (numberOfRows,numberOfColumns) {//static class method
		let board = [];// new empty array 
		for (let i = 0; i < numberOfRows; i++) {//each time this loop runs - new row array created
			let row = [];//new empty array 
			for (let j = 0; j < numberOfColumns; j++) {//creates all the columns for previous row created
				row.push(' ');//each space represents a column - push as many spaces to the row as number of columns that are passed
			}
			board.push(row);//pushing row array to board array once column loop is complete
		}
		return board;
	}
	console.log( generatePlayerBoard(3, 3) );//calling this will display the size of board desired

}






// for (every row we want to make) {
//   create a new row
//   for (every column want to make) {
//     push a new empty tile ' ' onto that new row
//   }
//   push the new row into the list of rows for the board
// }




//=========Same code as above, dynamically generates bomb board===


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (let i = 0; i < numberOfRows; i++) {
		let row = [];
		for (let j = 0; j < numberOfColumns; j++) {
			row.push(null);//replaced with NULL
		}
		board.push(row);
	}

	//potential to overlap existing bombs can be fixes using control flow

	for (let numberOfBombsPlaced = 0; 
			numberOfBombsPlaced < numberOfBombs; 
			numberOfBombsPlaced++) {

			let randomRowIndex = Math.floor( Math.random() * numberOfRows );//Generate a random row index
			let randomColumnIndex = Math.floor( Math.random() * numberOfColumns );//Generate a random column index
			if (board [randomRowIndex][randomColumnIndex] !== 'B') {//if there are no bombs placed
				board [randomRowIndex][randomColumnIndex] = 'B';//Place the bomb at that row and columns
				numberOfBombsPlaced ++;//increment number of bombs placed by 1
			}
		}
	return board;
}

console.log(generateBombBoard (3, 21, 7) );//calls function, generates bombs and places randomly




//=======Displaying number of bombs adjacent to flipped tile






/*

Then for each offset, we are adding the rowIndex and the offset[0], which is the first value in each offset 
(for example the first offset would be -1) 
Then we are storing it the sum in the neighbourRowIndex value

So the first one would evaluate to rowIndex + (-1)  or just rowIndex - 1, which means one cell to the left of rowIndex*/




//==========printing game board with randomly placed bombs


print(board) {//board is new param
	console.log( board.map(row => row.join(' | ') ).join('\n') );//map over row array and inject | to each row
}// slash n is a line break

//printBoard is joining each space with a pipe, 
//then joining each row to the other rows depending on the amount of columns

this._playerBoard = generatePlayerBoard(3, 4);
this._bombBoard = generateBombBoard(3, 4, 5);


const playGame = () => {
	console.log('Player Board: ');
	console.log( printBoard(playerBoard) );
	console.log('Bomb Board: ');
	console.log( printBoard(bombBoard) );
} 

playGame();


flipTile(playerBoard, bombBoard, 2, 1);//4 params cuz fliptile takes 4 above

console.log('Updated player board: ');

printBoard(playerBoard);

//=======Why are we incorporating class structure to this project?

/*
You had to separately create a player board and a game board manually.

You had to print the board(s) every single time you wanted to see an update to the board(s).

Finally, you also had to specify the player board and bomb board every time you wanted to flip a tile.

Adding organized class structure will allow us to remove a lot of these manual, 
very cumbersome gaming interactions. Most importantly, though, it will make your 
code easier to read and build upon in the future.
*/

