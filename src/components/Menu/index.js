import { Link } from 'react-router-dom';
import style from './style.module.css';
import cn from 'classnames';

function Menu({isShow, onOpenMenu}) {

    const handleClick = () => {
        onOpenMenu && onOpenMenu(false);
    }

    return (
        <div className={cn(style.menuContainer, {[style.active]: isShow === true, [style.deactive]: isShow === false})}>
            <div className={style.overlay} />
            <div className={style.menuItems}>
                <ul>
                <li>
                    <Link to={'/'} onClick={handleClick}>
                    HOME
                    </Link>
                </li>
                <li>
                    <Link to={'game'} onClick={handleClick}>
                    GAME
                    </Link>
                </li>
                <li>
                    <Link to={'about'} onClick={handleClick}>
                    ABOUT
                    </Link>
                </li>
                <li>
                    <Link to={'contact'} onClick={handleClick}>
                    CONTACT
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;