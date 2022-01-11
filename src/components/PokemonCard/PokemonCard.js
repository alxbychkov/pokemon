import style from './style.module.css';
import backCard from '../../assets/img/card-back-side.jpg';
import { useState } from 'react';
import cn from 'classnames';

function PokemonCard({...props}) {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    };

    return (
        <div className={style.root} onClick={handleClick}>
            <div className={cn(style.pokemonCard, {[style.active]: isActive})}>
                <div className={style.cardFront}>
                    <div className={cn(style.wrap, style.front)}>
                        <div className={cn(style.pokemon, style[props.type])}>
                            <div className={style.values}>
                                <div className={cn(style.count, style.top)}>{props.values.top}</div>
                                <div className={cn(style.count, style.right)}>{props.values.right}</div>
                                <div className={cn(style.count, style.bottom)}>{props.values.bottom}</div>
                                <div className={cn(style.count, style.left)}>{props.values.left}</div>
                            </div>
                            <div className={style.imgContainer}>
                                <img src={props.img} alt={props.name} />
                            </div>
                            <div className={style.info}>
                                <span className={style.number}>#{props.id}</span>
                                <h3 className={style.name}>{props.name}</h3>
                                <small className={style.type}>Type: <span>{props.type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.cardBack}>
                    <div className={cn(style.wrap, style.back)}>
                        <img src={backCard} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;