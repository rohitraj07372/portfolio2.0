 import React   from 'react'

 
import {Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';

const Home = lazy(()=> import('./pages/home'));
const About = lazy(()=> import('./pages/about'));
const ContactUs = lazy(()=> import('./pages/contactUs'));
const Youtube = lazy(()=> import ('./pages/youtube'));




 const App = () => {
   return (
     <Box>
      <Box>
        <Navbar menuItems={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Projectss' ,path: '/projects' },
          { label: 'Youtube', path: '/youtube' },
          { label: 'Contact Us', path: '/contactus' },
          { label: 'Youtube', path: '/youtube' }
        ]}/>
      </Box>
      dsafd
      <Box>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/youtube' element={<Youtube/>}/>
          </Routes>
        </Suspense>
       
       </Box>
     </Box>
   )
 }
 
 export default App
 