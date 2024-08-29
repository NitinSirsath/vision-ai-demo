import { ArrowForwardRounded } from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';
import ProjectSection from './components/ProjectSection';
// import globalStyles from '../../../style/globalStyle.module.css';

const HomePage = () => {
  return (
    <div>
      <div className="py-10">
        <Typography variant="h2">
          {' '}
          Hallo, <span className="text-amber-300">I'm Nitin</span>.
        </Typography>
        <Typography variant="caption">A fullstack-engineer from the Aurangabad based in Pune.</Typography>
        <Typography className="py-5" variant="body1">
          I work with leading-edge companies <br />
          to create exceptional products. <br />I most recently worked with MoonPay to help <br />
          make web3 accessible. Before that, I built personal and <br />
          business banking products for millions of customers at Monzo.
        </Typography>
        <Button endIcon={<ArrowForwardRounded />} variant="contained">
          More Infomation
        </Button>
      </div>
      <Divider />
      <ProjectSection />
    </div>
  );
};

export default HomePage;
