import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    disabled = false,
    secondary = false,
    fb = false,
    gg = false,
    text = false,
    rounded = false,
    roundedBlack = false,
    keyword = false,
    small = false,
    grey,
    large,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,

    label,
    active = false,
    hide = false,
    choose = false,
    outline = false,
    noOutline = false,
    tag = false,
    circle = false,
    underline = false,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        large,
        disabled,
        text,
        fb,
        gg,
        rounded,
        roundedBlack,
        keyword,
        small,
        grey,

        label,
        active,
        hide,
        choose,
        outline,
        noOutline,
        tag,
        circle,
        underline,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
