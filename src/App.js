import './App.css';
import Header from './Header';
import React, {useState} from 'react';
import Ingredientdata from './IngredientData';
import HealthData from './HealthData';

function App() {

  const [menu, setMenu] = useState(1);

  return (
    <>
    <Header setMenu={setMenu} />
    
    {menu===1?
    <Ingredientdata />
    :
    <HealthData />
    }
    </>
  );

}

export default App;
