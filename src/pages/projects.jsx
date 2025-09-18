import { Box, Grid } from '@mui/material'
import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import calculator from '../assets/projectImage/calculator.PNG'
import passwordgen from '../assets/projectImage/password.PNG'
import ticTacToe from '../assets/projectImage/tictacj.PNG'
import wheatherApp from '../assets/projectImage/weather.PNG'
import dev from '../assets/projectImage/dev.PNG'
import magic from '../assets/projectImage/maths.PNG'
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
 
  image={calculator}
  tags={['HTML', 'CSS', 'JAVASCRIPT','TAILWIND CSS']}
  details="The Classic Calculator project is a straightforward and user-friendly web application that emulates the functionality of a traditional calculator. This project is designed to provide users with a simple and intuitive platform for performing basic mathematical calculations."
  codeLink="https://github.com/rohitraj07372/Js_projects/tree/master/Classic_Calculator"
  liveDemoLink="https://rohitraj07372.github.io/Js_projects/Classic_Calculator/"
  darkMode ={darkMode}
/>
 
              </Grid>

              {/* password generator */}

                            <Grid size={{xs:12,md:4}}>
                 <ProjectCard
  title="Password Generator"
   
  image={passwordgen}
  tags={['HTML', 'CSS', 'JAVASCRIPT','TAILWIND CSS']}
  details="Password Generator is a dynamic web application that empowers users to create robust and secure passwords tailored to their specifications. The app features an intuitive interface with customizable parameters, ensuring users generate passwords meeting their unique security requirements."
  codeLink="https://github.com/rohitraj07372/Js_projects/tree/master/Password%20Generator"
  liveDemoLink="https://rohitraj07372.github.io/Js_projects/Password%20Generator/"
  darkMode ={darkMode}
/>
 
              </Grid>

              {/* tic tac toe */}
                 <Grid size={{xs:12,md:4}}>
                 <ProjectCard
  title="TIC TAC TOE"
 
  image={ticTacToe}
  tags={['HTML', 'CSS', 'JAVASCRIPT','TAILWIND CSS']}
  details="Experience classic gaming with the Tic Tac Toe Web Game, a user-friendly web application that brings the timeless game to your browser. This project is designed for simplicity and fun, offering an engaging way to enjoy the strategic challenges of Tic Tac Toe."
  codeLink="https://github.com/rohitraj07372/Js_projects/tree/master/TicTacToe"
  liveDemoLink="https://github.com/rohitraj07372/Js_projects/tree/master/TicTacToe"
  darkMode ={darkMode}
/>
 
              </Grid>

              {/* WEATHER APP  */}

                 <Grid size={{xs:12,md:4}}>
                 <ProjectCard
  title="WEATHER APP"
 
  image={wheatherApp}
  tags={['HTML', 'CSS', 'JAVASCRIPT','TAILWIND CSS']}
  details="Weather app is a versatile weather application that provides users with real-time weather information for their current location and any location worldwide. This user-friendly app combines functionality and simplicity, ensuring users stay informed about weather conditions with ease."
  codeLink="https://github.com/rohitraj07372/Js_projects/tree/master/Weather_app"
  liveDemoLink="https://rohitraj07372.github.io/Js_projects/Weather_app/"
  darkMode ={darkMode}
/>
 
              </Grid>

              {/* dev detective  */}
                 <Grid size={{xs:12,md:4}}>
                 <ProjectCard
  title="Dev Detective"
 
  image={dev}
  tags={['HTML', 'CSS', 'JAVASCRIPT','TAILWIND CSS']}
  details="Dev Detective is an innovative web application designed to streamline the process of exploring GitHub profiles. Users can effortlessly search any GitHub account and gain valuable insights into developers' activity, repositories, and followers and followings information."
  codeLink="https://github.com/rohitraj07372/Js_projects/tree/master/dev_detective"
  liveDemoLink="https://rohitraj07372.github.io/Js_projects/dev_detective/"
  darkMode ={darkMode}
/>
 
              </Grid>

              {/* magic maths  */}

                 <Grid size={{xs:12,md:4}}>
                 <ProjectCard
  title="MAGIC MATHS"
 
  image={ticTacToe}
  tags={['HTML', 'CSS', 'JAVASCRIPT','TAILWIND CSS']}
  details="Experience the enchantment of Math Magic, a captivating web project that combines mathematics and mind-reading for an interactive and intriguing experience. Follow the on-screen instructions, and witness the app attempt to predict your thoughts through a series of mathematical operations."
  codeLink="https://github.com/rohitraj07372/Js_projects/tree/master/mathMagic"
  liveDemoLink="https://rohitraj07372.github.io/Js_projects/mathMagic/"
  darkMode ={darkMode}
/>
 
              </Grid>
             </Grid>
       
    </Box>
  )
}

export default projects
