import { useState, useEffect } from "react";
import Tile from "./Tile";
import ShuffleButton from "./ShuffleButton";
import Finish from "./Finish";
import { generateShuffledTiles } from "../utils/generateTiles";
import { moveRow, moveColumn, findEmptyTile, isSolved } from "../utils/helpers";

const rows = 4;
const columns = 4;

const Puzzle: React.FC = () => {
  const [board, setBoard] = useState(generateShuffledTiles(rows, columns));
  const [solved, setSolved] = useState(false);

 
  useEffect(() => {
    if (isSolved(board)) {
        setSolved(true)
    } else {
        setSolved(false)
    }
  }, [board]);

  const moveTile = (row: number, col: number) => {
    const { row: emptyRow, col: emptyCol } = findEmptyTile(board);

    if (row === emptyRow) {
      setBoard((prev) => moveRow(prev, row, col, emptyCol));
    } else if (col === emptyCol) {
      setBoard((prev) => moveColumn(prev, col, row, emptyRow));
    }
  };



  return (
    <div className="flex flex-col items-center m-auto gap-6">
      {solved && <Finish />}
      <div className="grid grid-cols-4 gap-1 p-4 border w-fit bg-white rounded-xl">
        {board.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              value={value}
              correctValue={rowIndex * columns + colIndex + 1}
              onClick={() => moveTile(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <ShuffleButton onShuffle={() => setBoard(generateShuffledTiles(rows, columns))} />
    </div>
  );
};

export default Puzzle;