import { useHistory } from 'react-router-dom';
import style from './style.module.css';

function Header({title, desc, onClickButton}) {
    const history = useHistory();

    const handleClick = () => {
        history.push('/game');
    }

    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.silhouette}></div>
            <div className={style.moon}></div>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button onClick={handleClick}>Start Game</button>
            </div>
        </header>
    );
}

export default Header;