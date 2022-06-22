import React from 'react';
import Filters from '../filters/Filters';
import ImgBlock from '../ImageContainer/ImageContainer';

function Main() {
  return (
    <div className="main">
      <div className="container">
        <Filters />
        <ImgBlock/>
      </div>
    </div>
  );
}


export default Main;
