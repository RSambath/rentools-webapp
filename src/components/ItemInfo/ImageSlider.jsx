import React from 'react';
import ImageGallery from 'react-image-gallery'; //npm i react-image-gallery
import '../../index.css';

function Item(props) {
  const image = props.images;

  return (
    <div className='w-[65%]'>

      <ImageGallery
        items={[{ original: image, thumbnail: image }]}
        disableArrowKeys={true}
        className="h-[200px]"
      />
    </div>
  );
}

export default Item;