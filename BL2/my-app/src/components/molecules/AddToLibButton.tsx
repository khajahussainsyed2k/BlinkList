import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { CardTypes } from './Cards/Cards'

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>,clickedCard:CardTypes) => void
    cards:CardTypes
}
const AddToLibButton = ({ handleClick,cards,...props }: ButtonProps) => {
    return (
        <>
        
        <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ marginTop: 1, width: '100%' }}
            onClick={(event) => handleClick(event,cards)}
            >
            Add to library
        </Button>
        
        </>
    )
}

export default AddToLibButton


