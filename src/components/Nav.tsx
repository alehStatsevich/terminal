import React from 'react';
import {NavLink} from 'react-router-dom';
import style from "./Nav.module.css"


const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to="/" className={({isActive}) => isActive ? style.act : style.link}>
                ГЛАВНАЯ
            </NavLink>
            <NavLink to="/megafon" className={({isActive}) => isActive ? style.act : style.link}>
                МЕГАФОН
            </NavLink>
            <NavLink to="/bilain" className={({isActive}) => isActive ? style.act : style.link}>
                БИЛАЙН
            </NavLink>
            <NavLink to="/mts" className={({isActive}) => isActive ? style.act : style.link}>
                МТС
            </NavLink>
            <NavLink to="/success" className={({isActive}) => isActive ? style.act : style.link}>
                MODAL
            </NavLink>
            <NavLink to="/success" className={({isActive}) => isActive ? style.act : style.link}>
                MODAL
            </NavLink>
        </div>
    );
};

export default Nav;