import {useNavigate, useLocation} from 'react-router-dom';
import React from 'react'
import "./HeaderComponent.css"

function HeaderComponent() {

    const navigate= useNavigate();
    const location= useLocation();

    const homePage = location.pathname ==="/";
    const title= homePage?"E-WALLET" : "ADD A NEWBANK CARD";

    function navigateHome(){
        navigate('/');
    }
      return (

    <div className='headerPage'>
        {!homePage &&(<section onClick={navigateHome}>~go back~</section>)}
        <h1 className='title'>
            {title}
        </h1>
    </div>
  );
}

export default HeaderComponent