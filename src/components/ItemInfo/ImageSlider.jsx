import React from 'react';
import ImageGallery from 'react-image-gallery'; //npm i react-image-gallery
import '../../index.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://via.placeholder.com/150',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  }
];

function Item() {
  return (
    <div className='w-[65%]'>
        
        <ImageGallery 
            items={images} 
            disableArrowKeys={true}
            className="h-[200px]"
        />
    </div>
  );
}

export default Item;