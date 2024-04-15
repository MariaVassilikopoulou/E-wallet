import React from "react";
import{useState, useEffect} from 'react';
import SvgBasicPath from "../components/Card/SvgPaths/SvgBasicPath";
import { useLocation } from 'react-router-dom';
import Card from "../components/Card/Card.jsx";

function Home(){

   /*const location = useLocation();
   console.log("ti location: ", location);
const searchParams = new URLSearchParams(location.search);
console.log("searchparams: ", searchParams);
const vendor = searchParams.get('vendor');
console.log("ti vendor eisai: ", vendor);
  const [cards,setCards]= useState([]);
  const formData = location.state?.formData || {};
  console.log("AYTO TO FORM:", formData);*/

  const location = useLocation();
  
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({});
  const [initialCardData, setInitialCardData] = useState(null); 
 /*const formData = location.state?.formData || {};
  console.log("ti skata form ERXERTE APO HOME: ", formData);*/
 
      /*  const addCard=(newCard)=>{
            setCards([...cards,newCard]);
        };
        console.log("koita edw: ", addCard);*/
        useEffect(() => {
            const storedInitialCard = localStorage.getItem('initialCard'); // Retrieve card data from local storage
            if (storedInitialCard) {
              /*setFormData(JSON.parse(userCard));*/
              setInitialCardData(JSON.parse(storedInitialCard)); 
            }
          }, []);
        
          const handleAddCard = (newCard) => {
            setCards([...cards, newCard]);
          };
        

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