import ImageItem from '../imageItem/ImageItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFetchData } from '../../redux/actions/data';
import { useEffect } from 'react';
import style from './ImageContainer.module.scss';

function ImageContainer() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dataSlice);
  const { limit, category } = useSelector((state) => state.sortSlice);

  useEffect(() => {
    dispatch(setFetchData(limit, category));
  }, [limit, category]);

  return (
    <>
      <div className={style.items}>
        {data.map((item) => (
          <ImageItem key={item.id} {...item} />
        ))}
      </div>

      <div className={style.btn}>
        <button>Load More</button>
      </div>
    </>
  );
}

export default ImageContainer;
