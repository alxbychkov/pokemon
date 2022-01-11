import MenuHeader from "../../components/MenuHeader";

function GamePage({onChangePage}) {
    const handleClick = () => {
        onChangePage && onChangePage('app');
    }
    return (
        <>
            <MenuHeader bgActive/>
            <button onClick={handleClick}>Return</button>
        </>
    );
}

export default GamePage;