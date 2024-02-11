export interface ProjectListProps {
  title: string;
  image: string;
  client: string;
  category: string[];
  stack: string[];
  year: number;
  status: 'completed' | 'inProgress';
  url: string;
  id: number;
  github: string;
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
    url: 'https://marion-archi.vercel.app',
    id: 0,
    github: 'https://github.com/dobzacode/MTONARCHI'
  },
  {
    title: 'ABJECT-ACT',
    image: '/project/abject-act.jpg',
    client: 'Abject-Act',
    category: ['Front-End', 'UI/UX Design'],
    year: 2023,
    stack: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Next-intl', 'TypeScript', 'Vercel'],
    status: 'inProgress',
    url: 'https://abject-act.vercel.app',
    id: 1,
    github: 'https://github.com/dobzacode/ABJECT-ACT'
  },
  {
    title: 'RODDAT',
    image: '/project/roddat.jpg',
    client: 'Personnal Project',
    category: ['Full-stack', 'UI/UX Design'],
    year: 2023,
    stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Prisma', 'Next-Auth', 'Vercel', 'Neon.tech'],
    status: 'completed',
    url: 'https://roddat.vercel.app',
    id: 2,
    github: 'https://github.com/dobzacode/RODDAT'
  }
];
