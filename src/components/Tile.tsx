interface TileProps {
    value: number;
    correctValue: number;
    onClick: () => void;
  }
  
  const Tile: React.FC<TileProps> = ({ value, correctValue, onClick }) => {
    return (
      <button
        className={`w-20 h-20 flex justify-center items-center text-2xl font-bold border 
          ${value === 0 ? "bg-linear-45 from-stone-300 to-stone-400 border-white" : "bg-linear-45 from-cyan-500 to-cyan-700 text-white cursor-pointer hover:to-cyan-900"} 
          ${value === correctValue ? "bg-linear-45 from-green-500 to-green-700 hover:to-green-900" : ""}`}
        onClick={onClick}
        disabled={value === 0}
      >
        {value !== 0 ? value : ""}
      </button>
    );
  };
  
  export default Tile;
