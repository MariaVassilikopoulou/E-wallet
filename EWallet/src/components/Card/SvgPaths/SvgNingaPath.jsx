/*/*import React from 'react';
import './SvgBasic.css';
import {useDispatch } from "react-redux";
import { setActiveCard } from "../../../reducers/cardsReducer";
import {useLocation} from 'react-router-dom';

function SvgNinjaPath({formData }){
    const { cardHolderName} = formData ;

const dispatch = useDispatch();
const location = useLocation();


/*const handleCardClick = (cardData) => {
    dispatch(setActiveCard(cardData));
    setInitialCardData(cardData);
    localStorage.setItem('initialCard', JSON.stringify(cardData));
    
};*/
  

/*const handleCardClick = () => {
    dispatch(setActiveCard(formData));
};

    return(
       
<div className='shape' onClick={() => handleCardClick(formData)} style={{ backgroundColor:"#222222" ,color: "#f5f9ee", marginTop: (formData.vendor === "NINJA BANK" && location.pathname === "/") ? "-150px" : (formData.vendor === "NINJA BANK" ? "0" : "") }}>
            <svg className='logo' width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.58519 7.14646L2.66843 6.39479C1.69126 6.01896 1.24025 4.92904 1.61609 3.95186C1.99192 2.97469 3.08185 2.52369 4.05902 2.89952L5.03619 3.27536L4.77311 2.41094C4.47244 1.43377 5.03619 0.381426 6.05095 0.080758C7.02812 -0.21991 8.08046 0.343843 8.38113 1.3586L9.05763 3.65119C11.463 2.44852 14.169 1.73443 17.0253 1.73443C26.4212 1.73443 34.0507 9.36389 34.0507 18.7598C34.0507 28.1557 26.4212 35.7851 17.0253 35.7851C7.62946 35.7851 -3.8147e-06 28.1557 -3.8147e-06 18.7598C-3.8147e-06 14.2873 1.76642 10.1907 4.58519 7.14646ZM29.0145 19.9249C29.0521 19.549 29.0897 19.1732 29.0897 18.7598C29.0897 15.8658 28.0749 13.235 26.3836 11.1679H7.74221C6.05095 13.235 5.03619 15.9034 5.03619 18.7598C5.03619 19.1356 5.07378 19.549 5.11136 19.9249H29.0145Z" fill="white"/>
<path d="M21.9488 18.1209C20.5166 18.1209 19.3555 16.9598 19.3555 15.5276C19.3555 14.0954 20.5166 12.9343 21.9488 12.9343C23.381 12.9343 24.5421 14.0954 24.5421 15.5276C24.5421 16.9598 23.381 18.1209 21.9488 18.1209Z" fill="white"/>
<path d="M12.1019 18.1209C10.6697 18.1209 9.50866 16.9598 9.50866 15.5276C9.50866 14.0954 10.6697 12.9343 12.1019 12.9343C13.5341 12.9343 14.6952 14.0954 14.6952 15.5276C14.6952 16.9598 13.5341 18.1209 12.1019 18.1209Z" fill="white"/>
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
);
}
export default SvgNinjaPath;*/