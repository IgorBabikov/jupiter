import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { setDeleteItem } from '../../redux/actions/data';
import { setSortCategory } from '../../redux/slices/sortSlice';
import { deteleData } from '../../services/deleteData';

import style from './imageItem.module.scss';

const ImageItem = memo(function ImageItem({ id, filter, title, img }) {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  const onClickImg = () => {
    setActive((prev) => !prev);
  };

  const onClickShowFilter = () => {
    dispatch(setSortCategory(filter));
  };

  const onDeleteItem = async (id) => {
    if (window.confirm('Вы точно хотите удалить?')) {
      dispatch(setDeleteItem(id));
      deteleData(id)
    }
  };

  return (
    <div onClick={onClickImg} className={active ? style.active : style.block}>
      <img src={img} alt={title} />
      <button onClick={onClickShowFilter} className={style.filter}>
        {filter}
      </button>
      <h3 className={style.title}>{title}</h3>

      {active ? (
        <button onClick={() => onDeleteItem(id)} className={style.delete}>
          Del
        </button>
      ) : null}
    </div>
  );
});

export default ImageItem;
