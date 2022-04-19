import { Card, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
interface BannerProps{
    raised?:boolean;
    sx?:object;
    backgroundColor?: string;
}
const Banner = ({...props}:BannerProps) => {
    return (
<Box alignContent='centre'>
        <Card sx={{ backgroundColor: '#F1F6F4', height: 264 }}{...props}>
            <Stack direction='row'>
                <CardContent>
                    <Box sx={{ width: 319, height: 90 }}>
                        <Typography variant='h4'>Explore Books on entrepreneurship</Typography></Box>
                    <Box sx={{ width: 461, height: 69, marginTop:1}}>
                        <Typography
                            variant='subtitle2'
                            fontFamily='Cera Pro'
                            fontWeight='400'
                            fontStyle='normal'
                            fontSize='18px'
                            lineHeight='22.63px'
                            color='#6D787E'
                           
                        >
                            Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.
                        </Typography>
                    </Box>
                </CardContent>

                <CardMedia
                    component="img"
                    sx={{ width: '249px', height: '230px', marginLeft: '20%' }}
                    image="http://127.0.0.1:8887/explore.png"
                    alt="Live from space album cover"
                /></Stack>

        </Card ></Box>
    )
}

export default Banner