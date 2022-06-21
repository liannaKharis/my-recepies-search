import { useEffect, useState } from 'react';
import video from './food.mp4'
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = "319b63fa";
  const MY_KEY = "7837dada3d7dc77fb25fea62f9ebf6f2";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('')

  useEffect (()=> {
    getRecipes();
  }, [wordSubmitted])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await response.json();
    setMyRecipes(data.hits)
  }

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
    console.log(e.target.value)
   }
  
   const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
   }

  return (
    <div>
    <div className="container ">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4"/>
</video>
  <h1 className='back-color'>Find a Recipe</h1>
  </div>
  <div className='container'>
    <form onSubmit={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
    </form>
  </div>
  <div className='container'>
    <button>
    <img src="https://img.icons8.com/fluency/48/000000/fry.png" className='icons'/>
    </button>
    </div>
    {myRecipes.map(element => (
      <MyRecipesComponent  
      label = {element.recipe.label}
      mealType = {element.recipe.mealType}
      image = {element.recipe.image} 
      calories = {element.recipe.calories}
      ingredients = {element.recipe.ingredientLines}
      />
    ))}

  </div>
  );
}

export default App;
