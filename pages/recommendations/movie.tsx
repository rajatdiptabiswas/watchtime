import Layout from '../../components/Layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import MovieCard from '../../components/MovieCard';

export default function MovieRecommendations({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const movieCards = data.results.map((result: any, index: number) => {
    return (
      <MovieCard
        key={result.id}
        id={result.id}
        title={result.original_title}
        // TODO: fix placeholder year
        year={result.release_date?.split('-')[0]}
        // overview={result.overview}
        rating={result.vote_average}
        posterPath={result.poster_path}
      />
    );
  });

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-16 min-h-container">
        <div className="title mb-4">your movie recommendations</div>

        <div className="flex overflow-x-scroll space-x-6 p-4 px-10 max-w-full scrollbar-hide">
          {movieCards.length > 0 ? (
            movieCards
          ) : (
            <div className="text-gray-400">no recommendations found :(</div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const {
    time,
    genres,
    yearStart,
    yearEnd,
    ratingStart,
    ratingEnd,
    streamingRegion,
    streamingServices,
  } = query;

  let url = 'https://api.themoviedb.org/3/discover/movie';
  url += `?api_key=${process.env.TMDB_API_KEY}`;
  url += `&include_adult=false`;
  url += `&region=US`;
  url += `&with_original_language=en`;
  url += `&sort_by=popularity.desc`;
  url += time ? `&with_runtime.gte=${(+time * 0.25).toFixed(0)}` : ``;
  url += time ? `&with_runtime.lte=${time}` : ``;
  url += genres ? `&with_genres=${genres}` : ``;
  url += yearStart
    ? `&primary_release_date.gte=${yearStart}-01-01T00:00:00.000Z`
    : ``;
  url += yearEnd
    ? `&primary_release_date.lte=${yearEnd}-12-31T00:00:00.000Z`
    : ``;
  url += ratingStart ? `&vote_average.gte=${ratingStart}` : ``;
  url += ratingEnd ? `&vote_average.lte=${ratingEnd}` : ``;
  url += `&vote_count.gte=250`;
  url += streamingRegion ? `&watch_region=${streamingRegion}` : ``;
  url += streamingServices ? `&with_watch_providers=${streamingServices}` : ``;

  // TODO: remove debug statement
  // console.log(url);

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
