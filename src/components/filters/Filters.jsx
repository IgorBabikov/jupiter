import style from './filters.module.scss';

const filters = [
  { name: 'Show All', type: 'all' },
  { name: 'Designl', type: 'design' },
  { name: 'Branding', type: 'branding' },
  { name: 'Illustration', type: 'illustration' },
  { name: 'Motion', type: 'motion' },
];

function Filters() {
  return (
    <ul className={style.filters}>
      {filters.map((item) => (
        <li className={style.item} key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
}

export default Filters;
