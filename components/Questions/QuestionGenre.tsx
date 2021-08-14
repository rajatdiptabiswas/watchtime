import GenreList from '../../data/GenreCodes';
import ToggleButton from '../ToggleButton';

interface QuestionGenreProps {
  contentType: 'movie' | 'tv';
  genresState: { [genre: string]: boolean };
  updateGenres: (genre: string) => void;
  pageUp: () => void;
  pageDown: () => void;
  getRecommendations: () => void;
}

export default function QuestionGenre({
  contentType,
  genresState,
  updateGenres,
  pageUp,
  pageDown,
  getRecommendations,
}: QuestionGenreProps) {
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
        {/* TODO: add the rest of the genres */}
        <div className="text-3xl font-bold text-center p-2">
          what are you in the mood for?
        </div>

        <div className="flex sm:text-lg whitespace-nowrap overflow-x-scroll space-x-4 sm:space-x-6 p-4 md:px-10 max-w-full scrollbar-hide">
          {Object.keys(GenreList[contentType]).map((genre, index) => (
            <ToggleButton
              key={index}
              name={genre}
              isSelected={genresState[genre]}
              onButtonClick={() => updateGenres(genre)}
            />
          ))}
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
        <div className="pb-2 w-full text-center">4 / 7</div>

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
