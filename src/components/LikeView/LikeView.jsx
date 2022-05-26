import classNames from 'classnames/bind';
import style from "./likeView.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(style)
function LikeView({like, view}) {
    return ( 
        <div className={cx('wraper')}>
            <div className={cx('like_view')}>
                <FontAwesomeIcon className={cx('icon')} icon={faHeart}></FontAwesomeIcon>
                <span>{like}</span>
            </div>

            <div className={cx('like_view')}>
                <FontAwesomeIcon className={cx('icon')} icon={faEye}></FontAwesomeIcon>
                <span>{view}</span>
            </div>
        </div>
     );
}

export default LikeView;