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
    title: 'Derpy Otter With Clam',
    backgroundImage: {
      src: '/images/murals/derpy-otter-with-clam.jpeg',
      alt: 'Colorful mural of a playful purple otter holding a clam among bright green leaves.',
    },
    description:
      'In-progress leaf painting photos leading into the finished playful otter mural.',
    gallery: [
      {
        src: '/images/murals/minnie-paint-leaf.PNG',
        alt: 'Minnie painting green leaf shapes on a white wall with purple mural details nearby.',
        caption: 'Painting leaf details',
      },
      {
        src: '/images/murals/minnie-ponder-leaf.JPEG',
        alt: 'Minnie standing in front of an in-progress wall mural with green leaves and purple forms.',
        caption: 'Reviewing the mural in progress',
      },
      {
        src: '/images/murals/derpy-otter-with-clam.jpeg',
        alt: 'Colorful mural of a playful purple otter holding a clam among bright green leaves.',
        caption: 'Derpy otter mural',
      },
    ],
    videos: [],
  },
  {
    title: 'Octopus Profile',
    backgroundImage: {
      src: '/images/murals/octopus-profile.jpeg',
      alt: 'Bright yellow octopus mural on a blue wall with teal circular details.',
    },
    description: 'Bright octopus mural with saturated ocean colors and playful circular details.',
    gallery: [
      {
        src: '/images/murals/octopus-profile.jpeg',
        alt: 'Bright yellow octopus mural on a blue wall with teal circular details.',
        caption: 'Octopus mural',
      },
    ],
    videos: [],
  },
  {
    title: 'Pink Flowers',
    backgroundImage: {
      src: '/images/murals/pink-flowers.jpg',
      alt: 'Pink water lily mural detail with green leaves on a textured wall.',
    },
    description: 'Floral mural detail with pink petals and layered green leaves.',
    gallery: [
      {
        src: '/images/murals/pink-flowers.jpg',
        alt: 'Pink water lily mural detail with green leaves on a textured wall.',
        caption: 'Pink flower mural detail',
      },
    ],
    videos: [],
  },
];
