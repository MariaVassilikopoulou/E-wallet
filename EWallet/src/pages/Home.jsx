import React from "react";
import{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import SvgBasicPath from "../components/Card/SvgPaths/SvgBasicPath";
import { useLocation } from 'react-router-dom';
import Card from "../components/Card/Card.jsx";

function Home(){

  const location = useLocation();
  const formDataFromRedux = useSelector(state => state.cards);
  const [cards, setCards] = useState([formDataFromRedux]);
  const [formData, setFormData] = useState({});
  const [initialCardData, setInitialCardData] = useState(null); 
 

        useEffect(() => {
            const storedInitialCard = localStorage.getItem('initialCard');
            if (storedInitialCard) {
              /*setFormData(JSON.parse(userCard));*/
              setInitialCardData(JSON.parse(storedInitialCard)); 
            }
          }, []);
        
     
         useEffect(() => {
            setCards([...cards, formDataFromRedux]);
            setFormData({});
        }, [formDataFromRedux]);
        
        useEffect(() => {
            return () => {
              setFormData({});
            };
          }, []);

    return(<>
        <h1>E-WALLET</h1>
        <div className="credit-card">
                <SvgBasicPath />
                {initialCardData && <Card formData={initialCardData} />}
        </div>   
        {cards.map((card,index)=>(<Card key={index} cardData={card}/>)) }
         
        <button onClick={() => window.location.href='/card'}>ADD A NEW CARD</button>
    </>);
}

export default Home;