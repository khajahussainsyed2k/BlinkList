import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LetterAvatars from '../../atoms/Avatar';
import { createTheme } from '@mui/material';
import Explore from '../../molecules/Explore';
import { ThemeProvider } from '@mui/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
interface AppBarProps{
    color?:string|any;
    sx?:object
}

const Header = ({...props}:AppBarProps) => {

    return (
        
        <AppBar elevation={0} position='sticky' sx={{backgroundColor:'#FFFFFF',color:'black',paddingLeft:9,maxWidth:1200,marginLeft:30}}  enableColorOnDark={true} {...props}>
            <Toolbar>
                <Stack direction='row' spacing={10}>
                    <img src='http://127.0.0.1:8887/Blinklist.png' alt='bl-img' width={125} height={26} style={{paddingTop:8}}/>
                    <SearchOutlinedIcon sx={{paddingTop:1}}/>
                    <Explore></Explore>

                    <Typography variant='body1' pt={1}>My Library</Typography>
                    </Stack>
                    <LetterAvatars></LetterAvatars>
                    
                
            </Toolbar>
        </AppBar>
    )
}

export default Header