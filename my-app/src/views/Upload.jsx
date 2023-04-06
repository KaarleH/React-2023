import {Box, Button, Slider, Stack} from '@mui/material';
import useForm from '../hooks/FormHooks';
import {useState} from 'react';
import {useMedia, useTag} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';
import {appId} from "../utils/variables.js";

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(
    'https://placekitten.com/600/400'
  );
  const {postMedia} = useMedia();
  const {postTag} = useTag();
  const navigate = useNavigate();

  const initValues = {
    title: '',
    description: '',
  };

  const filterInitValues = {
    brightness: 50,
    contrast: 50,
    saturation: 50,
    sepia: 50,

  }

  const doUpload = async () => {
    try {
      const data = new FormData();
      data.append('title', inputs.title);
      data.append('description', inputs.description);
      data.append('file', file);
      const userToken = localStorage.getItem('userToken');
      const uploadResult = await postMedia(data, userToken);
      const tagResult = await postTag({file_id: uploadResult.file_id, tag: appId}, userToken);
      console.log('doUpload', uploadResult);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFileChange = (event) => {
    event.persist();
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setSelectedImage(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doUpload,
    initValues
  );

  const {inputs: filterInputs, handleInputChange: handleFilterChange} = useForm(null, filterInitValues);
  //console.log('Upload', inputs, file);

  return (
    <Box>
      <img src={selectedImage} alt="preview" style={{
        width: 300,
        height: 300,
        filter: `
        brightness(${filterInputs.brightness}%)
        contrast(${filterInputs.contrast}%)
        saturate(${filterInputs.saturation}%)
        sepia(${filterInputs.sepia}%)
        `,
      }} />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="title"
          value={inputs.title}
        ></input>
        <textarea
          onChange={handleInputChange}
          name="description"
          value={inputs.description}
        ></textarea>
        <input
          onChange={handleFileChange}
          type="file"
          name="file"
          accept="image/*,video/*,audio/*"
        ></input>
        <Button type="submit">Upload</Button>
      </form>
      <Stack>
      <Slider
        name="brightness"
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={handleFilterChange}
        value={filterInputs.brightness}
      />
      <Slider
        name="contrast"
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={handleFilterChange}
        value={filterInputs.contrast}
      />
      <Slider
        name="saturation"
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={handleFilterChange}
        value={filterInputs.saturation}
      />
      <Slider
        name="sepia"
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={handleFilterChange}
        value={filterInputs.sepia}
      />
      </Stack>
    </Box>
  );
};

Upload.propTypes = {};

export default Upload;
