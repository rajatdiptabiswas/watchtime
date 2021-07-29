import { useState, useEffect } from 'react';
import Counter from '../Counter';

interface QuestionPlaybackSpeedProps {
  playbackSpeed: number;
  updatePlaybackSpeed: (speed: number) => void;
  timeAvailable: number;
  pageUp: () => void;
  pageDown: () => void;
}

export default function QuestionPlaybackSpeed({
  playbackSpeed,
  updatePlaybackSpeed,
  timeAvailable,
  pageUp,
  pageDown,
}: QuestionPlaybackSpeedProps) {
  let currentTime = timeAvailable / playbackSpeed;
  let hours = Math.floor(currentTime / 60);
  let minutes = currentTime % 60;

  useEffect(() => {
    currentTime = timeAvailable / playbackSpeed;
    hours = Math.floor(currentTime / 60);
    minutes = currentTime % 60;
  }, [playbackSpeed]);

  const handlePlaybackSpeedUpdate = (speed: number): void => {
    updatePlaybackSpeed(speed);
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

      <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-10 flex-grow w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-center p-2">
            what playback speed will you use?
          </div>

          <div className="flex p-4">
            <Counter
              name={'times'}
              min={0.5}
              max={3.0}
              step={0.25}
              value={playbackSpeed}
              decimalPlaces={2}
              updateCount={handlePlaybackSpeedUpdate}
            />
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="text-gray-400 font-semibold text-xl">
            total watchtime
          </div>
          <div className="text-xl">
            {hours > 0 && `${hours.toFixed(0)} hrs `}
            {`${minutes.toFixed(0)} mins`}
          </div>
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
