import Layout from '../components/Layout';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export default function about() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-16 min-h-container">
        <div className="space-y-10 text-center p-6 pb-12 w-3/4 md:w-1/2">
          <div className="title mb-4">about</div>
          <div className="flex items-center justify-center">
            <div className="px-4 md:w-2/3 text-xl">
              <span className="font-light inline-block">watch</span>
              <span className="font-bold inline-block">time</span>
              &nbsp;helps you find what to watch based on the time available
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <div className="text-gray-400">built by</div>
              <div className="text-xl">rajat dipta biswas</div>
            </div>
            <div className="space-x-4">
              <SocialIcon
                url="https://github.com/rajatdiptabiswas"
                fgColor="#FFF"
              />
              <SocialIcon
                url="https://linkedin.com/in/rajat-dipta-biswas/"
                fgColor="#FFF"
              />
              <SocialIcon url="https://twitter.com/RajatDipta" fgColor="#FFF" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="">
              <div className="h-16 w-28 relative">
                <Image
                  src="/tmdb.svg"
                  alt="poster"
                  objectFit="contain"
                  sizes="100%"
                  layout="fill"
                />
              </div>
            </div>
            <div className="px-4 w-3/4 md:w-1/2 text-gray-400">
              this product uses the TMDB API but is not endorsed or certified by
              TMDB
            </div>
          </div>
          <div className="text-gray-400">2021 ⓒ all rights reserved</div>
        </div>
      </div>
    </Layout>
  );
}
