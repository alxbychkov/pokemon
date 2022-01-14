import Layout from "../../../../components/Layout/Layout";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import style from './style.module.css';
import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../../../../context/FirebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useHistory } from "react-router-dom";

function StartPage() {
    const firebase = useContext(FirebaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        })

        return () => firebase.offPokemonSocket();
    }, []);

    const handleChangeSelected = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonsContext.onSelectedPokemons(key, pokemon);

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }

    const handleStartGameClick = () => {
        history.push('/game/board');
    }

    return (
        <>
            <Layout
                id="cards"
                title="Play the game!"
                colorBg='#e2e2e2'
            >
                <div className={style.buttonWrap}>
                    <button onClick={handleStartGameClick}
                        disabled={Object.keys(pokemonsContext.pokemons).length < 5}
                    >Start Game</button>
                </div>
                <div className={style.grid}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => <PokemonCard
                        className={style.card} 
                        key={key}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        isActive={true}
                        isSelected={selected}
                        onClickCard={() => {
                            if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                handleChangeSelected(key)
                            }
                        }}
                    />)
                }
                </div>
            </Layout>
        </>
    );
}

export default StartPage;