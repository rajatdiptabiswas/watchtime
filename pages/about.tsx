import Layout from '../components/Layout';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export default function about() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-16 min-h-container">
        <div className="space-y-10 text-center px-6 w-3/4 md:w-1/2">
          <div className="title mb-4">about</div>
          <div className="space-y-2">
            <div className="text-xl">Rajat Dipta Biswas</div>
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
              This product uses the TMDb API but is not endorsed or certified by
              TMDb
            </div>
          </div>
          <div className="text-gray-400">2021 ⓒ All Rights Reserved</div>
        </div>
      </div>
    </Layout>
  );
}
