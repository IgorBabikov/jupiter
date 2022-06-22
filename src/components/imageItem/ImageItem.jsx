import style from './imageItem.module.scss';

function ImageItem() {
  return (
    <div className={style.block}>
       <img src="img/image-item.png" alt="item" />
       <button className={style.filter}>Design</button>
       <h3 className={style.title}>SOFA</h3>
    </div>
  )
}

export default ImageItem