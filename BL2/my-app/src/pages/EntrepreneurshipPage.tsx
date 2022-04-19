import React from 'react'
import logo from './logo.svg';


import Header from '../components/organisms/AppBar/AppBar';

import { Container, Stack } from '@mui/material';
import Banner from '../components/molecules/Banner/Banner';
import ExploreTabs from '../components/molecules/ExploreTabs/ExploreTabs';
import Footer from '../components/organisms/Footer/Footer';
import RenderCards from '../components/organisms/RenderCards';
import SearchBar from '../components/organisms/SearchBar/SearchBar';

const EntrepreneurshipPage=()=> {
  return (
    <>
    <Header></Header>
    <Container>
    
      <Stack spacing={3} marginTop={4}>

        
        <Banner></Banner>
         <SearchBar/>
         <Footer></Footer>
         </Stack>
    </Container>
    </>
  )
}

export default EntrepreneurshipPage