import React, {useState} from 'react'
import {Box, Button} from '@mui/material'
import useForm from "../hooks/FormHooks.js";
import {useMedia} from "../hooks/ApiHooks.js";
import {useNavigate} from "react-router-dom";

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const {postMedia} = useMedia();
  const navigate = useNavigate();

  const initValues = {
    title: '',
    description: '',
  };

  const doUpload = async () => {
    try {
    const data = new FormData();
    data.append('title', inputs.title)
    data.append('description', inputs.description)
    data.append('file', file);
    const userToken = localStorage.getItem('userToken')
    const uploadResult = await postMedia(data, userToken);
    console.log('doUpload', uploadResult);
    navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  }

  const handleFileChange = (event) => {
    event.persist();
    console.log(event.target.files);
    setFile(event.target.files[0]);
  }

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doUpload,
    initValues
  );

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="title"
          value={inputs.title}>
        </input>
        <textarea
          name="description"
          value={inputs.description}>
        </textarea>
        <input
          onChange={handleFileChange}
          type="file" name="file"
          accept="image/*,video/*,audio/*"
        ></input>
        <Button type="submit">Upload</Button>
      </form>
    </Box>
    );
};

Upload.proptypes = {};

export default Upload;
