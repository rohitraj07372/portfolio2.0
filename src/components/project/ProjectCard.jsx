import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Accordion,
  AccordionSummary,
AccordionDetails,
  Stack,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';

const techColors = {
  React: 'primary',
  TypeScript: 'info',
  'Tailwind CSS': 'success',
  'Framer Motion': 'secondary',
  Vite: 'warning'
};

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  details,
  codeLink,
  liveDemoLink,
  darkMode = false
}) {
  const theme = useTheme();

  const cardStyles = {
    background: darkMode ? theme.palette.grey[900] : theme.palette.grey,
    color: darkMode ? theme.palette.grey : theme.palette.grey
  };

  return (
    <Card sx={{ ...cardStyles, borderRadius: 2,   }}>
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 170,
            objectFit: 'cover',
            borderRadius: '.5rem .5rem 0 0',
            width: '100%',
          }}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <Chip
              key={tag}
              label={tag}
              color={techColors[tag] || 'default'}
              size="small"
              sx={{
                bgcolor: darkMode ? theme.palette.grey[800] : theme.palette.grey
              }}
            />
          ))}
        </Stack>
        <Accordion sx={{ mt: 2, bgcolor: 'transparent', boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Button variant="outlined" color="primary">
              View Details
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {details}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          {codeLink && (
            <Button
              href={codeLink}
              target="_blank"
              startIcon={<CodeIcon />}
              variant="text"
              color="secondary"
              sx={{ textTransform: 'none' }}
            >
              Code
            </Button>
          )}
          {liveDemoLink && (
            <Button
              href={liveDemoLink}
              target="_blank"
              startIcon={<LaunchIcon />}
              variant="contained"
              color="primary"
              sx={{ textTransform: 'none' }}
            >
              Live Demo
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
