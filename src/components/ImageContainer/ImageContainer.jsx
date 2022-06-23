import ImageItem from '../imageItem/ImageItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFetchData } from '../../redux/actions/data';
import { useEffect, useState } from 'react';
import { setLimit } from '../../redux/slices/sortSlice';
import style from './ImageContainer.module.scss';

function ImageContainer() {
  const [end, setEnd] = useState(false);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dataSlice);
  const { limit, category } = useSelector((state) => state.sortSlice);

  useEffect(() => {
    dispatch(setFetchData(limit, category));
  }, [limit, category]);


  const onClickMore = () => {
    dispatch(setLimit(limit + 9));

    let ended = false;

    if (data.length >= 8) {
      ended = true;
    }
    setEnd(ended);
  };

  return (
    <>
      <div className={style.items}>
        {data.map((item) => (
          <ImageItem key={item.id} {...item} />
        ))}
      </div>
      <div onClick={onClickMore} className={style.btn}>
        <button disabled={end}>Load More</button>
      </div>
    </>
  );
}

export default ImageContainer;
