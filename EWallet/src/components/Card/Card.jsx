import React,{useState} from 'react';
import SvgBitcoinPath from './SvgPaths/SvgBitcoinPath';
import SvgNingaPath from './SvgPaths/SvgNingaPath';
import SvgBasicPath from './SvgPaths/SvgBasicPath';
import SvgBlockchainPath from './SvgPaths/SvgBlockchainPath';
import SvgEvilPath from './SvgPaths/SvgEvilPath';


const Card = ({ formData,isActive,activeCardNumber }) => {
    const [currentCardData] = useState(formData);
    const handleCardClick = () => {
        // Dispatch action or handle click logic here
        console.log("Card clicked:", activeCardNumber);
    };
    if (isActive) {
        
      } else {
    switch (currentCardData.vendor) {
        
        case "BITCOIN INC" :
            return  <SvgBitcoinPath formData={currentCardData}handleCardClick={handleCardClick} />;
        case "NINJA BANK" :
                return <SvgNingaPath formData={currentCardData} />;
        case "BLOCK CHAIN INC" :
            return <SvgBlockchainPath formData={currentCardData}   />;
        case "EVIL CORP" :
            return <SvgEvilPath formData={currentCardData}  />;
        default :
            return <SvgBasicPath formData={activeCardNumber} handleCardClick={handleCardClick}  />; 
    }
   

}
}
export default Card;

