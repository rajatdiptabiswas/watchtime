import Counter from '../Counter';

interface QuestionTimeAvailableProps {
  timeAvailable: number;
  updateTimeAvailable: (time: number) => void;
  pageUp: () => void;
  pageDown: () => void;
}

export default function QuestionTimeAvailable({
  timeAvailable,
  updateTimeAvailable,
  pageUp,
  pageDown,
}: QuestionTimeAvailableProps) {
  let hours = Math.floor(timeAvailable / 60);
  let minutes = timeAvailable % 60;

  const updateHours = (updatedHours: number): void => {
    hours = updatedHours;
    updateTimeAvailable(60 * hours + minutes);
  };

  const updateMinutes = (updatedMinutes: number): void => {
    minutes = updatedMinutes;
    updateTimeAvailable(60 * hours + minutes);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16 min-h-container">
      <div className="flex flex-col items-end justify-center pt-2">
        <div onClick={pageUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <div className="text-3xl font-bold text-center p-2">
          how long do you have?
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 p-4 md:px-10 justify-center align-center">
          <Counter
            name={'hrs'}
            min={0}
            max={10}
            step={1}
            value={hours}
            updateCount={updateHours}
          />
          <Counter
            name={'mins'}
            min={0}
            max={45}
            step={15}
            value={minutes}
            updateCount={updateMinutes}
          />
        </div>
      </div>

      <div className="flex flex-col items-end justify-center pb-2">
        <div className="pb-2 w-full text-center">2/7</div>

        <div onClick={pageDown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
