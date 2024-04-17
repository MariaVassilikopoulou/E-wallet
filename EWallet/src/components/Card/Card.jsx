import React from 'react';
import SvgBitcoinPath from './SvgPaths/SvgBitcoinPath';
import SvgNingaPath from './SvgPaths/SvgNingaPath';
import SvgBasicPath from './SvgPaths/SvgBasicPath';
import SvgBlockchainPath from './SvgPaths/SvgBlockchainPath';
import SvgEvilPath from './SvgPaths/SvgEvilPath';


const Card = ({ formData, onClick  }) => {
    /*console.log("formData apo card", formData)*/
    if (!formData || !formData.vendor) {
        return null; 
    }
    const handleClick = () => {
        onClick(formData);
    };
    switch (formData.vendor) {
        
        case "NINJA BANK":
            return <SvgNingaPath formData={formData} onClick={handleClick} />;
            
        case "BITCOIN INC":
            return <SvgBitcoinPath formData={formData} onClick={handleClick}/>;
        case "BLOCK CHAIN INC":
            return <SvgBlockchainPath formData={formData} onClick={handleClick} />;
        case "EVIL CORP":
            return <SvgEvilPath formData={formData} onClick={handleClick} />;
        default:
            return <SvgBasicPath formData={formData} onClick={handleClick}/>;; 
    }
   
};

export default Card;

