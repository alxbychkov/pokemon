import { useState } from "react";
import PokemonCard from "../../../../../../components/PokemonCard/PokemonCard";
import cn from "classnames";
import style from './style.module.css';

function PlayerBoard({player, cards, onClickCard}) {
    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {cards.map((item) => (
                <div 
                    className={cn(style.cardBoard, {[style.selected]: isSelected === item.id})}
                    onClick={() => {
                        setSelected(item.id);
                        onClickCard && onClickCard({...item, player})
                    }}
                    key={item.id}
                >
                    <PokemonCard 
                        key={item.id}
                        name={item.name}
                        img={item.img}
                        id={item.id}
                        type={item.type}
                        values={item.values}
                        isActive
                        minimize
                    />
                </div>
            ))}
        </>
    );
}

export default PlayerBoard;