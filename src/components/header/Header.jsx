import style from './header.module.scss';

function Header() {
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.inner}>
          <div className={style.logo}>
            <img src="img/logo.svg" alt="logo" />
          </div>

          <ul className={style.list}>
            <li className={style.item}>
              <a href="#">About</a>
            </li>
            <li className={style.item}>
              <a href="#">Services</a>
            </li>
            <li className={style.item}>
              <a href="#">Pricing</a>
            </li>
            <li className={style.item}>
              <a href="#">Blog</a>
            </li>
          </ul>

          <button className={style.btn}>Contact</button>
        </div>

        <div className={style.content}>
          <h1>Portfolio</h1>

          <p>
            Agency provides a full service range including technical skills, design, business
            understanding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
