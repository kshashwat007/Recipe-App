import React from 'react';
import style from '../recipe.module.css';

const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className="recipe_title">{title}</h1>
            <div className="image_div">
                <img className="image" src={image} alt="" />
            </div>
            <ul className="ingredients">
                {ingredients.map(ingredient => (
                    <li className="ingredient">
                        <i className="fas fa-caret-right" />{ingredient.text}
                    </li>
                ))}
            </ul>
            <p className="calories">Calories: {parseInt(calories)} Kcal</p>
        </div>
    );
};

export default Recipe;