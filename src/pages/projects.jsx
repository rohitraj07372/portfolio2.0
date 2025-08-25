import { Box, Grid } from '@mui/material'
import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import project1 from '../assets/projectImage/calculator.png'
import LightRays from '../components/LightRays/LightRays'
const projects = ({darkMode}) => {
  return (
    <Box sx={{padding:2,    }}>
      {darkMode && (
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                }}
              >
                <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
                 
              </Box>
            )}
             <Grid container spacing={2}  >
              <Grid size={{xs:12,md:4}}>
                 <ProjectCard
  title="Interactive Calculator"
  description="A responsive and cool project."
  image={project1}
  tags={['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite']}
  details="Built with modern web tech. Includes smooth transitions, responsive layouts, and interactive elements lorenaeriyqweiahewiuryqweiyry]
  qeriqewptqewutq
  ewprtqewy[oituaewi[
  rqwuetio[weruqweiotyquwe
  rquewiyruf]]]."
  codeLink="https://github.com/example/repo"
  liveDemoLink="https://demo.example.com"
  darkMode={true}
/>
              </Grid>
             </Grid>
       
    </Box>
  )
}

export default projects
