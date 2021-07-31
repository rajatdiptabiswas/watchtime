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
        year={result.release_date?.split('-')[0] || '20XX'}
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
          your recommendations
        </div>

        <div className="flex overflow-x-scroll space-x-6 p-4 px-10 max-w-full scrollbar-hide">
          {movieCards}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { time } = query;

  let url = 'https://api.themoviedb.org/3/discover/movie';
  url += `?api_key=${process.env.TMDB_API_KEY}`;
  url += `&include_adult=false`;
  url += `&region=US`;
  url += `&with_original_language=en`;
  url += `&sort_by=popularity.desc`;
  url += time && `&with_runtime.gte=${(+time * 0.75).toFixed(0)}`;
  url += time && `&with_runtime.lte=${time}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
