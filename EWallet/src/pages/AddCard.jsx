import React from 'react';
import {useState} from 'react';
import './AddCard.css';
import SvgBasicPath from '../components/Card/SvgPaths/SvgBasicPath';
import SvgBitcoinPath from '../components/Card/SvgPaths/SvgBitcoinPath';
import SvgNingaPath from '../components/Card/SvgPaths/SvgNingaPath';
import SvgBlockchainPath from '../components/Card/SvgPaths/SvgBlockchainPath';
function AddCard(){
    const [formData, setFormData]= useState(
        {cardNumber: "", cardHolderName: "", validDates: "", cvv: "", vendor:""}
        );

        const vendorOptions= ["BITCOIN INC", "NINJA BANK", "BLOCK CHAIN INC", "EVIL CORP"];
console.log(formData);

    function handleChange(event){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
       
        <section>
        <h1>ADD A NEW BANK CARD</h1>
         <SvgBasicPath/>
         
        {/* <SvgBitcoinPath/>
         <SvgNingaPath/>
         <SvgBlockchainPath/>*/}
        <div className="input-container">
            <label>CARD NUMBER</label>
            <input
                type="text"
                placeholder="xxxxxxxxxxx"
                onChange={handleChange}
                name="cardNumber"
                value={formData.cardNumber}
            />
        </div>
        <div className="input-container">
            <label>CARDHOLDER NAME</label>
            <input
                type="text"
                placeholder="FIRSTNAME LASTNAME"
                onChange={handleChange}
                name="cardHolderName"
                value={formData.cardHolderName}
            />
        </div>
        <div className="input-row">
        <div className="input-container">
            <label>VALID THRU</label>
            <input
                type="text"
                placeholder="mm/yyyy"
                onChange={handleChange}
                name="validDates"
                value={formData.validDates}
            />
        </div>
        <div className="input-container">
            <label>CCV</label>
            <input
                type="text"
                placeholder="XXX"
                onChange={handleChange}
                name="cvv"
                value={formData.cvv}
            />
               </div>
        </div>
        <div className="input-container">
            <label>VENDOR</label>
            <select value={formData.vendor}
                 onChange={handleChange} 
                 name="vendor" >
                {vendorOptions.map((option)=>(
                    <option key={option} value= {option}>{option}</option>
                ))}
                
            </select>
            {formData.vendor=== 'NINJA BANK'} 
        </div>
        <button>ADD CARD</button>
    </section>
    
);
}
export default AddCard