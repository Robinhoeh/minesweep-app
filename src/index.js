const printBoard= (board) => {		//these are placed inside each item
	console.log('Current board: ');
	console.log(board[0].join(' | ') );
	console.log(board[1].join(' | ') );
	console.log(board[2].join(' | ') );

};


let board = [ //this is the blank board

	[' ', ' ', ' '], 
	[' ', ' ', ' '], 
	[' ', ' ', ' '] 

];

console.log( printBoard (board) );


// console.log(board);	//dont need to see empty array with .join() now

board[0][1] = '1'; 
board[2][2] = 'B';

console.log( printBoard(board) );




