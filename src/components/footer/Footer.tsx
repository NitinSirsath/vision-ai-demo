import { Divider, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Divider />
      <div className="py-11" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle1">&copy; 2022 - 2024 / Nitin Sirsath</Typography>
        <Typography variant="subtitle1">View Source</Typography>
      </div>
    </div>
  );
};

export default Footer;
