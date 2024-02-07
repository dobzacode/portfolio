export interface ProjectListProps {
  title: string;
  image: string;
  client: string;
  category: string[];
  stack: string[];
  year: number;
  status: 'completed' | 'inProgress';
  url: string;
}

export const projectList: ProjectListProps[] = [
  {
    title: 'MTONARCHI',
    image: '/project/mtonarchi.jpg',
    client: 'Mtonarchi',
    category: ['Front-End', 'UI/UX Design'],
    year: 2023,
    stack: ['Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript', 'Vercel'],
    status: 'inProgress',
    url: 'marion-archi.vercel.app'
  },
  {
    title: 'ABJECT-ACT',
    image: '/project/abject-act.jpg',
    client: 'Abject-Act',
    category: ['Front-End', 'UI/UX Design'],
    year: 2023,
    stack: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Next-intl', 'TypeScript', 'Vercel'],
    status: 'inProgress',
    url: 'abject-act.vercel.app'
  },
  {
    title: 'RODDAT',
    image: '/project/roddat.jpg',
    client: 'Personnal Project',
    category: ['Full-stack', 'UI/UX Design'],
    year: 2023,
    stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Prisma', 'Next-Auth', 'Vercel', 'Neon.tech'],
    status: 'completed',
    url: 'roddat.vercel.app'
  }
];
