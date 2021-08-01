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
          your recommendations
        </div>

        <div className="flex overflow-x-scroll space-x-6 p-4 px-10 max-w-full scrollbar-hide">
          {tvCards}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { time } = query;

  let url = 'https://api.themoviedb.org/3/discover/tv';
  url += `?api_key=${process.env.TMDB_API_KEY}`;
  url += `&with_original_language=en`;
  url += `&sort_by=popularity.desc`;
  url += time ? `&with_runtime.gte=${(+time * 0.75).toFixed(0)}` : ``;
  url += time ? `&with_runtime.lte=${time}` : ``;

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
