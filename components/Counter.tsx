interface CounterProps {
  min?: number;
  max?: number;
  step?: number;
  name?: string;
  value: number;
  decimalPlaces?: number;
  updateCount: (updatedCount: number) => void;
}

export default function Counter({
  min,
  max,
  step,
  name,
  value,
  decimalPlaces,
  updateCount,
}: CounterProps) {
  const minValue = min || 0;
  const maxValue = max || 10;
  const stepValue = step || 1;
  const label = name || 'counter';

  const increment = () => {
    let nextValue = value + stepValue;
    nextValue = Math.min(nextValue, maxValue);
    updateCount(nextValue);
  };

  const decrement = () => {
    let nextValue = value - stepValue;
    nextValue = Math.max(nextValue, minValue);
    updateCount(nextValue);
  };

  return (
    <div className="space-y-1">
      <div className="">
        <div className="flex space-x-2">
          <div onClick={decrement} className="w-6">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="border-gray-100 border-2 w-20 py-2 text-center text-xl rounded">
            {decimalPlaces ? value.toFixed(decimalPlaces) : value}
          </div>
          <div onClick={increment} className="w-6">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center">{label}</div>
    </div>
  );
}
