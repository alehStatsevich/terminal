import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import ModalForm from "./ModalForm";
import ModalList from "./ModalList";


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Navigate to="/"/>}/>
                <Route path="/megafon" element={<ModalForm title='МЕГАФОН'/>}/>
                <Route path="/bilain" element={<ModalForm title='БИЛАЙН'/>}/>
                <Route path="/mts" element={<ModalForm title='МТС'/>}/>
                <Route path="/success" element={<ModalList/>}/>
                <Route path="/success" element={<ModalList/>}/>
            </Routes>
        </div>
    );
};

export default Router;