import { useState } from 'react';

import style from './imageItem.module.scss';

function ImageItem({filter, title, img}) {
  const [active, setActive] = useState(false)

  const onClickImg = () => {
    setActive(prev => !prev)
  }

  return (
    <div onClick={onClickImg} className={active ? style.active : style.block}>
       <img src={img} alt={title} />
       <button className={style.filter}>{filter}</button>
       <h3 className={style.title}>{title}</h3>
    </div>
  )
}

export default ImageItem