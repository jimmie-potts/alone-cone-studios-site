export type Mural = {
  title: string;
  image: string;
  alt: string;
  isPlaceholder?: boolean;
};

export const murals: Mural[] = [
  {
    title: 'Mural Photo Placeholder 1',
    image: '/images/murals/mural-placeholder-1.svg',
    alt: 'Clearly labeled placeholder image for a future Minnie mural photo.',
    isPlaceholder: true,
  },
  {
    title: 'Mural Photo Placeholder 2',
    image: '/images/murals/mural-placeholder-2.svg',
    alt: 'Clearly labeled placeholder image for a second future Minnie mural photo.',
    isPlaceholder: true,
  },
  {
    title: 'Mural Photo Placeholder 3',
    image: '/images/murals/mural-placeholder-3.svg',
    alt: 'Clearly labeled placeholder image for a third future Minnie mural photo.',
    isPlaceholder: true,
  },
  {
    title: 'Mural Photo Placeholder 4',
    image: '/images/murals/mural-placeholder-4.svg',
    alt: 'Clearly labeled placeholder image for a fourth future Minnie mural photo.',
    isPlaceholder: true,
  },
];
