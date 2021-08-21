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
import GenreCodes from '../data/GenreCodes';
import StreamingServiceDetails from '../data/StreamingServiceDetails';
import RegionStreamingServices from '../data/RegionStreamingServices';

export default function questions() {
  const router = useRouter();

  const getInitialGenreState = (
    type: 'movie' | 'tv'
  ): {
    [genre: string]: boolean;
  } => {
    const genreCodes: { [genre: string]: number } = GenreCodes[type];
    let genresState: {
      [genre: string]: boolean;
    } = {};
    for (const genre of Object.keys(genreCodes)) {
      genresState[genre] = false;
    }
    return genresState;
  };

  const getInitialStreamingServicesState = (): {
    [service: string]: boolean;
  } => {
    let streamingServicesState: {
      [service: string]: boolean;
    } = {};
    for (const service of Object.keys(StreamingServiceDetails)) {
      streamingServicesState[service] = false;
    }
    return streamingServicesState;
  };

  // states
  const [page, setPage] = useState(1);
  const [contentType, setContentType] = useState({ movie: true, tv: false });
  const [timeAvailable, setTimeAvailable] = useState(1 * 60);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [genres, setGenres] = useState(
    getInitialGenreState(contentType.movie ? 'movie' : 'tv')
  );
  const [yearRange, setYearRange] = useState({
    start: 1900,
    end: new Date().getFullYear(),
  });
  const [ratingRange, setRatingRange] = useState({
    start: 0.0,
    end: 10.0,
  });
  const [streamingRegion, setStreamingRegion] = useState('United States');
  const [streamingServices, setStreamingServices] = useState(
    getInitialStreamingServicesState()
  );

  // page control
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

  // content type
  const updateContentType = (type: 'movie' | 'tv'): void => {
    const updatedContentType = { ...contentType };
    updatedContentType.movie = false;
    updatedContentType.tv = false;
    updatedContentType[type] = true;

    setContentType(updatedContentType);
    setGenres(getInitialGenreState(type));
  };

  // playback speed
  const updateTimeAvaliable = (time: number): void => {
    setTimeAvailable(time);
  };

  const updatePlaybackSpeed = (speed: number): void => {
    setPlaybackSpeed(speed);
  };

  // genres
  const updateGenres = (genre: string): void => {
    const updatedGenres: {
      [genre: string]: boolean;
    } = {
      ...genres,
    };
    updatedGenres[genre] = !updatedGenres[genre];

    setGenres(updatedGenres);
  };

  // year range
  const updateYearRange = (type: 'start' | 'end', year: number): void => {
    const updatedYearRange = { ...yearRange };
    updatedYearRange[type] = +year;

    if (updatedYearRange.start > updatedYearRange.end) {
      return;
    }

    setYearRange(updatedYearRange);
  };

  // rating range
  const updateRatingRange = (type: 'start' | 'end', rating: string): void => {
    const updatedRatingRange = { ...ratingRange };
    updatedRatingRange[type] = +rating;

    if (updatedRatingRange.start > updatedRatingRange.end) {
      return;
    }

    setRatingRange(updatedRatingRange);
  };

  // streaming services
  const updateStreamingRegion = (region: string): void => {
    setStreamingRegion(region);
    setStreamingServices(getInitialStreamingServicesState());
  };

  const updateStreamingServices = (service: string): void => {
    const updateStreamingServices: {
      [service: string]: boolean;
    } = {
      ...streamingServices,
    };
    updateStreamingServices[service] = !updateStreamingServices[service];

    setStreamingServices(updateStreamingServices);
  };

  const getRecommendations = () => {
    let url = '/recommendations';
    url += `/${contentType.movie ? 'movie' : 'tv'}`;

    let query = '';

    // playback speed
    query += `?time=${(timeAvailable * playbackSpeed).toFixed(0)}`;

    // genres
    let genreCodes = new Set<number>();
    for (const [genre, isGenreSelected] of Object.entries(genres)) {
      if (isGenreSelected) {
        genreCodes.add(GenreCodes[contentType.movie ? 'movie' : 'tv'][genre]);
      }
    }
    query +=
      genreCodes.size > 0 ? `&genres=${Array.from(genreCodes).join('|')}` : ``;

    // year range
    if (
      yearRange.start !== 1900 ||
      yearRange.end !== new Date().getFullYear()
    ) {
      query += `&yearStart=${yearRange.start}`;
      query += `&yearEnd=${yearRange.end}`;
    }

    // rating range
    if (ratingRange.start !== 0.0 || ratingRange.end !== 10.0) {
      query += `&ratingStart=${ratingRange.start}`;
      query += `&ratingEnd=${ratingRange.end}`;
    }

    // streaming services
    let streamingServiceCodes: number[] = [];
    for (const [service, isServiceSelected] of Object.entries(
      streamingServices
    )) {
      if (isServiceSelected) {
        streamingServiceCodes = streamingServiceCodes.concat(
          StreamingServiceDetails[service].id
        );
      }
    }

    if (
      streamingRegion !== 'United States' ||
      streamingServiceCodes.length > 0
    ) {
      query += `&streamingRegion=${
        RegionStreamingServices[contentType.movie ? 'movie' : 'tv'][
          streamingRegion
        ].regionCode
      }`;
      query += `&streamingServices=${streamingServiceCodes.join('|')}`;
    }

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
        return (
          <QuestionGenre
            contentType={contentType.movie ? 'movie' : 'tv'}
            genresState={genres}
            updateGenres={updateGenres}
            pageUp={pageUp}
            pageDown={pageDown}
            getRecommendations={getRecommendations}
          />
        );
      case 5:
        return (
          <QuestionYearRange
            yearRangeState={yearRange}
            updateYearRange={updateYearRange}
            pageUp={pageUp}
            pageDown={pageDown}
            getRecommendations={getRecommendations}
          />
        );
      case 6:
        return (
          <QuestionRatingRange
            ratingRangeState={ratingRange}
            updateRatingRange={updateRatingRange}
            pageUp={pageUp}
            pageDown={pageDown}
            getRecommendations={getRecommendations}
          />
        );
      case 7:
        return (
          <QuestionStreamingService
            contentType={contentType.movie ? 'movie' : 'tv'}
            streamingRegionState={streamingRegion}
            updateStreamingRegion={updateStreamingRegion}
            streamingServicesState={streamingServices}
            updateStreamingServices={updateStreamingServices}
            pageUp={pageUp}
            getRecommendations={getRecommendations}
          />
        );
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
