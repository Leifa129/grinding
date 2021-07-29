import './App.scss';
import Header from './Header/Header';
import Recipes from './Recipes/Recipes';
import ShoppingList from './Shopping-list/ShoppingList';
import React, {useState} from 'react';

function App() {
    const [selectedComponent, setSelectedComponent] = useState('recipes');
  return (
    <div className="App">

        <Header recipesClicked = {() => {setSelectedComponent('recipes')}} shoppingListClicked = {() => setSelectedComponent('shopping-list')} />
        <Recipes selectedComponent={selectedComponent} />
        <ShoppingList selectedComponent={selectedComponent} />

    </div>
  );
}

export default App;
