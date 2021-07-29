import React from 'react';

function RecipeItem(props) {
    const r = props.recipe;
    return (
        <div onClick={props.onClick}>
            <a onClick={event => {event.preventDefault()}} href="" className="list-group-item clearfix">
                <div className="pull-left">
                    <h4 className="list-group-item-heading">{r.name}</h4>
                    <p className="list-group-item-text">{r.description}</p>
                </div>
                <span className="pull-right">
                        <img src={r.imagePath} alt="" className="img-responsive" style={{maxHeight: '50px'}}/>
                    </span>

            </a>
        </div>
    );
}

export default RecipeItem;