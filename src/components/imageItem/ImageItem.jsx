import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortCategory } from '../../redux/slices/sortSlice';

import style from './imageItem.module.scss';

function ImageItem({filter, title, img}) {
  const [active, setActive] = useState(false)

  const dispatch = useDispatch()

  const onClickImg = () => {
    setActive(prev => !prev)
  }

  const onClickShowFilter = () => {
    dispatch(setSortCategory(filter))
  }

  return (
    <div onClick={onClickImg} className={active ? style.active : style.block}>
       <img src={img} alt={title} />
       <button onClick={onClickShowFilter} className={style.filter}>{filter}</button>
       <h3 className={style.title}>{title}</h3>
    </div>
  )
}

export default ImageItem