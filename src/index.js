// for (every row we want to make) {
//   create a new row
//   for (every column want to make) {
//     push a new empty tile ' ' onto that new row
//   }
//   push the new row into the list of rows for the board
// }


const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
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

	for (let numberOfBombsPlaced = 0; numberOfBombsPlaced < numberOfBombs; numberOfBombsPlaced++) {
		let randomRowIndex = Math.floor( Math.random() * numberOfRows );//Generate a random row index
		let randomColumnIndex = Math.floor( Math.random() * numberOfColumns );//Generate a random column index
		if (board [randomRowIndex][randomColumnIndex] !== 'B') {//if there are no bombs placed
			board [randomRowIndex][randomColumnIndex] = 'B';//Place the bomb at that row and columns
			numberOfBombsPlaced ++;//increment number of bombs placed
		}
	}
	return board;
}

console.log( generateBombBoard(3, 21, 7) );//calls function, generates bombs and places randomly




//=======Displaying number of bombs adjacent to flipped tile



const getNumberOfNeighbourBombs = (bombBoard, rowIndex, columnIndex) => {
	const neighbourOffSets = [ 
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


	/*
it's finding all the potential neighbours of a tile and then 
checking to see if there's bombs on those neighbours and keeping track of that in numberOfBombs.

neighbourOffSets stores all the potential neighbours of a tile (8 possible), but some of those 
neighbours might not be valid because the tile might be on an edge for example.

So that forEach needs to check to see if the neighbour is valid before seeing if there's a bomb 
stored on that neighbour.



	*/



	neighbourOffSets.forEach(offSet => {//runs through each nested array in neighbourOffset ie [-1, -1]
	    const neighbourRowIndex = rowIndex + offSet[0];//
	    const neighbourColumnIndex = columnIndex + offset[1];//Gets index position of column and off set position
	if (//checking for legal and valid tiles
	neighbourRowIndex >= 0 &&
	neighbourRowIndex <= numberOfRows &&
	neighbourColumnIndex >= 0 &&
	neighbourColumnIndex <= numberOfColumns
	)
	{
	if (bombBoard[neighbourRowIndex][0]) == 'B' {
	numberOfBombs++;
	}
	}
	return numberOfBombs;
	});





	neighbourOffSets.forEach(offSet => {//runs through each nested array in neighbourOffset ie [-1, -1]
		const neighbourRowIndex = rowIndex + offSet[0];//
		const neighbourColumnIndex = columnIndex + offSet[1];//Gets index position of column and off set position
		if (//checking for legal and valid tiles
			neighbourRowIndex >= 0 && 
			neighbourRowIndex < numberOfRows && 
			neighbourColumnIndex >= 0 && 
			neighbourColumnIndex < numberOfColumns
		) 
		{
		if (bombBoard[neighbourRowIndex][neighbourColumnIndex]) == 'B' {
			numberOfBombs++;
		}
		}
		return numberOfBombs;
	});

//Check if neighbouring tiles are off grid or don't exist

}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {

}

/*


Then for each offset, we are adding the rowIndex and the offset[0], which is the first value in each offset 
(for example the first offset would be -1) 
Then we are storing it the sum in the neighbourRowIndex value

So the first one would evaluate to rowIndex + (-1)  or just rowIndex - 1, which means one cell to the left of rowIndex*/


//==========printing game board with randomly place bombs

/*

console.log(board[0].join(' | '));
console.log(board[1].join(' | '));
console.log(board[2].join(' | '));

This is essentially whats happening in the function below

*/

const printBoard = (board) => {//board is new param
	console.log( board.map(row => row.join(' | ') ).join('\n') );//map over row array and inject | to each row
}// slash n is a line break

//printBoard is joining each space with a pipe, 
//then joining each row to the other rows depending on the amount of columns

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);



console.log('Player Board: ');
console.log( printBoard(playerBoard) );
console.log('Bomb Board: ');
console.log( printBoard(bombBoard) );









































//====Nested for loops====

//the second for loop iterates through the individual elements 
//in the nested arrays and the outer loops through each array as a whole element

/*

1.

Instead of creating one singular game board, we're going to create two: one board for 
the player's guesses and another board that will hold the actual bomb locations. 
Later, you'll write code so that they can communicate with each other.

*/





// 	const printBoard = (board) => {		//these are placed inside each item
// 	console.log('Current board: ');
// 	console.log(board[0].join(' | ') );
// 	console.log(board[1].join(' | ') );
// 	console.log(board[2].join(' | ') );

// };


// let board = [ //this is the blank board

// 	[' ', ' ', ' '], 
// 	[' ', ' ', ' '], 
// 	[' ', ' ', ' '] 

// ];

// console.log( printBoard (board) );


// // console.log(board);	//dont need to see empty array with .join() now

// board[0][1] = '1'; 
// board[2][2] = 'B';

// console.log( printBoard(board) );

// Above was first two sections of project - - From here up is starting fresh 






