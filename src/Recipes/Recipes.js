import React, {useState} from 'react';
import RecipeList from './Recipe-list/Recipe-list';
import RecipeDetail from './Recipe-detail/Recipe-detail';



function Recipes(props) {
    const [selectedRecipe, setSelectedRecipe] = useState(undefined);
    let result = <div></div>
    if( props.selectedComponent === 'recipes')
        result = <div className={"row"}>
            <div className="col-md-5"><RecipeList onClick={recipe => {setSelectedRecipe(recipe)}}/></div>
            <div className="col-md-7"><RecipeDetail selectedRecipe={selectedRecipe}/></div>
        </div>

    return (
        result
    );
}

export default Recipes;