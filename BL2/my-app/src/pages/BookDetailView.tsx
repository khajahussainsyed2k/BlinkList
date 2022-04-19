import React, { useEffect, useState } from 'react'
import Footer from '../components/organisms/Footer/Footer';
import Header from '../components/organisms/AppBar/AppBar';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { CardTypes } from '../components/molecules/Cards/Cards';
import axios from 'axios';
import { Box } from '@mui/system';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LibTab from '../components/organisms/LibTab/LibTab';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const BookDetailView = () => {

  const location = useLocation();
  const index: any = location.state;
  const navigate = useNavigate()
  const [APIData, setApiData] = useState<CardTypes>({})
  const getData = async () => {
    const cards = await axios.get(` http://localhost:3005/books/${index.id}`);
    setApiData(cards.data);

    console.log(cards.data)

  }
  useEffect(() => { getData() }, []);

  const finishedHandleClick = async (clickedCard: CardTypes) => {
    //console.log(cards.id)
    await axios.patch(`http://localhost:3005/books/${index.id}`, { state: 'Finished' })
    navigate('/')
  }
  const readNowHandleClick = async (clickedCard: CardTypes) => {
    //console.log(cards.id)
    await axios.patch(`http://localhost:3005/books/${index.id}`, { state: 'added to lib' })
    navigate('/')
  }

  return (
    <Container>

      <Grid container spacing={2} key={APIData.id}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <Typography variant='h4'>
              {APIData.title}
            </Typography>
            <Typography variant='subtitle1'>
              Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography variant='body1'>
              {APIData.author}
            </Typography>
            <Stack direction="row" spacing={1}>
              <AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>
              <Typography variant='body2'>
                {APIData.time}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={7} direction="row" sx={{ marginTop: 12 }}>
            <Button variant="outlined" sx={{ color: '#22C870' }} 
            onClick={(event) => readNowHandleClick(APIData)}>
              Read Now
            </Button>
            <Button variant="contained"
              sx={{ backgroundColor: '#2CE080', color: '#03314B', ":hover": { bgcolor: "#00C263"}}}
              onClick={(event) => finishedHandleClick(APIData)}
            >
              Finished Reading
            </Button>
            <Button variant="text" sx={{ color: '#6D787E' }} endIcon={<ArrowRightAltIcon />}>
              Send to Kindle
            </Button>

          </Stack>
          <Box sx={{ marginTop: 6 }}>
            <LibTab></LibTab></Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <img src={APIData.image} alt="" height='304' width='304' />
          </Box>
        </Grid>

      </Grid>


      <Footer />
    </Container >
   
  )}

export default BookDetailView