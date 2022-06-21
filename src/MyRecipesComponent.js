import checkMark from "./check-mark.png"

function MyRecipesComponent({label, mealType, image, calories, ingredients}){
    return (
        <div>
            <div className="container"><h2 className="back-color">{label}</h2></div>
            <div className="container"><h3 className="back-color">{mealType}</h3></div>
            <div className="container"><img className="testy" src={image}/></div>
            <ul className="list">
               {ingredients.map(ingredient => (
                <li>
                <img src={checkMark} className="icon"/>
                {ingredient}
                </li>
               ))}
            </ul>
            <div className="container">
            <p className="par">{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}

export default MyRecipesComponent;