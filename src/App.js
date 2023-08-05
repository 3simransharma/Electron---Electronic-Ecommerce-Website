import React from 'react'
import ResponsiveDrawer from "./components/ResponsiveDrawer"
import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';

import Home from "./pages/Home"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"

const App = () => {
  
  return (
    <div>
      <ResponsiveDrawer/>
      <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </Routes>
    </div>
  )
}

export default App