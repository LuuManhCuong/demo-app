import classNames from "classnames/bind";
import style from "./header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";
import { logo } from "../../assets";

const cx = classNames.bind(style);

function Header() {
  let listNav = ["editing", "camera action, angle", "sound, beat", "graphical", "experimental", "element", "car", "gun"]
  return (
    <><div className={cx("wraper_header")}>
      <div className={cx("logo")}>
        <img src={logo}></img>

        <ul className={cx("menu")}>
          <li>Discover</li>
          <li>Job</li>
        </ul>
      </div>

      <div className={cx("search")}>
        <input type="text" placeholder="Search for motion trend..." />
      </div>

      <div className={cx('icon-nav')}>
        <FontAwesomeIcon
          className={cx("search_icon")}
          icon={faMagnifyingGlass}
        ></FontAwesomeIcon>

        <Button outline="false" href="#">
          Login
        </Button>

        <Button outline="false" href="#">
          Sign up
        </Button>
      </div>

    </div>
    
    <ul className={cx("wraper_list")}>
        {listNav.map((itemNav, index) => (
            <li key={index} className={cx('wraper_item')}>
              <Button className={cx('btn_item')}>{itemNav}</Button>
            </li>
        ))}
      </ul></>
  );
}

export default Header;
