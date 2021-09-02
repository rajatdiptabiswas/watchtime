import Image from 'next/image';

interface StreamingServiceToggleButtonProps {
  logoPath: string;
  color: string;
  isSelected: boolean;
  onButtonClick: () => void;
}

export default function StreamingServiceToggleButton({
  logoPath,
  color,
  isSelected,
  onButtonClick,
}: StreamingServiceToggleButtonProps) {
  return (
    <button
      style={{
        backgroundColor: isSelected ? color : undefined,
      }}
      className="bg-gray-800 rounded shadow-md px-8 md:px-12 py-6 md:py-8"
      onClick={onButtonClick}
    >
      <div className="relative h-10 md:h-12 w-40 md:w-48">
        <Image src={logoPath} alt="logo" sizes="100%" layout="fill" />
      </div>
    </button>
  );
}
