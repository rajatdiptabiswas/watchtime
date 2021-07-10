import Link from 'next/link';

export default function QuestionContentType() {
  return (
    <div className="flex flex-col items-center justify-center mt-16 min-h-container">
      <div className="invisible flex flex-col items-end justify-center pt-2">
        <Link href="/questions/1">
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

      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <div className="text-3xl font-bold text-center p-2">
          what do you want to watch?
        </div>

        <div className="flex sm:text-lg whitespace-nowrap overflow-x-scroll space-x-4 sm:space-x-6 p-4 md:px-10 max-w-full scrollbar-hide">
          <div className="bg-gray-800 rounded shadow-md px-4 py-2 cursor-pointer">
            movies
          </div>

          <div className="bg-gray-800 rounded shadow-md px-4 py-2 cursor-pointer">
            tv
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center pb-2">
        <div className="pb-2 w-full text-center">1/7</div>

        <Link href="/questions/2">
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
        </Link>
      </div>
    </div>
  );
}
