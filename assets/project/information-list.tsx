import awsImg from '@/public/aws.png';
import freelanceImg from '@/public/favicon.png';
import ionosImg from '@/public/ionos.png';

import ikigaiPng from '@/public/ikigai.png';
import sainteClotildeImg from '@/public/sainteclotilde.png';
import unistraImg from '@/public/unistra.png';
import { StaticImageData } from 'next/image';

export interface CardInformation {
  image: StaticImageData;
  company: string;
  position?: string;
  duration: string;
}

export const experiences: CardInformation[] = [
  {
    image: ikigaiPng,
    company: 'Ikigai',
    position: 'Développeur Full Stack / DevOps',
    duration: '2024 - Actuellement'
  },
  {
    image: freelanceImg,
    company: 'Freelance',
    position: 'Développeur Full-Stack',
    duration: '2023 - 2024'
  },
  {
    image: ionosImg,
    company: 'IONOS',
    position: 'Développeur Full-Stack / Technicien Web',
    duration: '2020 - 2023'
  }
];

export const formations: CardInformation[] = [
  {
    image: unistraImg,
    company: 'Université de Strasbourg',
    position: 'Licence en biologie moléculaire et cellulaire (BMC)',
    duration: '2016 - 2020'
  },
  {
    image: sainteClotildeImg,
    company: 'Lycée Sainte-Clotilde',
    position: 'Baccalauréat Scientifique',
    duration: '2014 - 2016'
  }
];

export const certifications: CardInformation[] = [
  {
    image: awsImg,
    company: 'Amazon Web Services',
    position: 'AI Practitioner (AI-CO2)',
    duration: 'Mai 2025'
  },
  {
    image: awsImg,
    company: 'Amazon Web Services',
    position: 'SysOps Administrator Associate (SOA-CO2)',
    duration: 'Mars 2025'
  },
  {
    image: awsImg,
    company: 'Amazon Web Services',
    position: 'Developer Associate (DVA-CO2)',
    duration: 'Septembre 2024'
  },
  {
    image: awsImg,
    company: 'Amazon Web Services',
    position: 'Solutions Architect Associate (SAA-CO3)',
    duration: 'Juillet 2024'
  },
  {
    image: awsImg,
    company: 'Amazon Web Services',
    position: 'Cloud Practitioner (CLF-CO2)',
    duration: 'Juillet 2024'
  }
];
