import React, {useState} from 'react';
import ShoppingEdit from './Shopping-edit/Shopping-edit';

function ShoppingList(props) {
    const [ingredients, setIngredients] = useState([{name:'Apples', amount: 5}, {name:'Tomatoes', amount: 10}]);
    let result = <div></div>
    if(props.selectedComponent === 'shopping-list')
        result =  <div className={"row"}>
            <div className="col-xs-10">
                <ShoppingEdit ingredients={ingredients} addItem={item => {setIngredients([...ingredients, item])}} />
                <hr/>
                <ul className="list-group">
                    {ingredients.map(ingredient => <a className={"list-group-item"}> {ingredient.name} {ingredient.amount}</a>)}
                </ul>
            </div>
        </div>

    return (
        result
    );
}

export default ShoppingList;