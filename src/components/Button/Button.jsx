import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

// ...passProps truyền những tham số còn lại vào 
function Button({ to, primary = false, outline = false, href, children, onClick, ...passProps}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps
    }

    if(to) {
        props.to = to;
        Comp = 'a';
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    // class trong {} lúc có lúc không tùy vào logic 
    const classes = cx('wrapper', {
        primary,
        outline
    })

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;