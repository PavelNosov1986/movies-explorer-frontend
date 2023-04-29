import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import HeaderProfile from '../HeaderProfile/HeaderProfile';

const HeaderSelect = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 850;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    if (width > breakpoint) {
        return (
            <HeaderProfile />
        );
    }
    return (
        <BurgerMenu />
    );
};

export default HeaderSelect;