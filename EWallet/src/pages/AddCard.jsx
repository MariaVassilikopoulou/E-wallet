import React, { useEffect, useState } from 'react';
import './AddCard.css';
import SvgBasicPath from '../components/Card/SvgPaths/SvgBasicPath';
import {useDispatch} from 'react-redux';
import {updateCardDetails} from '../reducers/cardsReducer';
import Card from '../components/Card/Card'
import { useNavigate } from 'react-router-dom';




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
 const [cards, setCards] = useState([]);
useEffect(() => {
        dispatch(updateCardDetails(formData));
    }, [formData, dispatch]);

  

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
       dispatch(updateCardDetails({ ...formData, [name]: value }));
      };



    const handleAddCard=(event)=>{
    event.preventDefault();
    dispatch(updateCardDetails(formData));
    setCards(prevCards => [...prevCards, formData]);
    if (!localStorage.getItem("initialCard")) {
      localStorage.setItem("initialCard", JSON.stringify(formData));
    }
  
    navigateTo("/", { state: { formData } });
  };

       /* useEffect(() => {
          if (formData.vendor) {
              navigateTo('/');
          }
      }, [formData.vendor, navigateTo]);*/
  
    return (
        <section>
          <h1>ADD A NEW BANK CARD</h1>
          <div className="credit-card">
          {formData.vendor ? <Card formData={formData} /> : 
                              <SvgBasicPath formData={formData} />}
          </div>
          <form onSubmit={handleAddCard}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input 
              type="text" 
              id="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX" 
              name="cardNumber" 
              value={formData.cardNumber} 
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolderName">Cardholder Name:</label>
            <input 
              type="text"
              id="cardHolderName"
              placeholder="CARDHOLDER"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="validDates">Valid Thru (mm/yyyy):</label>
            <input 
              type="text"
              id="validDates"
              placeholder="mm/yyyy"
              name="validDates"
              value={formData.validDates}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input 
              type="text"
              id="cvv"
              placeholder="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vendor">Vendor:</label>
            <select 
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
          <button type="submit">ADD CARD</button>
          </form>
        </section>
      
);
}
export default AddCard;