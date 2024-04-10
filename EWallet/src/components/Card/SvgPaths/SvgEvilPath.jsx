import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function SvgEvilPath(){
    const { cardNumber, cardHolderName, validDates } = useSelector(
        (state) => state.cards
      );

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

return(
    <div className='shape'>
            <svg className='logo' width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 34C28.3888 34 36 26.3888 36 17C36 15.0145 35.6596 13.1084 35.034 11.3371C36.9119 8.43722 38 4.99367 38 1.3C38 0.631546 37.0585 0.568186 36.8231 1.19381C35.9585 3.49167 34.6482 5.57669 32.9956 7.34726C29.9283 2.9084 24.8038 0 19 0C13.1962 0 8.07166 2.9084 5.00438 7.34726C3.35177 5.57669 2.04152 3.49166 1.17691 1.19381C0.941502 0.568183 0 0.631543 0 1.3C0 4.99367 1.08809 8.43722 2.966 11.3371C2.34039 13.1084 2 15.0145 2 17C2 26.3888 9.61116 34 19 34ZM13.5138 13.1501C13.9809 12.9801 14.502 13.1791 14.7369 13.6172L17.3917 18.5671C17.8293 19.3831 17.0187 20.3043 16.1537 19.974L8.22051 16.9444C7.35555 16.6141 7.36528 15.3871 8.23536 15.0705L13.5138 13.1501ZM25.2875 13.15C24.8203 12.98 24.2993 13.179 24.0643 13.6171L21.4095 18.567C20.9718 19.3829 21.7825 20.3041 22.6475 19.9738L30.5807 16.9444C31.4456 16.6141 31.4359 15.3871 30.5658 15.0705L25.2875 13.15Z" fill="white"/>
</svg>
<div className='card-details'>
        <div className='name-number'>
            <h3 className="number">{formatCardNumber(inputValue || cardNumber)}</h3>
            <label>CARDHOLDER</label>
            <h4 className="name">{cardHolderName}</h4>
        </div>
                <div className="valid-date">
                    <h6>VALID</h6>
                   {formatDate(inputValue || validDates)} 
                   
                </div>
    
    </div>
</div>
    
    
);
}
export default SvgEvilPath;
