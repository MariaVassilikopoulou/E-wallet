/*import React from 'react';
import './SvgBasic.css';
import { useDispatch} from "react-redux";
import { setActiveCard } from "../../../reducers/cardsReducer";
import {useLocation} from 'react-router-dom';
function SvgBlockchainPath({formData }){

    const {cardHolderName } = formData;
        
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
       
<div className='shape' onClick={() => handleCardClick(formData)} style={{ backgroundColor: "#8B58F9", color: "#eeeeee", marginTop: (formData.vendor === "BLOCK CHAIN INC" && location.pathname === "/") ? "-150px" : (formData.vendor === "BLOCK CHAIN INC" ? "0" : "") }}>

            <svg className='logo' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3113 2.69793C27.5678 0.955173 25.4272 -0.00284596 23.284 6.3508e-06C21.2396 0.00285866 19.2983 0.858551 17.6985 2.47866L11.719 8.49346C10.0468 10.1738 9.19931 12.1915 9.26848 14.3343C9.34085 16.3969 10.3003 18.4512 11.9689 20.1195C12.9055 21.0554 14.423 21.0554 15.3589 20.1195C16.2955 19.1825 16.2955 17.664 15.3589 16.7288C14.5513 15.9209 14.0899 15.0117 14.0607 14.1728C14.035 13.3788 14.3909 12.6058 15.1186 11.8742L21.0984 5.85971C21.1023 5.85615 21.1059 5.85258 21.1091 5.84866C21.8069 5.15092 22.5417 4.79652 23.2904 4.79509C24.1515 4.79402 25.0852 5.25324 25.9217 6.09004C26.8715 7.03807 28.1654 8.92987 26.1634 10.9415L23.2248 13.8897C23.1079 14.0073 23.0715 14.223 23.1392 14.3742C23.6181 15.4513 23.8894 16.5819 23.9268 17.7189C23.9429 18.1888 23.9201 18.6527 23.8605 19.1094C23.775 19.7669 24.0006 19.903 24.4681 19.4338L29.5605 14.3246C32.9038 10.9653 32.8011 6.18345 29.3113 2.69793Z" fill="white"/>
<path d="M20.0252 11.9669C19.0883 11.0328 17.5726 11.0345 16.6374 11.9694C15.7001 12.9099 15.7022 14.4277 16.6399 15.3629C17.4485 16.1683 17.9081 17.0757 17.9366 17.9211C17.9637 18.7108 17.6086 19.4831 16.8802 20.2154L10.9018 26.2274C10.8982 26.232 10.8947 26.2348 10.8911 26.2384C10.1923 26.9372 9.45745 27.292 8.70765 27.2938C7.8459 27.2948 6.9107 26.836 6.07675 26.0024C5.12729 25.0526 3.83413 23.1576 5.83324 21.1474L8.77468 18.1985C8.89163 18.0815 8.92764 17.8651 8.86025 17.715C8.38213 16.6393 8.11045 15.5112 8.07087 14.3771C8.05554 13.9054 8.07907 13.4394 8.13933 12.9812C8.22597 12.3249 7.99957 12.1872 7.53214 12.6557L2.4365 17.7628C-0.902484 21.1192 -0.800514 25.9011 2.68607 29.3927C4.43097 31.1351 6.57199 32.0913 8.71657 32.0885C10.7524 32.0849 12.6763 31.2342 14.2821 29.6291C14.2889 29.622 14.2957 29.6152 14.3025 29.6084L20.2816 23.595C21.9566 21.9093 22.8027 19.8895 22.7285 17.7589C22.6608 15.6934 21.6996 13.6366 20.0252 11.9669Z" fill="white"/>
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
export default SvgBlockchainPath;*/