
import React, { useEffect, useState } from 'react'

import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { CardTypes } from '../molecules/Cards/Cards';
import axios from 'axios';
import { Box } from '@mui/system';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import { useNavigate } from 'react-router-dom';
import BookCard from './BookCards/BookCards';
interface BookDetails {
  id: number;
  title: string;
  image: string;
  author: string;
  state: string;
  category: string;
  reads: string;
  time: string
}
interface TemplateTypes {
  tab?: string;

}
const RenderCards = ({ ...props }: TemplateTypes) => {
  const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState<CardTypes[]>([]);
  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())

        })
        setFilteredResults(filteredData)

    }
    else {
        setFilteredResults(APIData)

    }

}
  const [APIData, setApiData] = useState([])
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const cards = await axios.get(' http://localhost:3005/books');
    setApiData(cards.data);

  }
  if (props.tab === 'currentlyReading') {
    return (

      <>

        <Grid container spacing={2} marginLeft={0}>
          {APIData.map((book: BookDetails) => {

            if (book.state === 'added to lib') {

              return (
                <Grid item key={book.id} xs={12} sm={6} lg={4}>
                  <BookCard key={book.id}
                    id={book.id}
                    author={book.author}
                    title={book.title}
                    pic={book.image}
                    state={book.state} reads={book.reads} time={book.time}
                    button='finished'
                    page='Currently Reading'
                  ></BookCard>
                </Grid>
              )
            }
          }
          )}</Grid>


      </>
    )
  }
  else{
    return (
      <>
        <Grid container spacing={2}>
          {APIData.map((book: BookDetails) => {

            if (book.state === 'Finished') {

              return (
                <Grid item key={book.id} xs={12} sm={6} lg={4}>
                  <BookCard key={book.id}
                    id={book.id}
                    author={book.author}
                    title={book.title}
                    pic={book.image}
                    state={book.state}
                    reads={book.reads} time={book.time}
                    button='read again'
                    page='Currently Reading'
                  ></BookCard>
                </Grid>
              )
            }
          }
          )}</Grid>
      </>
    )
  }
  

}

export default RenderCards