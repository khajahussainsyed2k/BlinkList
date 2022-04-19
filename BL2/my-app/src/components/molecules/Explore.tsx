import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Button, IconButton, Modal, Paper, Stack } from '@mui/material';
import { Typography } from '@mui/material';
import ExploreTabs from './ExploreTabs/ExploreTabs';
const Explore=()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack direction='row'>
      
            <Typography variant='body1' mt={1}>Explore</Typography>
            <IconButton onClick={handleOpen}>
                <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                </IconButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    BackdropProps={{style: {top: "70px"}}}
                    disableScrollLock={true}
                >
                    <Paper sx={{position: 'absolute' as 'absolute',"fullwidth":"true",top:'7%',bgcolor:'#F1F6F4'}}>
                            <ExploreTabs />
                    </Paper>
                </Modal>
            </Stack>
  )
}

export default Explore