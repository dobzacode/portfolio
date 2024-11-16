export interface ProjectInformation {
  name: string;
  description: string;
  type: 'personnel' | 'professionnel';
  image: string;
  competences: string[];
  duration: string;
  github: string;
  website: string;
}

export const projects: ProjectInformation[] = [
  {
    name: 'Dine Dong',
    type: 'personnel',
    description:
      'Dine-Dong est une application communautaire permettant de vendre et découvrir des repas faits maison. Conçue avec Next.js, FastAPI, PostgreSQL et AWS Lambda, elle facilite la connexion entre les passionnés de cuisine et les chefs locaux.',
    duration: 'Août 2024 - En cours',
    image: '/project/dine-dong.jpg',
    competences: [
      'Next.js',
      'TailwindCSS',
      'Framer Motion',
      'FastAPI',
      'Stripe',
      'Auth0',
      'PostgreSQL',
      'Redis',
      'Github Actions',
      'Docker',
      'Terraform',
      'AWS'
    ],
    github: 'https://github.com/dobzacode/dine-dong',
    website: 'https://dine-dong.fr'
  },
  {
    name: 'Roddat',
    type: 'personnel',
    description:
      'Clone de Reddit développé avec Next.js, Prisma, PostgreSQL et Tailwind CSS. Il propose une interface interactive et une API RESTful pour gérer les interactions entre utilisateurs de manière fluide et efficace.',
    duration: 'Septembre 2023 - Novembre 2023',
    image: '/project/roddat.jpg',
    competences: ['Next.js', 'TailwindCSS', 'Prisma', 'NextAuth', 'PostgreSQL', 'S3', 'Vercel'],
    github: 'https://github.com/dobzacode/roddat',
    website: 'https://roddat.vercel.app'
  },
  {
    name: 'Arozvit',
    type: 'personnel',
    duration: 'Mai 2024 - Juin 2024',
    description:
      'Outil de gestion des plantes, développé avec Next.js pour le web et Expo pour le mobile. Il permet de suivre les soins des plantes, avec une API tRPC pour une intégration fluide et une interface intuitive.',
    image: '/project/arozvit.jpg',
    competences: [
      'Next.js',
      'TailwindCSS',
      'NativeWind',
      'Drizzle',
      'TRPC',
      'Expo',
      'S3',
      'Turborepo',
      'Github Actions',
      'Jest',
      'Maestro',
      'Figma'
    ],
    github: 'https://github.com/dobzacode/arozvit',
    website: ''
  },
  {
    name: 'Acte 5',
    type: 'professionnel',
    duration: 'Avril 2024 - En cours',
    description:
      "Entreprise spécialisée dans la production d'événements d'entreprise et de spectacles comiques. Le site, conçu avec Next.js et Sanity CMS, permet une gestion optimisée des événements et une navigation agréable.",
    image: '/project/acte-5.jpg',
    competences: ['Next.js', 'TailwindCSS', 'Vercel', 'Framer Motion', 'Sanity', 'Figma'],
    github: 'https://github.com/dobzacode/acte-5',
    website: 'https://acte-5.vercel.app'
  },
  {
    name: 'Abject Act',
    type: 'professionnel',
    duration: 'Mai 2024 - Avril 2024',
    description:
      'Association produisant des événements techno à Strasbourg. Son site, créé avec Next.js, Tailwind CSS et Next-Intl, offre une expérience multilingue et réactive avec des animations captivantes.',
    image: '/project/abject-act.jpg',
    competences: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Next-intl', 'Vercel', 'Sanity'],
    github: 'https://github.com/dobzacode/ABJECT-ACT',
    website: 'https://abject-act.vercel.app'
  },
  {
    name: 'Mtonarchi',
    type: 'professionnel',
    duration: 'Décembre 2023 - Avril 2024',
    description:
      'Site de Marion Deleersnyder, architecte à Strasbourg. Il présente ses projets et services en architecture, avec une interface élégante et un design responsive pour une navigation optimisée.',
    image: '/project/mtonarchi.jpg',
    competences: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Vercel', 'Sanity'],
    github: 'https://github.com/dobzacode/MTONARCHI',
    website: 'https://marion-archi.vercel.app'
  },
  {
    name: 'Portfolio',
    type: 'personnel',
    duration: 'Novembre 2024',
    description:
      'Un espace pour découvrir mes créations, mes compétences et mes expériences professionnelles. Conçu avec Next.js, Tailwind CSS et Framer Motion.',
    image: '/project/portfolio.jpg',
    competences: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/dobzacode/portfolio',
    website: 'https://corentinkittel.fr'
  }
];
