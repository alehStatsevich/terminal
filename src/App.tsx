import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./components/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Router/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
