type StreamingServiceDetailsType = {
  [streamingService: string]: {
    name: string;
    color: string;
    logo: string;
    id: number[];
  };
};

const StreamingServiceDetails: StreamingServiceDetailsType = {
  'Netflix': {
    name: 'Netflix',
    color: '#B81D24',
    logo: '/netflix-white.svg',
    id: [8],
  },
  'Amazon Prime Video': {
    name: 'Prime Video',
    color: '#00A8E1',
    logo: '/prime-video-white.svg',
    id: [9, 119],
  },
  'Apple TV Plus': {
    name: 'Apple TV+',
    color: '#000000',
    logo: '/apple-tv-white.svg',
    id: [350],
  },
  'Disney Plus': {
    name: 'Disney+',
    color: '#101C50',
    logo: '/disney-white.svg',
    id: [390],
  },
  'Hotstar Disney+': {
    name: 'Disney+ Hotstar',
    color: '#101C50',
    logo: '/disney-hotstar-white.svg',
    id: [377],
  },
  'Hulu': { name: 'hulu', color: '#1CE783', logo: '/hulu-white.svg', id: [15] },
  'HBO Max': {
    name: 'HBO Max',
    color: '#5822B4',
    logo: '/hbo-max-white.svg',
    id: [384],
  },
  'Crunchyroll': {
    name: 'Crunchyroll',
    color: '#F47521',
    logo: '/crunchyroll-white.svg',
    id: [283],
  },
  'Paramount Plus': {
    name: 'Paramount+',
    color: '#0059F8',
    logo: '/paramount-white.svg',
    id: [531],
  },
  'Peacock': {
    name: 'Peacock',
    color: '#000000',
    logo: '/peacock-white.svg',
    id: [386],
  },
  'YouTube Premium': {
    name: 'YouTube Premium',
    color: '#FF0000',
    logo: '/youtube-premium-white.svg',
    id: [188],
  },
  'Starz': {
    name: 'Starz',
    color: '#000000',
    logo: '/starz-white.svg',
    id: [43],
  },
  'Showtime': {
    name: 'Showtime',
    color: '#FF0101',
    logo: '/showtime-white.svg',
    id: [37],
  },
};

export default StreamingServiceDetails;
