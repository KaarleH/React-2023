import React from 'react'
import {Box, Button} from '@mui/material'

const Upload = (props) => {
  return (
    <Box>
      <form>
        <input type="text" name="title" value="title"></input>
        <textarea name="textarea"></textarea>
        <input type="file" name="file" accept="image/* video/* audio/*"></input>
        <Button type="submit">Upload</Button>
      </form>
    </Box>
    );
};

Upload.proptypes = {};

export default Upload;
