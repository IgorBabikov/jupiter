import style from './imageItem.module.scss';

function ImageItem({filter, title, img}) {
  return (
    <div className={style.block}>
       <img src={img} alt={title} />
       <button className={style.filter}>{filter}</button>
       <h3 className={style.title}>{title}</h3>
    </div>
  )
}

export default ImageItem