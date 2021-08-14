import SelectDropdown from '../SelectDropdown';

interface QuestionRatingRangeProps {
  ratingRangeState: { start: number; end: number };
  updateRatingRange: (type: 'start' | 'end', rating: string) => void;
  pageUp: () => void;
  pageDown: () => void;
  getRecommendations: () => void;
}

export default function QuestionRatingRange({
  ratingRangeState,
  updateRatingRange,
  pageUp,
  pageDown,
  getRecommendations,
}: QuestionRatingRangeProps) {
  const numberDecimalRange = (
    start: number,
    end: number,
    step: number = 1,
    decimalPlaces: number = 0
  ): string[] => {
    let output: string[] = [];
    for (let i = start; i <= end; i += step) {
      output.push(i.toFixed(decimalPlaces));
    }
    return output;
  };

  const ratingStartLimit = 0.0;
  const ratingEndLimit = 10.0;

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
          what is the min and max rating you want?
        </div>

        <div className="flex whitespace-nowrap overflow-x-scroll space-x-4 p-4 md:px-10 max-w-full scrollbar-hide">
          <SelectDropdown
            options={numberDecimalRange(
              ratingStartLimit,
              ratingRangeState.end,
              0.5,
              1
            )}
            selectedOption={ratingRangeState.start.toFixed(1)}
            updateSelectedOption={(option: string) =>
              updateRatingRange('start', option)
            }
          />
          <div className="flex items-center justify-center px-2 text-lg">
            to
          </div>
          <SelectDropdown
            options={numberDecimalRange(
              ratingRangeState.start,
              ratingEndLimit,
              0.5,
              1
            )}
            selectedOption={ratingRangeState.end.toFixed(1)}
            updateSelectedOption={(option: string) =>
              updateRatingRange('end', option)
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
        <div className="pb-2 w-full text-center">6 / 7</div>

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
