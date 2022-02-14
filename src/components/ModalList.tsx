import React from 'react';
import {useSelector} from "react-redux";
import {AppStoreType} from "../bll/store";
import ModalSuccess from "./ModalSuccess";

const ModalList = () => {
    const error = useSelector<AppStoreType, string | null>((state) => state.app.error)
    console.log(error, 'error');
    return (
        <div>
            {!error ? <div><ModalSuccess
                    title='ОПЛАТА ПРОШЛА УСПЕШНО!'
                    string='ХОРОШЕГО ДНЯ!'/></div>
                : <div><ModalSuccess
                    title='ЧТО-ТО ПОШЛО НЕ ТАК!'
                    string='ПОПРОБУЙТЕ ЕЩЕ РАЗ!'/></div>}
        </div>
    );
};

export default ModalList;