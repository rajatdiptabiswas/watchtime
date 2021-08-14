import ToggleButton from '../ToggleButton';

interface QuestionContentTypeProps {
  contentType: { movie: boolean; tv: boolean };
  updateContentType: (type: 'movie' | 'tv') => void;
  pageDown: () => void;
}

export default function QuestionContentType({
  contentType,
  updateContentType,
  pageDown,
}: QuestionContentTypeProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-16 min-h-container">
      <div className="invisible flex flex-col items-end justify-center pt-2">
        <div>
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
          what do you want to watch?
        </div>

        <div className="flex sm:text-lg whitespace-nowrap overflow-x-scroll space-x-4 sm:space-x-6 p-4 md:px-10 max-w-full scrollbar-hide">
          <ToggleButton
            name={'movies'}
            isSelected={contentType.movie}
            onButtonClick={() => updateContentType('movie')}
          />

          <ToggleButton
            name={'tv'}
            isSelected={contentType.tv}
            onButtonClick={() => updateContentType('tv')}
          />
        </div>
      </div>

      <div className="flex flex-col items-end justify-center pb-2">
        <div className="pb-2 w-full text-center">1 / 7</div>

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
