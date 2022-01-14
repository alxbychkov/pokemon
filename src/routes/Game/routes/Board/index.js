import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext, useState } from 'react/cjs/react.development';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';
import PlayerBoard from './component/PlayerBoard/PlayerBoard';
import style from './style.module.css';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        if (item.card.possession === 'red') {
            player2Count++;
        }
        if (item.card.possession === 'blue') {
            player1Count++;
        }
    });

    return [player1Count, player2Count];
}

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);
    const history = useHistory();
    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item,
            possession: 'blue'
        }))
    });
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);

    if (Object.keys(pokemons).length === 0) {
        history.replace('/game');
    }

    useEffect(() => {
        getBoard();
    }, []);

    const getBoard = async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();

        setBoard(boardRequest.data);
        
        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();

        setPlayer2(() => {
            return player2Request.data.map(item => ({
                ...item,
                possession: 'red'
            }))
        });
    }


    const handleClickBoardPlate = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                     body: JSON.stringify(params),
                 });
            const request = await res.json();

            setBoard(request.data);

            if (choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            if (choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            });
        }
    }

    useEffect(() => {
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);

            if (count1 > count2) {
                alert('WIN');
            } else if (count1 < count2) {
                alert('LOSE');
            } else {
                alert('DRAW');
            }
        }
    }, [steps]);

    return (
        <div className={style.root}>
            <div className={style.playerOne}>
                <PlayerBoard player={1} cards={player1} onClickCard={(card) => setChoiceCard(card)} />
            </div>
            <div className={style.board}>
                {
                    board.map(item => (
                        <div 
                            className={style.boardPlate} 
                            key={item.position}
                            onClick={() => !item.card && handleClickBoardPlate(item.position)}
                        >{
                            item.card && <PokemonCard {...item.card} isActive minimize />
                        }</div>
                    ))
                }
            </div>
            <div className={style.playerTwo}>
                <PlayerBoard player={2} cards={player2} onClickCard={(card) => setChoiceCard(card)} />
            </div>
        </div>
    );
};

export default BoardPage;