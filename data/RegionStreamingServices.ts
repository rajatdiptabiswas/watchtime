type RegionStreamingServicesType = {
  [contentType: string]: {
    [region: string]: {
      regionCode: string;
      streamingService: string[];
    };
  };
};

const RegionStreamingServices: RegionStreamingServicesType = {
  movie: {
    'Argentina': {
      regionCode: 'AR',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'HBO Max',
        'Apple TV Plus',
        'Starz',
      ],
    },
    'Austria': {
      regionCode: 'AT',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Australia': {
      regionCode: 'AU',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Belgium': {
      regionCode: 'BE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Bulgaria': {
      regionCode: 'BG',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Apple TV Plus'],
    },
    'Brazil': {
      regionCode: 'BR',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'HBO Max',
        'Apple TV Plus',
        'Starz',
      ],
    },
    'Canada': {
      regionCode: 'CA',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Switzerland': {
      regionCode: 'CH',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Czech Republic': {
      regionCode: 'CZ',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Apple TV Plus'],
    },
    'Germany': {
      regionCode: 'DE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'Disney Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Denmark': {
      regionCode: 'DK',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Estonia': {
      regionCode: 'EE',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Apple TV Plus'],
    },
    'Spain': {
      regionCode: 'ES',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Finland': {
      regionCode: 'FI',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'France': {
      regionCode: 'FR',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'United Kingdom': {
      regionCode: 'GB',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Hungary': {
      regionCode: 'HU',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Indonesia': {
      regionCode: 'ID',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Apple TV Plus'],
    },
    'Ireland': {
      regionCode: 'IE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'India': {
      regionCode: 'IN',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Apple TV Plus',
        'Hotstar Disney+',
      ],
    },
    'Italy': {
      regionCode: 'IT',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Japan': {
      regionCode: 'JP',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Hulu',
        'Apple TV Plus',
        'Disney Plus',
      ],
    },
    'South Korea': {
      regionCode: 'KR',
      streamingService: ['Netflix', 'Amazon Prime Video'],
    },
    'Lithuania': {
      regionCode: 'LT',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Apple TV Plus'],
    },
    'Mexico': {
      regionCode: 'MX',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'HBO Max',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Netherlands': {
      regionCode: 'NL',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'Starz',
      ],
    },
    'Norway': {
      regionCode: 'NO',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'New Zealand': {
      regionCode: 'NZ',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Philippines': {
      regionCode: 'PH',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Apple TV Plus'],
    },
    'Poland': {
      regionCode: 'PL',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Apple TV Plus'],
    },
    'Portugal': {
      regionCode: 'PT',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Russia': {
      regionCode: 'RU',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Sweden': {
      regionCode: 'SE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Turkey': {
      regionCode: 'TR',
      streamingService: ['Netflix', 'Amazon Prime Video', 'YouTube Premium'],
    },
    'United States': {
      regionCode: 'US',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'Hulu',
        'HBO Max',
        'Paramount Plus',
        'Peacock',
        'YouTube Premium',
        'Starz',
        'Showtime',
      ],
    },
    'South Africa': {
      regionCode: 'ZA',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Apple TV Plus'],
    },
  },
  tv: {
    'Argentina': {
      regionCode: 'AR',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'HBO Max',
        'Crunchyroll',
        'Apple TV Plus',
        'Starz',
      ],
    },
    'Austria': {
      regionCode: 'AT',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Australia': {
      regionCode: 'AU',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Belgium': {
      regionCode: 'BE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Bulgaria': {
      regionCode: 'BG',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
    'Brazil': {
      regionCode: 'BR',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'HBO Max',
        'Crunchyroll',
        'Apple TV Plus',
        'Starz',
      ],
    },
    'Canada': {
      regionCode: 'CA',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Switzerland': {
      regionCode: 'CH',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Czech Republic': {
      regionCode: 'CZ',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
    'Germany': {
      regionCode: 'DE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Denmark': {
      regionCode: 'DK',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Estonia': {
      regionCode: 'EE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
    'Spain': {
      regionCode: 'ES',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Finland': {
      regionCode: 'FI',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
    'France': {
      regionCode: 'FR',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'United Kingdom': {
      regionCode: 'GB',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Hungary': {
      regionCode: 'HU',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Indonesia': {
      regionCode: 'ID',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
    'Ireland': {
      regionCode: 'IE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'India': {
      regionCode: 'IN',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Apple TV Plus',
        'Hotstar Disney+',
        'Crunchyroll',
      ],
    },
    'Italy': {
      regionCode: 'IT',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Japan': {
      regionCode: 'JP',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'South Korea': {
      regionCode: 'KR',
      streamingService: ['Netflix', 'Amazon Prime Video', 'Crunchyroll'],
    },
    'Lithuania': {
      regionCode: 'LT',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
    'Mexico': {
      regionCode: 'MX',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'HBO Max',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
        'Starz',
      ],
    },
    'Netherlands': {
      regionCode: 'NL',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'Starz',
      ],
    },
    'Norway': {
      regionCode: 'NO',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'New Zealand': {
      regionCode: 'NZ',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Philippines': {
      regionCode: 'PH',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
    'Poland': {
      regionCode: 'PL',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
    'Portugal': {
      regionCode: 'PT',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Russia': {
      regionCode: 'RU',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Sweden': {
      regionCode: 'SE',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Paramount Plus',
        'Crunchyroll',
        'Apple TV Plus',
        'YouTube Premium',
      ],
    },
    'Turkey': {
      regionCode: 'TR',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'YouTube Premium',
      ],
    },
    'United States': {
      regionCode: 'US',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Disney Plus',
        'Apple TV Plus',
        'Hulu',
        'HBO Max',
        'Paramount Plus',
        'Crunchyroll',
        'Peacock',
        'YouTube Premium',
        'Starz',
        'Showtime',
      ],
    },
    'South Africa': {
      regionCode: 'ZA',
      streamingService: [
        'Netflix',
        'Amazon Prime Video',
        'Crunchyroll',
        'Apple TV Plus',
      ],
    },
  },
};

export default RegionStreamingServices;
