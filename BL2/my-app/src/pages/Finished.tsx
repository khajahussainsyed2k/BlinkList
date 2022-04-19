import { Container } from '@mui/material';
import React from 'react'

import Header from '../components/organisms/AppBar/AppBar';
import Footer from '../components/organisms/Footer/Footer';
import NavTabs from '../components/organisms/NavTabs/NavTabs';
function Finished() {
  return (
    <Container>
    <Header/>
    <NavTabs/>
    <Footer/>
    </Container>
  )
}

export default Finished