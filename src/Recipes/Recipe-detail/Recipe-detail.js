import React from 'react';

function RecipeDetail(props) {
    if(!props.selectedRecipe){
        return <div>Please select a recipe</div>
    }

    const {description, name, imagePath } = props.selectedRecipe;

    return (
        <div>
            <div className={'row'}>
                <div className="col-xs-12">
                    <img src={imagePath} alt="" style={{maxHeight: '300px'}} className="img-responsive"/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>{name}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle">Manage recipe <span className={'caret'} /></button>
                        <ul className={'dropdown-menu'}>
                            <li><a href="#">To Shopping List</a></li>
                            <li><a href="#">Edit Recipe</a></li>
                            <li><a href="#">Delete recipe</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    {description}
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    Ingredients:
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;