import React from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import CampsitesList from './features/counter/CampsitesList';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
      <div className='App'>
          <Navbar dark color='primary' sticky='top' expand='md'>
              <Container>
                  <NavbarBrand href='/'>
                      <img src={NucampLogo} alt='nucamp logo' />
                  </NavbarBrand>
              </Container>
          </Navbar>
          <CampsitesList/>
          <Footer/>
      </div>
  );
}

export default App;
