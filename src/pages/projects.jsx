import { Box } from '@mui/material'
import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import project1 from '../assets/projectImage/calculator.png'

const projects = () => {
  return (
    <Box>
        <ProjectCard
  title="Modern Web Portfolio"
  description="A responsive portfolio website with smooth animations and modern UI design."
  image={project1}
  tags={['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite']}
  details="Built with modern web tech. Includes smooth transitions, responsive layouts, and interactive elements."
  codeLink="https://github.com/example/repo"
  liveDemoLink="https://demo.example.com"
  darkMode={true}
/>
    </Box>
  )
}

export default projects
