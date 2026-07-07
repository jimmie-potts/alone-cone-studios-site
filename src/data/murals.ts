export type MuralMedia = {
  src: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
};

export type MuralVideo = {
  src: string;
  title: string;
  poster?: string;
  isPlaceholder?: boolean;
};

export type MuralProject = {
  title: string;
  backgroundImage: MuralMedia;
  description?: string;
  gallery: MuralMedia[];
  videos: MuralVideo[];
};

export const muralProjects: MuralProject[] = [
  {
    title: 'Mural Project Placeholder 1',
    backgroundImage: {
      src: '/images/murals/mural-placeholder-1.svg',
      alt: 'Clearly labeled placeholder background image for a future Minnie mural project.',
      isPlaceholder: true,
    },
    description:
      'Placeholder project description: replace this with the story, location, and details for a real Minnie mural.',
    gallery: [
      {
        src: '/images/murals/mural-placeholder-1.svg',
        alt: 'Clearly labeled placeholder image for the first future Minnie mural project.',
        caption: 'Placeholder project photo',
        isPlaceholder: true,
      },
      {
        src: '/images/murals/mural-placeholder-2.svg',
        alt: 'Clearly labeled placeholder detail image for the first future Minnie mural project.',
        caption: 'Placeholder detail photo',
        isPlaceholder: true,
      },
    ],
    videos: [],
  },
  {
    title: 'Mural Project Placeholder 2',
    backgroundImage: {
      src: '/images/murals/mural-placeholder-2.svg',
      alt: 'Clearly labeled placeholder background image for a second future Minnie mural project.',
      isPlaceholder: true,
    },
    description:
      'Placeholder project description: add accurate notes and real media when this mural project is ready.',
    gallery: [
      {
        src: '/images/murals/mural-placeholder-2.svg',
        alt: 'Clearly labeled placeholder image for the second future Minnie mural project.',
        caption: 'Placeholder project photo',
        isPlaceholder: true,
      },
      {
        src: '/images/murals/mural-placeholder-3.svg',
        alt: 'Clearly labeled placeholder detail image for the second future Minnie mural project.',
        caption: 'Placeholder detail photo',
        isPlaceholder: true,
      },
    ],
    videos: [],
  },
  {
    title: 'Mural Project Placeholder 3',
    backgroundImage: {
      src: '/images/murals/mural-placeholder-3.svg',
      alt: 'Clearly labeled placeholder background image for a third future Minnie mural project.',
      isPlaceholder: true,
    },
    description:
      'Placeholder project description: group all related photos and videos for this mural here.',
    gallery: [
      {
        src: '/images/murals/mural-placeholder-3.svg',
        alt: 'Clearly labeled placeholder image for the third future Minnie mural project.',
        caption: 'Placeholder project photo',
        isPlaceholder: true,
      },
      {
        src: '/images/murals/mural-placeholder-4.svg',
        alt: 'Clearly labeled placeholder detail image for the third future Minnie mural project.',
        caption: 'Placeholder detail photo',
        isPlaceholder: true,
      },
    ],
    videos: [],
  },
];
