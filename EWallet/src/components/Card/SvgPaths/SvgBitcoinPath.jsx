/*import React from "react";
import "./SvgBasic.css";
import {  useDispatch } from "react-redux";
import { setActiveCard } from "../../../reducers/cardsReducer";
import {useLocation} from 'react-router-dom';

function SvgBitcoinPath({formData, handleCardClick }){
    const { cardHolderName } = formData ;
  

const dispatch= useDispatch();
const location = useLocation();

const handleClick = () => {
    handleCardClick();
    dispatch(setActiveCard(formData));
    console.log("its the bitcoin click", formData);
};

    return (
        <div className="carsOnTop">
        <div className= "shape" onClick={handleClick} 
        style={{backgroundColor: "#FFAE34", color: "#333333", marginTop: (formData.vendor === "BITCOIN INC" && location.pathname === "/") ? "10px" : "" }}>
     <svg className='logo' width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.497 17.9058C24.5399 16.8521 25.8181 14.9964 25.5195 11.905C25.1174 7.68022 21.5145 6.26356 16.9662 5.86011L16.9653 0H13.4413L13.4403 5.706C12.5132 5.706 11.568 5.72444 10.6271 5.74356L10.6263 0.000777774L7.10548 0.000444465L7.10482 5.85911C6.34178 5.87489 5.59243 5.88989 4.86075 5.88989V5.87256L0 5.87056L0.000657952 9.67967C0.000657952 9.67967 2.60307 9.63011 2.5602 9.67822C3.98706 9.67922 4.45296 10.5181 4.58695 11.2422L4.58805 17.9181V27.2956C4.52522 27.75 4.26086 28.4761 3.26316 28.4774C3.30855 28.5179 0.699671 28.477 0.699671 28.477L0.000657952 32.7364H4.58586C5.44024 32.7374 6.27971 32.7509 7.10329 32.7576L7.10636 38.684L10.6263 38.685L10.6253 32.8207C11.5937 32.8407 12.5285 32.8493 13.4416 32.8481L13.4406 38.685H16.9645L16.9664 32.7684C22.8899 32.424 27.0368 30.9132 27.5524 25.2812C27.968 20.7469 25.8601 18.7229 22.497 17.9058ZM10.7113 9.93678C12.6988 9.93678 18.9494 9.296 18.9503 13.4994C18.9494 17.5293 12.7008 17.0586 10.7113 17.0586V9.93678ZM10.7098 28.5063L10.7113 20.6539C13.0992 20.6532 20.589 19.9582 20.59 24.5783C20.591 29.009 13.0992 28.5046 10.7098 28.5063Z" fill="#333333"/>
</svg>
<div className='card-details'>
        <div className='name-number'>
            <h3 className="number">{formData.cardNumber}</h3>
            <p>CARDHOLDER</p>
            <h4 className="name">{cardHolderName}</h4>
        </div>
                <div className="valid-date">
                    <h6>VALID</h6>
                    {(formData.inputValue || formData.validDates)}
                </div>
    </div>
</div>
</div>
    );
}
export default SvgBitcoinPath;*/