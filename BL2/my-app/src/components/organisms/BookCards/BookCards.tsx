import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, buttonBaseClasses, Grid, Stack } from '@mui/material';
import ButtonComponent from '../../atoms/ButtonComponent';
import axios from 'axios';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from "react-router-dom";
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
interface Props {
  id: number;
  title: string;
  pic: string;
  author: string;
  state: string;
  button?: string;
  reads?: string;
  time?: string;
  page?: string;
}

const BookCard = (props: Props) => {
  var index = props.id;
  var bookState = props.state;
  const navigate = useNavigate();
  const handleClick = async () => {
    if (props.button === 'Add To Library') {
      navigate('/BookDetailViewPage', { state: { id: index } });
    }
    else {
      if (bookState === "added to lib") {
        await axios.patch(`http://localhost:3005/books/${index}`, { state: 'Finished' })
      }


      else if (bookState === "Finished") {
        await axios.patch(`http://localhost:3005/books/${index}`, { state: 'added to lib' })
      }

      window.location.reload();

    }
  }

  if (props.page === 'Currently Reading') {
    return (
      <Card>
        <CardMedia
          component="img"
          height='292'
          image={props.pic}
          alt={props.title}
        />
        <CardContent sx={{ alignContent: 'left' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography component='div'>
            {props.author}
          </Typography>
        </CardContent>

        <Stack direction='row' spacing={1}>

          <AccessTimeIcon />
          <Typography variant="body2" pt={0.25}>
            {props.time}
          </Typography>

          {(() => {
            if (props.reads) {
              return (
                <Box sx={{ paddingLeft: 12 }}>
                  <Stack direction='row' spacing={1}>
                    <PersonOutlineOutlinedIcon />

                    <Typography variant="body2" pt={0.25}>
                      {props.reads}
                    </Typography>
                  </Stack></Box>
              )
            }
          })()
          }
        </Stack>
        <ButtonComponent onClick={handleClick}
          fullWidth={true}
          sx={{ ":hover": { bgcolor: "#0365F2", color: "#ffffff" }, "margin": 0, marginTop: 2 }}
        >
          {props.button}
        </ButtonComponent>


        <Box
          sx={{
            width: 95,
            height: 15,
            position: "absolute",
            backgroundColor: '#E1ECFC',
            borderRadius: "0px 0px 0px 8px",
          }} /><Box
          sx={{
            width: "100%",
            height: 15,
            backgroundColor: '#F1F6F4',
            borderRadius: "0px 0px 8px 8px",
            border: "1px solid #E1ECFC"
          }} />
      </Card>
    );
  }
  else {
    return (
      <Card>
        <CardMedia
          component="img"
          height='292'
          image={props.pic}
          alt={props.title}
        />
        <CardContent sx={{ alignContent: 'left' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography component='div'>
            {props.author}
          </Typography>

        </CardContent>
        <Stack direction='row' spacing={1} paddingLeft={2}>

          <AccessTimeIcon />
          <Typography variant="body2" pt={0.25}>
            {props.time}
          </Typography>

          {(() => {
            if (props.reads) {
              return (
                <Box sx={{ paddingLeft: 12 }}>
                  <Stack direction='row' spacing={1}>
                    <PersonOutlineOutlinedIcon />

                    <Typography variant="body2" pt={0.25}>
                      {props.reads}
                    </Typography>
                  </Stack></Box>
              )
            }
          })()
          }
        </Stack>
        {(() => {
          if (props.state === 'added to lib') {
            return (
              <>
                <Stack alignItems='flex-end' marginTop={1.5}><MoreHorizTwoToneIcon /></Stack>
                <Box
                  sx={{
                    width: 95,
                    height: 15,
                    position: "absolute",
                    backgroundColor: '#E1ECFC',
                    borderRadius: "0px 0px 0px 8px",
                  }} /><Box
                  sx={{
                    width: "100%",
                    height: 15,
                    backgroundColor: '#F1F6F4',
                    borderRadius: "0px 0px 8px 8px",
                    border: "1px solid #E1ECFC"
                  }} />
              </>
            )
          }
          else if (props.state === '') {
            return (
              <ButtonComponent onClick={handleClick}
                fullWidth={true}
                sx={{ ":hover": { bgcolor: "#0365F2", color: "#ffffff" }, "margin": 0 , marginTop: 2}}
              >
                {props.button}
              </ButtonComponent>
            )
          }

        })()}
      </Card>
    )
  }
}
export default BookCard;