import React, { useState } from 'react';
import './Card.css';
import BitcoinLogo from "../../assets/vendor-bitcoin.svg";
import BlockChainLogo from "../../assets/vendor-blockchain.svg";
import EvilLogo from "../../assets/vendor-evil.svg";
import NingaLogo from "../../assets/vendor-ninja.svg";
import { useDispatch } from 'react-redux';
import { setActiveCard } from '../../reducers/cardsReducer';
import ChipLight from '../../assets/chip-light.svg';
function Card({ formData, style }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (formData.cardNumber === "XXXX XXXX XXXX XXXX ")
            return;
        dispatch(setActiveCard(formData.cardNumber));
    };

   
    const cardLogos = {
        "BITCOIN INC": { logo: BitcoinLogo, backgroundColor: "#FFAE34"},
        "NINJA BANK": { logo: NingaLogo, backgroundColor: "#3C5B6F" },
        "BLOCK CHAIN INC": { logo: BlockChainLogo, backgroundColor: "#8B58F9" },
        "EVIL CORP": { logo: EvilLogo, backgroundColor: "#F33355" },
        "CHIP LIGHT": { logo: ChipLight, backgroundColor: "#CCCCCC" }
    };
    const defaultVendor = "CHIP LIGHT";
    const { logo: CardLogo, backgroundColor } = cardLogos[formData.vendor || defaultVendor];

    return (
        <div className="shape" onClick={handleClick} style={{  ...style, backgroundColor }}>
            <div className="vendor">
              
                {CardLogo && <img className="vendor-logo" src={CardLogo} alt={formData.vendor} />}
            </div>
            <div className="card-details">
            <p>CARDHOLDER</p>
                <div className="name-number">
                    <h3 className="number">¨{formData.cardNumber}¨</h3>
                    
                    <h4 className="name">¨{formData.cardHolderName}¨</h4>
                    
                </div>
               
                <div className="valid-date">
                    <h6>VALID</h6>
                    <p>{formData.validDates}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;

