interface ToggleButtonProps {
  name?: string;
  isSelected: boolean;
  onButtonClick: () => void;
}

export default function ToggleButton({
  name,
  isSelected,
  onButtonClick,
}: ToggleButtonProps) {
  return (
    <button
      className={
        'btn-toggle ' +
        (isSelected ? 'btn-toggle-selected' : 'btn-toggle-unselected')
      }
      onClick={onButtonClick}
    >
      {name || 'button'}
    </button>
  );
}
