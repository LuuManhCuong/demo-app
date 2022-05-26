import classNames from "classnames/bind";
import style from "./cardLayout.module.scss";
import Card from "../card/Card";
import { imgArr } from "../../assets";

const cx = classNames.bind(style);

function CardLayout() {
  return (
    <div className={cx("wraper")}>
      {imgArr.map((img, index) => (
        <Card
          key={index}
          title={"accusamus beatae ad facilis cum similique qui sunt"}
          thumbnail={img}
          userName={"Nguyễn Thị Thu Hằng"}
          avatar={
            "https://anhdephd.vn/wp-content/uploads/2022/02/anh-avatar-cute-dep-ngau.jpg"
          }
        ></Card>
      ))}
    </div>
  );
}

export default CardLayout;
