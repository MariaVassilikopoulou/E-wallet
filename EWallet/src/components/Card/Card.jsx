import React from 'react';
import SvgBitcoinPath from './SvgPaths/SvgBitcoinPath';
import SvgNingaPath from './SvgPaths/SvgNingaPath';
import SvgBasicPath from './SvgPaths/SvgBasicPath';
import SvgBlockchainPath from './SvgPaths/SvgBlockchainPath';
import SvgEvilPath from './SvgPaths/SvgEvilPath';


const Card = ({ formData }) => {
    switch (formData.vendor) {
        
        case "NINJA BANK":
            return <SvgNingaPath formData={formData} />;
        case "BITCOIN INC":
            return <SvgBitcoinPath formData={formData} />;
        case "BLOCK CHAIN INC":
            return <SvgBlockchainPath formData={formData} />;
        case "EVIL CORP":
            return <SvgEvilPath formData={formData} />;
        default:
            return null; 
    }
};

export default Card;


