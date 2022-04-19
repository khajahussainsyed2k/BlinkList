import { TextField, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import BookCard from "../BookCards/BookCards";
import { Container, Box, styled, Card, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
const useStyles = makeStyles({
  input: {
    width: "563.35px",
    fontStyle: "normal",
    fontFamily: "Cera Pro",
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: "700",
    margin: "0px 24px",
    order: "1",
    border: "white",
    "&:focus": {
      outline: "none",
    },
  },
});
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const style = useStyles();
  const IconNText = () => {
    return (
      <Grid container >
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            Search by title or author
          </Typography>
        </Grid>
      </Grid>

    )
  }
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(data => {
        // eslint-disable-next-line eqeqeq
        if (data != books)
          setBooks(data)
      }
      )
  }, [books, searchValue])
  return (
    <>
      <TextField
        label={<IconNText />}
        variant="standard"
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
        sx={{ "marginBottom": 1.8, width: "30%", marginLeft: "23%", "marginTop": 33 }} />



      <Grid container spacing={2} wrap="wrap" >
        {books.map((book: BookDetails) => {


          if (searchValue === '') {
            if (book.state !== 'Finished') {
              <Typography>Trsnding Blinks</Typography>
             
              return (
                <>
                
                <Grid item key={book.id} xs={12} sm={6} lg={4}>
                  <BookCard key={book.id}
                    id={book.id}
                    author={book.author}
                    title={book.title}
                    pic={book.image}
                    state={book.state}
                    reads={book.reads} time={book.time}
                    button='Add To Library'
                  ></BookCard>
                </Grid></>
              )
              }
          }
          else {
            if (book.state !== 'Finished') {
              if ((book.title).toLowerCase().includes(searchValue.toLowerCase())) {
                return (
                  <Grid item key={book.id} xs={12} sm={6} lg={4}>
                    <BookCard key={book.id}
                      id={book.id}
                      author={book.author}
                      title={book.title}
                      pic={book.image}
                      state={book.state}
                      reads={book.reads} time={book.time}
                      button='Add To Library'
                    ></BookCard>
                  </Grid>

                )
              }
              if ((book.author).toLowerCase().includes(searchValue.toLowerCase())) {
                return (
                  <Grid item key={book.id} xs={12} sm={6} lg={4}>

                    <BookCard key={book.id}
                      id={book.id}
                      author={book.author}
                      title={book.title}
                      pic={book.image}
                      state={book.state}
                      reads={book.reads} time={book.time}
                      button='Add To Library'
                    ></BookCard>
                  </Grid>
                )
              }
            }
          }
        })
        }
      </Grid>
    </>
  )
}
export default SearchBar;