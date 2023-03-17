import PropTypes from 'prop-types';
import MediaRow from './MediaRow';
import {useEffect, useState} from "react";

const MediaTable = () => {

  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    const response = await fetch('test.json');
    const json = await response.json();
    //console.log(json);
    setMediaArray(json);
  };

  useEffect(()=>{
    try {
      getMedia();
    } catch (error) {
      console.log(error.message);
    }
  }, []);


  console.log(mediaArray);

  return (
    <table>
      <tbody>
      {mediaArray.map((item, index) => {
        return <MediaRow key={index} file={item} />;
      })}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {

};

export default MediaTable;
