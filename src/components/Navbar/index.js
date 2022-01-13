import { Link } from 'react-router-dom';
import style from './style.module.css';
import cn from 'classnames';

function Navbar({onOpenMenu, bgActive = false, isShow}) {
    const handleClick = () => {
        onOpenMenu && onOpenMenu(!isShow);
    }

    return (
        <nav className={cn({[style.bgActive]: bgActive})} id={style.navbar}>
            <div className={style.navWrapper}>
                <Link className={style.brand} to={'/'} onClick={() => {isShow && onOpenMenu(!isShow)}}>
                LOGO
                </Link>
                <div className={cn(style.menuButton, {[style.active]: isShow})} onClick={handleClick}>
                    <span />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;