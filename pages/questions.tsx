import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import QuestionContentType from '../components/Questions/QuestionContentType';
import QuestionTimeAvailable from '../components/Questions/QuestionTimeAvailable';
import QuestionPlaybackSpeed from '../components/Questions/QuestionPlaybackSpeed';
import QuestionGenre from '../components/Questions/QuestionGenre';
import QuestionYearRange from '../components/Questions/QuestionYearRange';
import QuestionRatingRange from '../components/Questions/QuestionRatingRange';
import QuestionStreamingService from '../components/Questions/QuestionStreamingService';

export default function questions() {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [contentType, setContentType] = useState({ movie: true, tv: false });
  const [timeAvailable, setTimeAvailable] = useState(1 * 60);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [genre, setGenre] = useState({
    // TODO: need to use genre codes
    crime: false,
    comedy: false,
  });
  const [yearRange, setYearRange] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const [ratingRange, setRatingRange] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const [streamingRegion, setStreamingRegion] = useState(null);
  const [streamingService, setStreamingService] = useState(null);

  // TODO: calculate final speed from playback speed and time available

  const pageUp = (): void => {
    const nextPage: number = page - 1;
    if (!(1 <= nextPage && nextPage <= 7)) {
      return;
    }
    setPage(nextPage);
  };

  const pageDown = (): void => {
    const nextPage: number = page + 1;
    if (!(1 <= nextPage && nextPage <= 7)) {
      return;
    }
    setPage(nextPage);
  };

  const updateContentType = (type: 'movie' | 'tv'): void => {
    const updatedContentType = { ...contentType };
    updatedContentType.movie = false;
    updatedContentType.tv = false;
    updatedContentType[type] = true;

    setContentType(updatedContentType);
  };

  const updateTimeAvaliable = (time: number): void => {
    setTimeAvailable(time);
  };

  const updatePlaybackSpeed = (speed: number): void => {
    setPlaybackSpeed(speed);
  };

  const getRecommendations = () => {
    let url = '/recommendations';
    url += `/${contentType.movie ? 'movie' : contentType.tv ? 'tv' : 'error'}`;

    let query = '';
    query += `?time=${(timeAvailable / playbackSpeed).toFixed(0)}`;

    router.push(url + query);
  };

  const questionPage = () => {
    switch (page) {
      case 1:
        return (
          <QuestionContentType
            contentType={contentType}
            updateContentType={updateContentType}
            pageDown={pageDown}
          />
        );
      case 2:
        return (
          <QuestionTimeAvailable
            timeAvailable={timeAvailable}
            updateTimeAvailable={updateTimeAvaliable}
            pageUp={pageUp}
            pageDown={pageDown}
          />
        );
      case 3:
        return (
          <QuestionPlaybackSpeed
            playbackSpeed={playbackSpeed}
            updatePlaybackSpeed={updatePlaybackSpeed}
            timeAvailable={timeAvailable}
            pageUp={pageUp}
            pageDown={pageDown}
            getRecommendations={getRecommendations}
          />
        );
      case 4:
        return <QuestionGenre pageUp={pageUp} pageDown={pageDown} />;
      case 5:
        return <QuestionYearRange pageUp={pageUp} pageDown={pageDown} />;
      case 6:
        return <QuestionRatingRange pageUp={pageUp} pageDown={pageDown} />;
      case 7:
        return <QuestionStreamingService pageUp={pageUp} />;
      default:
        return (
          <div className="flex items-center justify-center mt-16 min-h-container text-xl">
            404
          </div>
        );
    }
  };

  return <Layout>{questionPage()}</Layout>;
}
