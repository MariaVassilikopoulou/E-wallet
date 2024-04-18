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
  const { cards } = cardsState;
  const dispatch = useDispatch();
  const navigateTo= useNavigate();
 
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
            }
          }, [initialCardData]);
     
          //reset the card
        useEffect(() => {
            return () => {
              setFormData({});
            };
          }, []);


          const handleCardClick = (cardData) => {
            dispatch(setActiveCard(cardData));
            setInitialCardData(cardData);
            console.log("card data", cardData)
          };
          
    return (
      <>
        <h1>E-WALLET</h1>
        <div className="credit-card">
        {cards.map((card, index) => (
          <Card key={index} formData={card} onClick={() => handleCardClick(card)} />
        ))}
        </div>
        <button onClick={() =>  navigateTo('/card')}>ADD A NEW CARD</button>
      </>
    );
  }
  


export default Home;