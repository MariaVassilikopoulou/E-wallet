import React,{useState, useEffect} from "react";
import { useSelector,useDispatch} from 'react-redux';
import SvgBasicPath from "../components/Card/svgPaths/SvgBasicPath.jsx";
import { useLocation,  useNavigate } from 'react-router-dom';
import Card from "../components/Card/Card.jsx";
import { setActiveCard } from '../reducers/cardsReducer';
import HeaderComponent from "../components/HeaderComponent.jsx";



function Home(){

  const location = useLocation();
  const formDataFromRedux = useSelector(state => state.cards);
 
  const [formData, setFormData] = useState({});
  const [initialCardData, setInitialCardData] = useState(null); 
  const cardsState = useSelector((state) => state.cards);
  const { cards, activeCardNumber } = cardsState;
 
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
     
            useEffect(() => {
              setActiveCard(
                activeCardNumber
                  ? cards.find((card) => card.cardNumber === activeCardNumber)
                  : null
              );
            }, [activeCardNumber, cards]);

    return (
      <>
      <div className="home-container">
         <HeaderComponent/>
       
          <div className="credit-card" >
          {activeCard && <Card formData={activeCard} isActive={true} />}
        
          {cards
          .filter((card) => card.cardNumber !== activeCardNumber)
          .map((card, index) => (
            <Card
              key={index}
              formData={card}
              isActive={card.cardNumber === activeCardNumber}
              activeCardNumber={activeCardNumber}
            />
          ))}
        </div>
            <button className="homeButton" style={{marginTop:"10px" }} onClick={() =>  navigateTo('/card')}>ADD A NEW CARD</button>
         
      </div>
      </>
    );
          }
  


export default Home;