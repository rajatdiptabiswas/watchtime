import Layout from '../components/Layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import MovieCard from '../components/MovieCard';

export default function recommendations({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const movies = data.results.map((result: any, index: number) => {
    return (
      <MovieCard
        key={result.id}
        id={result.id}
        title={result.original_title}
        year={result.release_date.split('-')[0]}
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
          {movies}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { content, time } = query;

  let url = 'https://api.themoviedb.org/3/discover/';
  url += content;
  url += `?api_key=${process.env.TMDB_API_KEY}`;
  url += `&with_original_language=en`;
  url += `&include_adult=false`;
  url += `&sort_by=popularity.desc`;
  url += `&with_runtime.lte=${time}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
