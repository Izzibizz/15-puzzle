export const findEmptyTile = (board: number[][]) => {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
        if (board[r][c] === 0) return { row: r, col: c };
      }
    }
    return { row: -1, col: -1 };
  };
  
  export const moveRow = (board: number[][], row: number, tileCol: number, emptyCol: number) => {
    const newBoard = board.map((rowArr) => [...rowArr]);
  
    if (tileCol < emptyCol) {
      for (let i = emptyCol; i > tileCol; i--) {
        newBoard[row][i] = newBoard[row][i - 1];
      }
    } else {
      for (let i = emptyCol; i < tileCol; i++) {
        newBoard[row][i] = newBoard[row][i + 1];
      }
    }
  
    newBoard[row][tileCol] = 0;
    return newBoard;
  };
  
  export const moveColumn = (board: number[][], col: number, tileRow: number, emptyRow: number) => {
    const newBoard = board.map((rowArr) => [...rowArr]);
  
    if (tileRow < emptyRow) {
      for (let i = emptyRow; i > tileRow; i--) {
        newBoard[i][col] = newBoard[i - 1][col];
      }
    } else {
      for (let i = emptyRow; i < tileRow; i++) {
        newBoard[i][col] = newBoard[i + 1][col];
      }
    }
  
    newBoard[tileRow][col] = 0;
    return newBoard;
  };
  
  export const isSolved = (board: number[][]) => {
    const flatBoard = board.flat();
    return flatBoard.every((num, index) => (index === flatBoard.length - 1 ? num === 0 : num === index + 1));
  };

 