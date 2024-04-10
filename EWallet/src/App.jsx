
/*import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
function App() {
 

  return (
   
    <main>
    <RouterProvider router={ router } />
  </main>
    
  );
}

export default App*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCard from './pages/AddCard';
import router from './router/router';

function App() {
  return (
    <Router router={router}>
    <Home/>
    <AddCard/>
       </Router>
  );
}

export default App;*/

import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCard from './pages/AddCard';

function App() {
  const [cards, setCards] = useState([]);
  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cards={cards} />} />
        <Route path="/card" element={<AddCard newCardAdded={addCard} />} />
        <Route path="/home" element={<Home cards={cards} />} />
      </Routes>
    </Router>
  );
}

export default App;


