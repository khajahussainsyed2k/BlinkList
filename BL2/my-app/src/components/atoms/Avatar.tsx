import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

interface AvatarProps{
    sx?:object;
  
}

const LetterAvatars = ({...props}:AvatarProps) => {
    return (
       
<Stack direction='row' marginLeft={50}>
            <Avatar sx={{ bgcolor: '#69A6E3'}} {...props}>A</Avatar>
            <KeyboardArrowDownOutlinedIcon sx={{marginTop:1}}></KeyboardArrowDownOutlinedIcon>
            </Stack>
        
    )
}
export default LetterAvatars