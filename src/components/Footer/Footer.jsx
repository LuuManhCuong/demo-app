import classNames from "classnames/bind";
import Button from "../Button/Button";
import style from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx("footer")}>
        <Button
            primary='false'
        outline="true">contact</Button>
        <h2>copyright... @2022</h2>
      
    </div>
  );
}

export default Footer;
