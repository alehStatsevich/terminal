import React from 'react';
import style from "./Home.module.css"
import s from "./ModalSuccess.module.css"
import {NavLink} from "react-router-dom";
import {setSuccessAC} from "../bll/appReduser";
import {useDispatch} from "react-redux";

type PropsType = {
    title: string
    string: string
}
const ModalSuccess = (props: PropsType) => {
    const dispatch = useDispatch()
    return (
        <div className={style.container}>
            <div className={s.modal}>
                <h1 className={s.h1}>{props.title}</h1>
                <h4 className={s.h4}>{props.string}</h4>
                <div onClick={() => {
                    dispatch(setSuccessAC(false))
                }}>
                    <NavLink to="/" className={s.close}>
                        Вернуться на главную
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ModalSuccess;