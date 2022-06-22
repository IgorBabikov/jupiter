import ImageItem from '../imageItem/ImageItem';

import style from './ImageContainer.module.scss';

function ImageContainer() {
  return (
    <>
      <div className={style.ImageContainer}>
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
      </div>

      <div className={style.btn}>
        <button >Load More</button>
      </div>
    </>
  );
}

export default ImageContainer;
