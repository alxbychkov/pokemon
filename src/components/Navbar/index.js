import { useState } from 'react/cjs/react.development';
import style from './style.module.css';
import cn from 'classnames';

function Navbar({onOpenMenu, bgActive = false}) {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
        onOpenMenu && onOpenMenu(!isActive);
    }

    return (
        <nav className={cn({[style.bgActive]: bgActive})} id={style.navbar}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                LOGO
                </p>
                <div className={cn(style.menuButton, {[style.active]: isActive})} onClick={handleClick}>
                    <span />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;