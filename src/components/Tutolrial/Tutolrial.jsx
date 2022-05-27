import classNames from "classnames/bind";
import style from "./tutolrial.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import LikeView from "../LikeView/LikeView";
import Button from "../Button/Button";

const cx = classNames.bind(style);

function Tutolrial() {
  return (
    <div className={cx("wraper")}>
      <div className={cx("content")}>
        <h4>Tutolrial</h4>
        <h2>
          quia et suscipit\nsuscipit recusandae consequuntur expedita et
          cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
          sunt rem eveniet architecto
        </h2>
        <Button primary="true">What Now</Button>
      </div>

      <div className={cx("content", "video")}>
        <img
          className={cx('img_video')}
          src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/C7A28626-004F-45A9-9B53-5C56B3BC8A29-optimized.png"
          alt="video"
        />
        <FontAwesomeIcon
          className={cx("play_icon")}
          icon={faPlay}
        ></FontAwesomeIcon>
      </div>

      <div className={cx("content", "suggest_list")}>
        <div className={cx("suggest_item")}>
          <img
            src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/EAFFE3F2-2C3C-4524-82AF-B1821BF04A0D-optimized.png"
            alt=""
          />
          <div className={cx("context")}>
            <h3>Tutolrial</h3>
            <p>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>
            <LikeView like={"18"} view="30"></LikeView>
          </div>
        </div>
        <div className={cx("suggest_item")}>
          <img
            src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/EAFFE3F2-2C3C-4524-82AF-B1821BF04A0D-optimized.png"
            alt=""
          />
          <div className={cx("context")}>
            <h3>Tutolrial</h3>
            <p>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>

            <LikeView like={"18"} view="30"></LikeView>
          </div>
        </div>
        <div className={cx("suggest_item")}>
          <img
            src="https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/EAFFE3F2-2C3C-4524-82AF-B1821BF04A0D-optimized.png"
            alt=""
          />
          <div className={cx("context")}>
            <h3>Tutolrial</h3>
            <p>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et
              cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
              autem sunt rem eveniet architecto
            </p>

            <LikeView like={"18"} view="30"></LikeView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutolrial;
