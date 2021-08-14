import Layout from '../../components/Layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import TVCard from '../../components/TVCard';

export default function tvRecommendations({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const tvCards = data.results.map((result: any, index: number) => {
    return (
      <TVCard
        key={result.id}
        id={result.id}
        title={result.original_name}
        // TODO: fix placeholder year
        year={result.first_air_date?.split('-')[0] || '20XX'}
        // overview={result.overview}
        rating={result.vote_average}
        posterPath={result.poster_path}
      />
    );
  });

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-16 min-h-container">
        <div className="text-3xl font-bold text-center p-2 mb-4">
          your tv recommendations
        </div>

        <div className="flex overflow-x-scroll space-x-6 p-4 px-10 max-w-full scrollbar-hide">
          {tvCards.length > 0 ? (
            tvCards
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
  const { time, genres, yearStart, yearEnd, ratingStart, ratingEnd } = query;

  const genreCodeNews = 10763;
  const genreCodeTalk = 10767;

  let url = 'https://api.themoviedb.org/3/discover/tv';
  url += `?api_key=${process.env.TMDB_API_KEY}`;
  url += `&with_original_language=en`;
  url += `&sort_by=popularity.desc`;
  url += time ? `&with_runtime.gte=${(+time * 0.25).toFixed(0)}` : ``;
  url += time ? `&with_runtime.lte=${time}` : ``;
  url += genres ? `&with_genres=${genres}` : ``;
  url += `&without_genres=${genreCodeNews}|${genreCodeTalk}`;
  url += yearStart
    ? `&first_air_date.gte=${yearStart}-01-01T00:00:00.000Z`
    : ``;
  url += yearEnd ? `&first_air_date.lte=${yearEnd}-12-31T00:00:00.000Z` : ``;
  url += ratingStart ? `&vote_average.gte=${ratingStart}` : ``;
  url += ratingEnd ? `&vote_average.lte=${ratingEnd}` : ``;
  url += `&vote_count.gte=250`;

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
