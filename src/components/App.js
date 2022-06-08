import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Makeup from './Makeup';
import Nav from './Nav';
import Favorites from './Favorites';
import '../styles/App.css';

const App = () => {
  const [makeup, setMakeup] = useState([])
  const [favorites, setFavorite] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_tag=vegan'

    try {
      const response = await fetch(url)
      const makeup = await response.json()
      // for each item name, split into an array, remove first item in array with shift and join back together in original name format 
      // set state with new item name
      makeup.forEach(item => {
        const split = item.name.split(' ')
        split.shift()
        const string = split.join(' ')
        item.name = string
      })
      setMakeup(makeup)
    } catch(error) {
      setError(error.message)
    }
    setIsLoading(false)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const addFavorite = (favoritedItem) => {
    setFavorite([...favorites, favoritedItem])
  }

  return (
   <>
    <Nav />
    <Route exact path='/'>
      <Makeup 
        makeup={makeup}
        addFavorite={addFavorite}
      /> 
    </Route>
    <Route exact path='/favorites'>
      <Favorites 
        favorites={favorites}
      />
    </Route>
   </>
  );
}

export default App;
