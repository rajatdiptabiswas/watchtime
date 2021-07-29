interface QuestionPlaybackSpeedProps {
  pageUp: () => void;
  pageDown: () => void;
}

export default function QuestionPlaybackSpeed({
  pageUp,
  pageDown,
}: QuestionPlaybackSpeedProps) {
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

      <div className="flex flex-col items-center justify-center space-y-10 flex-grow w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-center p-2">
            what playback speed will you use?
          </div>

          <div className="flex whitespace-nowrap overflow-x-scroll space-x-4 sm:space-x-6 p-4 md:px-10 max-w-full scrollbar-hide">
            <div className="border-gray-100 border-2 rounded px-4 py-2">
              times
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="text-gray-400 font-semibold text-xl">
            total watchtime
          </div>
          <div className="text-xl">3 hrs</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-4 space-y-4">
        <button className="btn-recommendation">get recommendations</button>
        <div className="text-gray-400 text-center text-sm">
          or narrow the search down further...
        </div>
      </div>

      <div className="flex flex-col items-end justify-center pb-2">
        <div className="pb-2 w-full text-center">3/7</div>

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
