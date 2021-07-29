import React, {useState} from 'react';
import RecipeItem from './Recipe-item/RecipeItem';


function RecipeList(props) {
    const [recipes, setRecipes] =  useState([{name: 'A Test recipe', description: 'This is simply a test', imagePath: 'https://get.pxhere.com/photo/egg-dish-food-cuisine-ingredient-produce-menemen-recipe-comfort-food-brunch-meal-frittata-Queso-flameado-breakfast-side-dish-poached-egg-turkish-food-indian-cuisine-1620832.jpg'},
        {name: 'A Test recipe', description: 'This is simply a test', imagePath: 'https://get.pxhere.com/photo/egg-dish-food-cuisine-ingredient-produce-menemen-recipe-comfort-food-brunch-meal-frittata-Queso-flameado-breakfast-side-dish-poached-egg-turkish-food-indian-cuisine-1620832.jpg'}]);

    return (
        <div>
            <div className={"row"}>
                <div className="col-xs-12">
                    <button className="btn btn-success">New recipe</button>
                </div>

            </div>
            <hr/>
      <div className="row">
          {recipes.map(r => <RecipeItem recipe={r} onClick={() => {props.onClick(r)}} />)}
       </div>
        </div>
    );
}

export default RecipeList;