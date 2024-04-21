import React, { useEffect, useState } from 'react';
import './AddCard.css';
import {useDispatch} from 'react-redux';
import { addCard, updateNewCard, setActiveCard} from '../reducers/cardsReducer';
import Card from '../components/Card/Card'
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';



function AddCard(){
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
   
    const [formData, setFormData] = useState({ 
        cardNumber: "",
        cardHolderName: "",
        validDates: "", 
        cvv: "", 
        vendor: ""
 });


  

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
        
      };

      const handleVendorChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
       /*dispatch(addCard({ ...formData, [name]: value }));*/
      };



    const handleAddCard=(event)=>{
    event.preventDefault();
   dispatch(addCard(formData));//it add the new card in redux
   console.log("this is the formdata", formData);
    //dispatch(updateNewCard({ cardNumber: formData.cardNumber, updatedData: formData }));
    dispatch(setActiveCard(formData.cardNumber)); //the card is set as active card
    setFormData((prevFormData) =>({
      ...prevFormData,
     
     
   }));
    navigateTo("/" );
  };

 
  
    return (
        <section className='allForm' >
          <HeaderComponent/>
          <div className="credit-card" >
          <Card formData={formData} />
          {/* {formData.vendor ? <Card formData={formData} /> : 
                              <SvgBasicPath formData={formData} />} */}
          </div>
          <form onSubmit={handleAddCard}  style={{marginTop:"10px", marginRight:"10px" }}>
          <div className="form-group">
            <p className="cardDetails">CARD NUMBER </p>
            <input className='form-input'
              type="text" 
              id="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX" 
              name="cardNumber" 
              value={formData.cardNumber} 
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
          <p className="cardDetails">CARDHOLDER NAME</p>
            <input className='form-input'
              type="text"
              id="cardHolderName"
              placeholder="CARDHOLDER"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group_">
          <div className="form-group">
          <p className="cardDetails">VALID</p>
            <input className='form-input'
              type="text"
              id="validDates"
              placeholder="mm/yyyy"
              name="validDates"
              value={formData.validDates}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
          <p className="cardDetails">CVV</p>
            <input className='form-input'
              type="text"
              id="cvv"
              placeholder="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
          </div>
          <div className="form-group">
          <p className="cardDetails">VENDOR</p>
            <select className='form-select'
              id="vendor"
              name="vendor" 
              value={formData.vendor}
              onChange={handleVendorChange}
              
            >
                <option value="">Select Vendor</option>
                <option value="BITCOIN INC">BITCOIN INC</option>
                <option value="NINJA BANK">NINJA BANK</option>
                <option value="BLOCK CHAIN INC">BLOCK CHAIN INC</option>
                <option value="EVIL CORP">EVIL CORP</option>
            </select>
          </div>
          <button className='form-button' type="submit"  style={{marginTop:"10px" }}>ADD CARD</button>
          </form>
        </section>
      
);
}
export default AddCard;