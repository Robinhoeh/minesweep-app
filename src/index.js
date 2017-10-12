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

console.log (generatePlayerBoard(3, 3) );//calling this will display the size of board desired









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






