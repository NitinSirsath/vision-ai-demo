import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectDataType } from './projectData';

type IProps = {
  element: ProjectDataType;
  key: number;
};

export default function MinimalMediaCard({ element, key }: IProps) {
  return (
    <Card
      key={key}
      sx={{
        maxWidth: 345,
        backgroundColor: 'background.paper',
        boxShadow: 'none',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
        '&:hover': {
          transform: 'translateY(-8px)', // Slight lift on hover
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)', // Subtle shadow on hover
        },
      }}
    >
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: 'contain',
          margin: '10px',
          transition: 'filter 0.3s ease', // Smooth transition for filter
          '&:hover': {
            filter: 'grayscale(0%)', // Remove grayscale on hover
          },
          filter: 'grayscale(100%)', // Start with grayscale for minimalist effect
        }}
        image={element.thumbnail}
        title={element.projectName}
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            transition: 'color 0.3s ease', // Smooth transition for text color
          }}
        >
          {element.projectName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.75,
            transition: 'color 0.3s ease', // Smooth transition for text color
          }}
        >
          {element.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2, justifyContent: 'flex-end' }}>
        <Button
          size="small"
          sx={{
            textTransform: 'none',
            fontWeight: '400',
            color: 'primary.main',
            padding: '4px 8px',
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 2,
            transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
            '&:hover': {
              backgroundColor: 'primary.main', // Primary color on hover
              color: '#ffffff', // White text on hover
            },
          }}
        >
          Share
        </Button>
        <Button
          size="small"
          sx={{
            textTransform: 'none',
            fontWeight: '400',
            color: 'primary.main',
            padding: '4px 8px',
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 2,
            transition: 'background-color 0.3s ease, color 0.3s ease',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: '#ffffff',
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
