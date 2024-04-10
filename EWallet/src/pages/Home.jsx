import React from "react";
import{useState} from 'react';
import {useSelector} from 'react-redux';
import SvgBasicPath from "../components/Card/SvgPaths/SvgBasicPath";
import { useLocation } from 'react-router-dom';
import AddCard from '../pages/AddCard.jsx';


function Home(){

    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const vendor = searchParams.get('vendor');
    const [cards,setCards]= useState([]);
 
        const addCard=(newCard)=>{
            setCards([...cards,newCard]);
        };
  

    return(<>
        <h1>E-WALLET</h1>
        <div className="credit-card">{vendor}
                <SvgBasicPath />

                {cards.map((card,index)=>(
                   <Card key={index} cardData={card}/>)) }
            </div>
        <button onClick={() => window.location.href='/card'}>ADD A NEW CARD</button>
    </>);
}

export default Home;