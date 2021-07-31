import Image, { ImageLoader, ImageLoaderProps } from 'next/image';
import { useRouter } from 'next/router';

interface MovieCardProps {
  id: number;
  title: string;
  year: string;
  rating: string;
  // overview: string;
  posterPath: string;
}

const imageLoader: ImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  return `https://image.tmdb.org/t/p/original${src}`;
};

export default function MovieCard({
  id,
  title,
  year,
  rating,
  // overview,
  posterPath,
}: MovieCardProps) {
  const router = useRouter();

  return (
    <div
      className="min-w-min bg-gray-800 rounded overflow-hidden shadow-lg cursor-pointer"
      onClick={() => router.push(`https://www.themoviedb.org/movie/${id}`)}
    >
      <div className="h-72 relative">
        <Image
          loader={imageLoader}
          src={posterPath}
          alt="poster"
          objectFit="cover"
          sizes="100%"
          layout="fill"
        />
      </div>
      <div className="p-2 text-center w-52">
        <div className="font-bold text-lg truncate">{`${title}`}</div>
        <div className="text-base">{`(${year})`}</div>
        {/* <div className="text-gray-500 text-sm">{overview}</div> */}
      </div>
      <div className="text-center mb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
          {`★ ${rating}`}
        </span>
      </div>
    </div>
  );
}
