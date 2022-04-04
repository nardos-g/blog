import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {NavBar} from './components/NavBar';
import { Leftbar } from './components/LeftBar';
import { Rightbar } from './components/RightBar';
import { Container, Grid } from '@mui/material';
import { blue, red } from '@mui/material/colors';

function App() {
  const [menu, setMenu] = useState(false);
  const callme = () => {
    setMenu(!menu);
  }
  return (
    <>
      <NavBar callme={callme}/>
      <Grid container sx={{mt: 8}} rowSpacing={2} >

        <Grid item  md={2}>
          <Leftbar menu={menu} callme={callme}/>
        </Grid>

        <Grid item
          xs={12}
          md={7}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            // bgcolor: red[200],
          }}
        >
          <Router>
              {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/' element={<Home />} />
              </Routes>  */}
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
              </div>
          </Router>

        </Grid>

        <Grid
        item md={3}
        sx={{
          display: {xs:'none', md:'block'},
          zIndex: 1000,
          right: 0
        }}>
          <Rightbar />
        </Grid>

      </Grid>
    </>
  )
}

export default App;
