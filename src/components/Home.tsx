import React, {useState} from 'react';
import style from "./Home.module.css";
import slide1 from "../common/img/slider1.jpg";
import slide2 from "../common/img/slider2.png";
import slide3 from "../common/img/slider3.jpg";
import {NavLink} from "react-router-dom";


const images = [
    <NavLink to="/bilain"><img key={slide1} src={slide1}/></NavLink>,
    <NavLink to="/mts"><img key={slide2} src={slide2}/></NavLink>,
    <NavLink to="/megafon"><img key={slide3} src={slide3}/></NavLink>,
]


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlider = () => {
        setActiveIndex((current: number) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === images.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res

        })
    }
// Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : images.length - 1
// Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={style.container}>
            <div className={style.slider}>
                <div className={style.sliderImg}
                     key={prevImgIndex}>
                    {images[prevImgIndex]}
                </div>
                <div>
                    <button onClick={nextSlider} className={style.btn}>ВЫБЕРИТЕ ОПЕРАТОРА</button>
                </div>
            </div>
        </div>
    );
};

export default Home;