import LOGO1 from '../.././../../assets/react.svg';

export type ProjectDataType = {
  id: number;
  projectName: string;
  github: string;
  host: string;
  desc: string;
  thumbnail: string;
};

export const projectData: ProjectDataType[] = [
  {
    id: 1,
    projectName: 'Cine-Flex',
    github: 'https://github.com/NitinSirsath/cine-flex',
    host: 'cine-flex-flame.vercel.app/',
    desc: 'Movie visual app',
    thumbnail: LOGO1,
  },
  {
    id: 2,
    projectName: 'Portfolio',
    github: 'https://github.com/NitinSirsath/portolio-next',
    host: 'portfolio.nitinsirsath.vercel.app/',
    desc: 'Personal portfolio in NextJS',
    thumbnail: LOGO1,
  },
  {
    id: 3,
    projectName: 'Cine-Flex',
    github: 'https://github.com/NitinSirsath/cine-flex',
    host: 'cine-flex-flame.vercel.app/',
    desc: 'Movie visual app',
    thumbnail: LOGO1,
  },
  {
    id: 4,
    projectName: 'Cine-Flex',
    github: 'https://github.com/NitinSirsath/cine-flex',
    host: 'cine-flex-flame.vercel.app/',
    desc: 'Movie visual app',
    thumbnail: LOGO1,
  },
];
