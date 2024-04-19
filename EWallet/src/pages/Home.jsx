import React,{useState, useEffect} from "react";
import { useSelector,useDispatch} from 'react-redux';
import SvgBasicPath from "../components/Card/SvgPaths/SvgBasicPath";
import { useLocation,  useNavigate } from 'react-router-dom';
import Card from "../components/Card/Card.jsx";
import { setActiveCard } from '../reducers/cardsReducer';


function Home(){

  const location = useLocation();
  const formDataFromRedux = useSelector(state => state.cards);
 /* const [cards, setCards] = useState([formDataFromRedux]);*/
  const [formData, setFormData] = useState({});
  const [initialCardData, setInitialCardData] = useState(null); 
  console.log("koita edw",setInitialCardData);
  const cardsState = useSelector((state) => state.cards);
  const { cards,activeCardNumber } = cardsState;
  const dispatch = useDispatch();
  const navigateTo= useNavigate();
 
  
  
  //const initialCard = useSelector(state => state.cards[0]);    
  const [activeCard, setActiveCard] = useState(null);
  //fetching the initial card
        useEffect(() => {
            const storedInitialCard = localStorage.getItem('initialCard');
            if (storedInitialCard) {
              setInitialCardData(JSON.parse(storedInitialCard)); 
            }
          }, []);
        

          useEffect(() => {
            if (initialCardData) {
              setFormData(initialCardData);
              setActiveCard(initialCardData);
              // dispatch(setActiveCard(initialCardData.cardNumber));
            }
          }, [initialCardData]);
     
          //reset the card
        useEffect(() => {
            return () => {
              setFormData({});
            };
          }, []);
         
          
          /*useEffect(() => {
            if (activeCardNumber) {
                const foundCard = cards.find(card => card.cardNumber === activeCardNumber);
                setActiveCard(foundCard);
            }
        }, [activeCardNumber, cards]);*/
        /*useEffect(() => {
          setActiveCard(activeCardNumber ? activeCardNumber : initialCard);
        }, [activeCardNumber, initialCard]);*/
        useEffect(() => {
          setActiveCard(activeCardNumber ? cards.find(card => card.cardNumber === activeCardNumber) : null);
        }, [activeCardNumber, cards]);

    return (
      <><div className="home-container">
        <h1 className="header">E-WALLET</h1>
        <div className="credit-card">
        {cards.map((card, index) => (
          <Card key={index} formData={card} isActive={card.cardNumber === activeCardNumber} activeCardNumber={activeCardNumber} />
        ))}
        
        </div>
        <div  className="homeButton">
        <button onClick={() =>  navigateTo('/card')}>ADD A NEW CARD</button>
        </div>
        </div></>
    );
  }
  


export default Home;