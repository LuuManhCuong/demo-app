import Button from "../Button/Button";
import classNames from "classnames/bind";
import style from './nav.module.scss'

const cx = classNames.bind(style)

function Nav() {
  return (
      <div>
          <Button className={cx('nav_btn', 'active')} outline='true'>Motion trend pick</Button>
          <Button className={cx('nav_btn')} outline='true'>lastest</Button>
          <Button className={cx('nav_btn')} outline='true'>Recommended</Button>
      </div>
  );
}

export default Nav;
