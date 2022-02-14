import React, {useState} from 'react';
import style from './ModalForm.module.css'
import styles from "./Home.module.css"
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addPaymentAC, fetchPaymentThunk} from "../bll/terminalReduser";
import {Preloader} from "../common/Preloader/Preloader";
import {AppStoreType} from "../bll/store";
import ModalList from "./ModalList";

type PropsType = {
    title: string
}

const ModalForm = (props: PropsType) => {
    const dispatch = useDispatch<any>()
    const [phone, setPhone] = useState('111')
    const [sum, setSum] = useState('2222')
    const success = useSelector<AppStoreType, boolean>((state) => state.app.success)
    const isFetching = useSelector<AppStoreType, boolean>((state) => state.app.isFetching)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data: any) => {
        setPhone(data.phone)
        setSum(data.sum)
        console.log(data, 'data');
        dispatch(fetchPaymentThunk(phone, sum))
        dispatch(addPaymentAC(phone, sum))
        reset();
    };

    if (isFetching) {
        return <div><Preloader/></div>
    }

    return (
        <div className={styles.container}>
            {success ? <div><ModalList/></div>
                : <form className={style.authForm} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.loginFonds}>
                        <h3 className={style.h3}>
                            {props.title}
                        </h3>
                        <div>
                            <h6 className={style.h6}>Телефон</h6>
                            <div className={style.formGroup}>
                                {/*<label className={style.h6}>Phone:</label>*/}
                                <input
                                    type="text"
                                    placeholder="+7(111)111-11-11"
                                    className={`${style.inputs} ${errors.phone && "invalid"}`}
                                    {...register("phone", {
                                        required: "Phone is Required",
                                        pattern: {
                                            value: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/,
                                            message: "Invalid phone no",
                                        },
                                    })}
                                    onKeyUp={() => {
                                        trigger("phone");
                                    }}
                                />
                                {errors.phone && (
                                    <small className={style.errorPhone}>{errors.phone.message}</small>
                                )}
                            </div>
                        </div>
                        <div className={style.sumBlock}>
                            <h6 className={style.h6}>Сумма</h6>
                            {/*<label className={style.h6}>sum:</label>*/}
                            <input
                                type="text"
                                className={`${style.inputs} ${errors.sum && "invalid"}`}
                                {...register("sum", {
                                    required: "Sum is Required",
                                    min: {
                                        value: 1,
                                        message: "Minimum Required sum is 1",
                                    },
                                    max: {
                                        value: 1000,
                                        message: "Maximum allowed sum is 1000",
                                    },
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: "Only numbers are allowed",
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger("sum");
                                }}
                            />
                            {errors.sum && (
                                <small className={style.errorSum}>{errors.sum.message}</small>
                            )}
                        </div>
                    </div>
                    <button className={style.btn}><span>ОПЛАТИТЬ</span></button>
                    <div className={style.registration}>
                        <Link to="/" className={style.link}>
                            Вернуться на главную
                        </Link>
                    </div>
                    <h1>+7(111)111-11-11</h1>
                    {/*<img className={style.photo} src={photo} alt="photo"/>*/}
                </form>
            }  </div>

    );
};

export default ModalForm;