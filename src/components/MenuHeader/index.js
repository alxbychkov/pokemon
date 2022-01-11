import { useState } from "react/cjs/react.development";
import Menu from "../Menu";
import Navbar from "../Navbar";

function MenuHeader({bgActive}) {
    const [isActive, setActive] = useState(null);

    const handleOpenMenu = (isOpen) => {
        console.log(isOpen);
        setActive(isOpen);
    }

    return (
        <>
            <Menu isShow={isActive}/>
            <Navbar onOpenMenu={handleOpenMenu} bgActive={bgActive}/>
        </>
    );
}

export default MenuHeader;