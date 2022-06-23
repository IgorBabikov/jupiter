import { useSelector, useDispatch } from 'react-redux';
import { setSortCategory } from '../../redux/slices/sortSlice';
import style from './filters.module.scss';

const filtersItems = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];

function Filters() {
  const screenWidth = window.screen.width;
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.sortSlice);

  const onClickFilter = (type) => {
    dispatch(setSortCategory(type));
  };

  return screenWidth <= 1040 ? (
    <div className={style.select}>
      <select onChange={(e) => onClickFilter(e.target.value)} name="select">
        {filtersItems.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <img src="img/arrow.svg" alt="arrow-down" />
    </div>
  ) : (
    <ul className={style.list}>
      {filtersItems.map((item) => (
        <li
          onClick={() => onClickFilter(item)}
          className={category === item ? style.active : style.item}
          key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Filters;
