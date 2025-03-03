interface ShuffleButtonProps {
  onShuffle: () => void;
}

const ShuffleButton: React.FC<ShuffleButtonProps> = ({ onShuffle }) => {
  return (
    <button
      onClick={onShuffle}
      className="bg-stone-400 text-white px-4 py-2 rounded hover:bg-stone-200 hover:text-stone-900 hover:scale-110 cursor-pointer transition">
      Shuffle
    </button>
  );
};

export default ShuffleButton;