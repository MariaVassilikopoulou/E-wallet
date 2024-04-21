import React,{useState, useEffect} from "react";
import { useSelector,useDispatch} from 'react-redux';
import SvgBasicPath from "../components/Card/SvgPaths/SvgBasicPath";
import { useLocation,  useNavigate } from 'react-router-dom';
import Card from "../components/Card/Card.jsx";
import { setActiveCard } from '../reducers/cardsReducer';
import HeaderComponent from "../components/HeaderComponent.jsx";


function Home(){

  const location = useLocation();
  const formDataFromRedux = useSelector(state => state.cards);
  const cards = useSelector(state => state.cards.cards);// here i take the cards from the array i have in the redux
  
  const [formData, setFormData] = useState({});
  const [initialCardData, setInitialCardData] = useState(null); 

  const activeCardNumber  = useSelector((state) => state.cards);
  
  const dispatch = useDispatch();
  const navigateTo= useNavigate();
  const [vendor, setVendor] = useState(null);
   
  const [activeCard, setActiveCard] = useState(null);

        

          useEffect(() => {
            if (initialCardData) {
              setFormData(initialCardData);
              console.log("useefecthom3111", initialCardData)
              setActiveCard(initialCardData);
              console.log("useefecthomw", initialCardData)
              dispatch(setActiveCard(initialCardData.cardNumber));
            }
          }, [initialCardData]);
     
        /*useEffect(() => {
          setActiveCard(activeCardNumber ? cards.find(card => card.cardNumber === activeCardNumber) : null);
          setVendor(vendor);
        }, [activeCardNumber, cards]);
            console.log("useefect active", activeCard)*/

            const filteredCards = activeCard
            ? cards.filter((card) => card.cardNumber !== activeCard.cardNumber)
            : cards;


    return (
      <>
      <div className="home-container">
         <HeaderComponent/>

          <div className="credit-card">
    
          
            {filteredCards.map((card) => (
            <Card
              key={card.cardNumber}
              formData={card}
              isActive={card && card.cardNumber === activeCardNumber}
              activeCardNumber={activeCardNumber}
              vendor={card && card.vendor} 
            />
          ))}
        </div>
            <button className="homeButton" style={{marginTop:"10px" }} onClick={() =>  navigateTo('/card')}>ADD A NEW CARD</button>
         
      </div>
      </>
    );
          }
  


export default Home;