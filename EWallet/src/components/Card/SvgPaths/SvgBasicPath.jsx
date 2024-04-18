import React, {useState}  from "react";
import "./SvgBasic.css";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCard } from "../../../reducers/cardsReducer";

function SvgBasicPath({ formData }){
    const { cardNumber, cardHolderName, validDates } = formData || {};

   const dispatch = useDispatch();

const [inputValue, setInputValue] = useState("");

const handleInputChange = (event) => {
      setInputValue(event.target.value.slice(0, 16));
};

const formatCardNumber = (value) => {
    return value.padEnd(16, "X").slice(0, 16);
};
const formatDate=(value)=>{
    return value.padEnd(7, "X").slice(0,7);

}

const handleCardClick = (cardData) => {
    dispatch(setActiveCard(cardData));
    /*setInitialCardData(cardData);*/
    console.log("card data", cardData)
  };
  

    return (
        <div className='shape' onClick={() => handleCardClick(formData)}>
            <svg className='logo' width="50" height="84" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="44" width="50" height="40" rx="8" fill="#ECE6DF"/>
<line y1="56.5" x2="18" y2="56.5" stroke="black" strokeOpacity="0.11"/>
<line x1="33" y1="56.5" x2="50" y2="56.5" stroke="black" strokeOpacity="0.11"/>
<line x1="32.5" y1="44" x2="32.5" y2="84" stroke="black" strokeOpacity="0.11"/>
<line y1="70.5" x2="18" y2="70.5" stroke="black" strokeOpacity="0.11"/>
<line x1="32" y1="70.5" x2="50" y2="70.5" stroke="black" strokeOpacity="0.11"/>
<line x1="18.5" y1="44" x2="18.5" y2="84" stroke="black" strokeOpacity="0.11"/>
<g opacity="0.5">
<path d="M32.8487 26.5009C33.5267 27.1657 33.5267 28.2441 32.8487 28.9097C32.1698 29.5753 31.0693 29.5753 30.3913 28.9097C27.4169 25.9941 22.5778 25.9941 19.6038 28.9097C18.9249 29.5753 17.824 29.5753 17.146 28.9097C16.8067 28.5771 16.6378 28.1423 16.6378 27.7049C16.6378 27.2692 16.8072 26.8331 17.146 26.5009C21.4756 22.2567 28.5191 22.2567 32.8487 26.5009Z" fill="white"/>
<path d="M38.8186 21.073C39.4967 21.7381 39.4967 22.817 38.8186 23.4826C38.1397 24.1482 37.0397 24.1482 36.3612 23.4826C30.0956 17.339 19.9004 17.339 13.6348 23.4826C12.9563 24.1482 11.8554 24.1482 11.1778 23.4826C10.8386 23.15 10.6683 22.7135 10.6683 22.2778C10.6683 21.8412 10.8386 21.406 11.1778 21.073C14.869 17.4538 19.7772 15.4608 24.9978 15.4608C30.2184 15.4608 35.1266 17.4538 38.8186 21.073Z" fill="white"/>
<path d="M44.2866 15.0204C44.965 15.6856 44.965 16.7644 44.2866 17.4296C43.6081 18.0948 42.5081 18.0948 41.8296 17.4296C37.3332 13.0218 31.3554 10.5945 24.9974 10.5945C18.6394 10.5945 12.662 13.0218 8.16651 17.4296C7.48715 18.0948 6.38715 18.0948 5.70911 17.4296C5.36987 17.097 5.20047 16.6609 5.20047 16.2248C5.20047 15.7891 5.37031 15.353 5.70911 15.0204C10.8611 9.96901 17.7119 7.18752 24.9974 7.18752C32.2842 7.18752 39.1346 9.96901 44.2866 15.0204Z" fill="white"/>
</g>
</svg>

    <div className='card-details'>
        <div className='name-number'>
            <h3 className="number">{cardNumber ? formatCardNumber(cardNumber) : 'XXXX XXXX XXXX XXXX'}</h3>
            <label>CARDHOLDER</label>
            <h4 className="name">{cardHolderName ? cardHolderName : ''}</h4>
        </div>
                <div className="valid-date">
                    <h6>VALID</h6>
                    <p>{validDates ? formatDate(validDates) : 'XXXX XXXX'}</p>

                   
                </div>
    
    </div>
</div>

    );
}
export default SvgBasicPath;


