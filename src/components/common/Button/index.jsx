import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function ButtonComponent({text, isOutlined}) {
  return (
    <div className='button'>
        {isOutlined ? <Button sx={{backgroundColor: "rgb(128, 128, 128,0.8)", color:"white", border:"none"}} variant="outlined" startIcon={<InfoOutlinedIcon />}>
        {text}
      </Button> :
      <Button sx={{backgroundColor: "white", color:"black"}} variant="contained" startIcon={
        <PlayArrowRoundedIcon />}>
        {text}
        </Button>
      }
    </div>
  );
}

export default ButtonComponent;