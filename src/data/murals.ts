export type MuralMedia = {
  src: string;
  alt: string;
};

export type MuralVideo = {
  src: string;
  title: string;
  poster: string;
};

const galleryRoot = '/images/murals/Photos for bottom of page endless scroll';

const projectFiles = {
  'Bouquet mural': [
    'Bouquet-mural-2017-001.jpeg',
    'Bouquet-mural-2017-002.jpeg',
  ],
  'Lotus mural': [
    'lotus-mural-2018-001.jpg',
    'lotus-mural-2018-0013.JPG',
    'lotus-mural-2018-002.jpg',
    'lotus-mural-2018-003.JPG',
    'lotus-mural-2018-005.jpg',
    'lotus-mural-2018-006.JPG',
    'lotus-mural-2018-007.JPG',
    'lotus-mural-2018-008.JPG',
    'lotus-mural-2018-009.JPG',
    'lotus-mural-2018-010.JPG',
    'lotus-mural-2018-011.JPG',
    'lotus-mural-2018-012.JPG',
  ],
  'Murray the octopus mural': [
    ...Array.from({ length: 10 }, (_, index) =>
      `murray-the-octopus-mural-2021-${String(index + 1).padStart(3, '0')}.jpeg`,
    ),
    'murray-the-octopus-mural-2023-001.JPG',
    'murray-the-octopus-mural-2023-002.JPG',
    'murray-the-octopus-mural-2023-003.JPG',
    'murray-the-octopus-mural-2023-004.JPG',
    'murray-the-octopus-mural-2023-005.JPG',
    'murray-the-octopus-mural-2023-006.jpg',
    ...Array.from({ length: 8 }, (_, index) =>
      `murray-the-octopus-mural-2023-${String(index + 7).padStart(3, '0')}.jpeg`,
    ),
  ],
  'Otter Boops mural': [
    ...Array.from({ length: 21 }, (_, index) => {
      const extension = index === 20 ? 'JPEG' : 'jpeg';
      return `otter-boops-mural-2026-${String(index + 1).padStart(3, '0')}.${extension}`;
    }),
    'otter-boops-mural-2026-025.JPG',
  ],
} as const;

export const muralGallery: MuralMedia[] = [
  {
    src: `${galleryRoot}/cbs-mural-2026-001.jpeg`,
    alt: 'Hand-painted mural for CBS Collision Body Services.',
  },
  ...Object.entries(projectFiles).flatMap(([projectName, files]) =>
    files.map((file, index) => ({
      src: `${galleryRoot}/${file}`,
      alt: `${projectName}, view ${index + 1}.`,
    })),
  ),
];

export const muralVideos: MuralVideo[] = [
  {
    src: '/videos/murray-the-octopus-mural-2021-011.mp4',
    title: 'Murray the octopus mural video, 2021',
    poster: '/images/murals/murray-the-octopus-mural-2021-001.jpeg',
  },
  {
    src: '/videos/murray-the-octopus-mural-2023-015.MOV',
    title: 'Murray the octopus mural video, 2023',
    poster: '/images/murals/murray-the-octopus-mural-2023-001.JPG',
  },
  {
    src: '/images/murals/otter-boops-mural-2026-029.mp4',
    title: 'Otter Boops mural video, 2026',
    poster: '/images/murals/otter-boops-mural-2026-011.jpeg',
  },
];
