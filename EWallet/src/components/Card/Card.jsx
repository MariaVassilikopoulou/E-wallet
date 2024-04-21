/*import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setActiveCard } from '../../reducers/cardsReducer';
import BitcoinLogo from "../../assets/vendor-bitcoin.svg";
import BlockChainLogo from "../../assets/vendor-blockchain.svg";
import EvilLogo from "../../assets/vendor-evil.svg";
import NingaLogo from "../../assets/vendor-ninja.svg";
import '../Card/SvgPaths/SvgBasic.css';
const Card = ({ formData,isActive,activeCardNumber }) => {
    const [currentCardData] = useState(formData);
    const dispatch = useDispatch(); 

    const handleCardClick = () => {
        if (formData.cardNumber === "XXXX XXXX XXXX XXXX ") 
        return;
        dispatch(setActiveCard(formData.cardNumber));
        console.log("Card clicked:", formData);
    };

    const cardLogos = {
        "BITCOIN INC": { logo: BitcoinLogo, backgroundColor: "#FFAE34" },
        "NINJA BANK": { logo: NingaLogo, backgroundColor: "#3C5B6F"  },
        "BLOCK CHAIN INC": { logo: BlockChainLogo, backgroundColor:"#8B58F9" },
        "EVIL CORP": { logo: EvilLogo, backgroundColor: "#F33355"  }
      };
    
      const { logo: CardLogo, backgroundColor } = cardLogos[currentCardData.vendor] || {};
    
      return (
        <div className="shape" onClick={handleCardClick}
          style={{
            backgroundColor: backgroundColor || "#0000004A",
          }}
        >
          <div className="card-logo">
            <img src={CardLogo} alt={currentCardData.vendor} />
          </div>
          <div className="card-details">
            <h3 className="card-number">{currentCardData.cardNumber}</h3>
            <p>CARDHOLDER</p>
            <h4 className="card-name">{currentCardData.cardHolderName}</h4>
            <div className="valid-date">
              <h6>VALID</h6>
              {currentCardData.validDates}
            </div>
          </div>
        </div>
      );
    }
export default Card;*/



import React, { useState } from 'react';
import './Card.css';
import BitcoinLogo from "../../assets/vendor-bitcoin.svg";
import BlockChainLogo from "../../assets/vendor-blockchain.svg";
import EvilLogo from "../../assets/vendor-evil.svg";
import NingaLogo from "../../assets/vendor-ninja.svg";
import { useDispatch } from 'react-redux';
import { setActiveCard } from '../../reducers/cardsReducer';

function Card({ formData }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (formData.cardNumber === "XXXX XXXX XXXX XXXX ")
            return;
        dispatch(setActiveCard(formData.cardNumber));
    };

    // Define the card logos and their respective background colors
    const cardLogos = {
        "BITCOIN INC": { logo: BitcoinLogo, backgroundColor: "#FFAE34" },
        "NINJA BANK": { logo: NingaLogo, backgroundColor: "#3C5B6F" },
        "BLOCK CHAIN INC": { logo: BlockChainLogo, backgroundColor: "#8B58F9" },
        "EVIL CORP": { logo: EvilLogo, backgroundColor: "#F33355" }
    };

    const { logo: CardLogo, backgroundColor } = cardLogos[formData.vendor] || {};

    return (
        <div className="shape" onClick={handleClick} style={{ backgroundColor }}>
            <div className="vendor">
                {/* Render the appropriate logo based on the vendor */}
                {CardLogo && <img className="vendor-logo" src={CardLogo} alt={formData.vendor} />}
            </div>
            <div className="card-details">
                <div className="name-number">
                    <h3 className="number">{formData.cardNumber}</h3>
                    <label>CARDHOLDER</label>
                    <h4 className="name">{formData.cardHolderName}</h4>
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

