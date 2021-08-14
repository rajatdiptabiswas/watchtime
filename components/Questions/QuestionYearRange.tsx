import SelectDropdown from '../SelectDropdown';

interface QuestionYearRangeProps {
  yearRangeState: { start: number; end: number };
  updateYearRange: (type: 'start' | 'end', year: number) => void;
  pageUp: () => void;
  pageDown: () => void;
  getRecommendations: () => void;
}

export default function QuestionYearRange({
  yearRangeState,
  updateYearRange,
  pageUp,
  pageDown,
  getRecommendations,
}: QuestionYearRangeProps) {
  const numberRange = (
    start: number,
    end: number,
    step: number = 1
  ): number[] => {
    let output: number[] = [];
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
    return output;
  };

  const yearStartLimit = 1900;
  const yearEndLimit = new Date().getFullYear();

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
          which years do you want to watch from?
        </div>

        <div className="flex whitespace-nowrap overflow-x-scroll space-x-4 p-4 md:px-10 max-w-full scrollbar-hide">
          <SelectDropdown
            options={numberRange(yearStartLimit, yearRangeState.end)}
            selectedOption={yearRangeState.start}
            updateSelectedOption={(option: number) =>
              updateYearRange('start', option)
            }
          />
          <div className="flex items-center justify-center px-2 text-lg">
            to
          </div>
          <SelectDropdown
            options={numberRange(yearRangeState.start, yearEndLimit)}
            selectedOption={yearRangeState.end}
            updateSelectedOption={(option: number) =>
              updateYearRange('end', option)
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-4 space-y-4">
        <button className="btn-recommendation" onClick={getRecommendations}>
          get recommendations
        </button>
        <div className="text-gray-400 text-center text-sm">
          or narrow the search down further...
        </div>
      </div>

      <div className="flex flex-col items-end justify-center pb-2">
        <div className="pb-2 w-full text-center">5 / 7</div>

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
