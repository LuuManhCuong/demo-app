import classNames from "classnames/bind";
import style from "./card.module.scss";
import LikeView from "../LikeView/LikeView";

const cx = classNames.bind(style);

function Card({ title, thumbnail, userName, avatar, like, view }) {
  return (
    <div className={cx("wraper")}>
      <div className={cx("img")}>
        <img className={cx("thumbnail")} src={thumbnail} alt="thumbnail" />
        <h2 className={cx("title")}>{title}</h2>
      </div>

      <div className={cx("user")}>
        <div className={cx('user_infor')}>
          <img className={cx("user_avatar")} src={avatar} alt="avatar" />
          <h4 className={cx("user_name")}>{userName}</h4>
        </div>
        <LikeView like={"12"} view={"20"}></LikeView>
      </div>
    </div>
  );
}

export default Card;
