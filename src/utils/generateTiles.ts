export const generateShuffledTiles = (rows: number, columns: number): number[][] => {
    const numbers = Array.from({ length: rows * columns }, (_, i) => i);
    numbers.sort(() => Math.random() - 0.5); 
  
    return Array.from({ length: rows }, (_, row) =>
      numbers.slice(row * columns, (row + 1) * columns)
    );
  };