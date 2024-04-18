import React,{useState} from 'react';
import SvgBitcoinPath from './SvgPaths/SvgBitcoinPath';
import SvgNingaPath from './SvgPaths/SvgNingaPath';
import SvgBasicPath from './SvgPaths/SvgBasicPath';
import SvgBlockchainPath from './SvgPaths/SvgBlockchainPath';
import SvgEvilPath from './SvgPaths/SvgEvilPath';
import {useDispatch, useSelector} from 'react-redux';
import { setActiveCard } from '../../reducers/cardsReducer';

const Card = ({ formData, onClick, isActive,activeCardNumber }) => {
    const [currentCardData, setCurrentCardData] = useState(formData);
    //const activeCardNumber = useSelector(state => state.cards.activeCardNumber);
    const dispatch= useDispatch();
 
    const handleClick = () => {
        dispatch(setActiveCard(currentCardData));
      };

    if (isActive) {
        return (
          <div className="active-card">
          </div>
        );
      } else {
    switch (currentCardData.vendor) {
        
        case "NINJA BANK":
            return <SvgNingaPath formData={currentCardData} onClick={handleClick} />;
            
        case "BITCOIN INC":
            return <SvgBitcoinPath formData={currentCardData} onClick={handleClick}/>;
        case "BLOCK CHAIN INC":
            return <SvgBlockchainPath formData={currentCardData} onClick={handleClick} />;
        case "EVIL CORP":
            return <SvgEvilPath formData={currentCardData} onClick={handleClick} />;
        default:
            return <SvgBasicPath formData={activeCardNumber} onClick={handleClick}/>;; 
    }
   

}
}
export default Card;

