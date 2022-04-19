import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

import Header from '../components/organisms/AppBar/AppBar'
import BookCard from '../components/organisms/BookCards/BookCards'
import CurrentlyReadingTab from '../components/organisms/CurrentlyReadingTab/CurrentlyReadingTab'
import Footer from '../components/organisms/Footer/Footer'

const CurrentlyReading=()=> {
  return (
    <>
    <Header></Header>
    <Container sx={{marginTop:4}}>
      <Stack spacing={5}>
        
        <Typography variant='h3' sx={{color:'#03314B'}}>My Library</Typography>
        <CurrentlyReadingTab/>
        <Footer></Footer>
        </Stack>

    </Container></>
  )
}

export default CurrentlyReading