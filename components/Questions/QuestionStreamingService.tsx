import Link from 'next/link';

export default function QuestionGenre() {
  return (
    <div className="flex flex-col items-center justify-center mt-16 min-h-container">
      <div className="flex flex-col items-end justify-center pt-2">
        <Link href="/questions/6">
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
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full space-y-4">
        {/* TODO: add the rest of streaming services */}
        {/* TODO: add logos for streaming services */}
        <div className="text-3xl font-bold text-center p-2">
          which streaming services do you use?
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="text-gray-400">region</div>
          <div className="border-gray-100 border-2 rounded px-10 py-1">usa</div>
        </div>

        <div className="flex sm:text-lg font-semibold whitespace-nowrap overflow-x-scroll space-x-4 sm:space-x-6 p-4 md:px-10 max-w-full scrollbar-hide">
          <div className="bg-red-800 rounded shadow-md px-16 py-8 cursor-pointer">
            Netflix
          </div>

          <div className="bg-blue-400 rounded shadow-md px-16 py-8 cursor-pointer">
            Prime Video
          </div>

          <div className="bg-gray-800 rounded shadow-md px-16 py-8 cursor-pointer">
            Disney+
          </div>

          <div className="bg-black rounded shadow-md px-16 py-8 cursor-pointer">
            Apple TV+
          </div>

          <div className="bg-green-500 rounded shadow-md px-16 py-8 cursor-pointer">
            Hulu
          </div>

          <div className="bg-gray-800 rounded shadow-md px-16 py-8 cursor-pointer">
            Paramount+
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-4 space-y-4">
        <button className="bg-gray-800 rounded shadow-md text-center px-4 py-2 w-max cursor-pointer">
          get recommendations
        </button>
        <div className="text-gray-400 text-center text-sm">
          or narrow the search down further...
        </div>
      </div>

      <div className="flex flex-col items-end justify-center pb-2">
        <div className="pb-2 w-full text-center">7/7</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 invisible"
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
  );
}