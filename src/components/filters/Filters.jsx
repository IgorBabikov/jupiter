import { useState } from 'react';
import style from './filters.module.scss';

const filtersItems = [
  { name: 'Show All', type: 'all' },
  { name: 'Designl', type: 'design' },
  { name: 'Branding', type: 'branding' },
  { name: 'Illustration', type: 'illustration' },
  { name: 'Motion', type: 'motion' },
];

function Filters() {
  const screenWidth = window.screen.width;

  return screenWidth <= 1040 ? (
    <div className={style.select}>
      <select name="select">
        {filtersItems.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <img src="img/arrow.svg" alt="arrow-down" />
    </div>
  ) : (
    <ul className={style.list}>
      {filtersItems.map((item) => (
        <li className={style.item} key={item.name}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Filters;
