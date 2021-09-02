import SelectDropdown from './../SelectDropdown';
import StreamingServiceToggleButton from '../StreamingServiceToggleButton';
import RegionStreamingServices from './../../data/RegionStreamingServices';
import StreamingServiceDetails from './../../data/StreamingServiceDetails';

interface QuestionStreamingServiceProps {
  contentType: 'movie' | 'tv';
  streamingRegionState: string;
  updateStreamingRegion: (region: string) => void;
  streamingServicesState: { [service: string]: boolean };
  updateStreamingServices: (service: string) => void;
  pageUp: () => void;
  getRecommendations: () => void;
}

export default function QuestionStreamingService({
  contentType,
  streamingRegionState,
  updateStreamingRegion,
  streamingServicesState,
  updateStreamingServices,
  pageUp,
  getRecommendations,
}: QuestionStreamingServiceProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-16 min-h-container">
      <div className="flex flex-col items-end justify-center pt-2">
        <button className="btn-page-nav" onClick={pageUp}>
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
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full space-y-4">
        <div className="title">which streaming services do you use?</div>

        <div className="flex items-center justify-center space-x-6">
          <div className="text-gray-400 text-lg">region</div>
          <SelectDropdown
            options={Object.keys(RegionStreamingServices[contentType]).sort()}
            selectedOption={streamingRegionState}
            updateSelectedOption={(region: string) =>
              updateStreamingRegion(region)
            }
          />
        </div>

        <div className="flex sm:text-lg font-semibold whitespace-nowrap overflow-x-scroll space-x-4 sm:space-x-6 p-4 md:px-10 max-w-full scrollbar-hide">
          {RegionStreamingServices[contentType][
            streamingRegionState
          ].streamingService.map((service, index) => (
            <StreamingServiceToggleButton
              key={index}
              service={service}
              streamingServicesState={streamingServicesState}
              updateStreamingServices={updateStreamingServices}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-4 space-y-4">
        <button className="btn-recommendation" onClick={getRecommendations}>
          get recommendations
        </button>
        <div className="text-gray-400 text-center text-sm invisible">
          or narrow the search down further...
        </div>
      </div>

      <div className="flex flex-col items-end justify-center pb-2">
        <div className="pb-2 w-full text-center">7 / 7</div>

        <button className="btn-page-nav invisible">
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
        </button>
      </div>
    </div>
  );
}
