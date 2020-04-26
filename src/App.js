import React, {useEffect, useState} from 'react';
import './App.css';


const App = () => {
  
  const APP_ID = 'c7dad31d';
  const API_KEY = 'e8a676191da6bfe0d774109b5d4e509f';

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return(
    <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipes</h1>
          </header>
          <form className='search-form'>
        <input className='search-bar' type="text"/>
        <button className='search-button' type='submit'>
          Search
        </button>
    </form>
      </div>
  );
};

export default App;
