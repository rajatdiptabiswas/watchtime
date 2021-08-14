import Layout from '../components/Layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';
import ToggleButton from '../components/ToggleButton';
import MovieCard from '../components/MovieCard';
import TVCard from '../components/TVCard';

export default function search({
  apiKey,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [contents, setContents] = useState<JSX.Element[]>([]);
  const [contentTypeState, setContentTypeState] = useState<'movie' | 'tv'>(
    'movie'
  );
  const [searchQueryState, setSearchQueryState] = useState('');

  const updateContents = async (contentType: string, searchQuery: string) => {
    if (searchQuery.length === 0) {
      setContents([]);
      return;
    }

    let url = 'https://api.themoviedb.org/3/search';
    url += `/${contentType}`;
    url += `?api_key=${apiKey}`;
    url += `&include_adult=false`;
    url += `&region=US`;

    const response = await fetch(url + `&query=${searchQuery}`);
    const data = await response.json();

    const updatedContents = data.results?.map((result: any, index: number) => {
      return contentType === 'movie' ? (
        <MovieCard
          key={result.id}
          id={result.id}
          title={result.original_title}
          // TODO: fix placeholder year
          year={result.release_date?.split('-')[0] || '20XX'}
          // overview={result.overview}
          rating={result.vote_average}
          posterPath={result.poster_path}
        />
      ) : (
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

    updatedContents && setContents(updatedContents);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex sm:text-lg whitespace-nowrap overflow-x-scroll space-x-4 sm:space-x-6 p-4 md:px-10 max-w-full scrollbar-hide">
          <div className="text-3xl font-bold flex items-center justify-center">
            search
          </div>
          <ToggleButton
            name={'movies'}
            isSelected={contentTypeState === 'movie'}
            onButtonClick={() => {
              updateContents('movie', searchQueryState);
              setContentTypeState('movie');
            }}
          />

          <ToggleButton
            name={'tv'}
            isSelected={contentTypeState === 'tv'}
            onButtonClick={() => {
              updateContents('tv', searchQueryState);
              setContentTypeState('tv');
            }}
          />
        </div>
        <input
          className="text-center text-xl bg-transparent border-gray-200 border-2 rounded-full p-2 my-4 w-3/4 md:w-1/2 shadow-md focus:outline-none focus:ring-4 focus:ring-gray-600"
          placeholder="search bar"
          onChange={(event) => {
            const query = event.target.value;
            updateContents(contentTypeState, query);
            setSearchQueryState(query);
          }}
        />
        <div className="flex overflow-x-scroll space-x-6 p-4 px-10 max-w-full scrollbar-hide">
          {contents.length > 0 ? (
            contents
          ) : (
            <div className="text-gray-400 text-center">
              {searchQueryState.length > 0
                ? `no results found :(`
                : `type a search query to get results :)`}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiKey = process.env.TMDB_API_KEY;

  return {
    props: { apiKey },
  };
};
