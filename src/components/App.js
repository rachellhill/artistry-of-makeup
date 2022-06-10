import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Makeup from './Makeup';
import Nav from './Nav';
import Search from './Search';
import Favorites from './Favorites';
import MakeupDetails from './MakeupDetails';
import Error from './Error';
import '../styles/App.css';


const App = () => {
  const [makeup, setMakeup] = useState([])
  const [favorites, setFavorite] = useState([])
  const [search, setSearch] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_tag=vegan'
    setIsError(false)
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
      console.log(makeup)
    } catch(error) {
      setIsError(true);
    }
    setIsLoading(false)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const addFavorite = (favoritedItem) => {
    setFavorite([...favorites, favoritedItem])
  }

  const removeFavorite = (favoritedItemId) => {
    console.log(favoritedItemId)
    const filteredFavorites = favorites.filter(favoriteProduct => favoritedItemId !== favoriteProduct.id)

    setFavorite(filteredFavorites)
  }

  const searchProducts = makeup.filter(product => product.name.toLowerCase().includes(search))

  return (
   <>
    <Nav />
    {isError ? <Error /> : 
      <Route exact path='/'>
        <h2 className="vegan-header">All Vegan Products</h2>
        <Search 
          search={search}
          setSearch={setSearch}
          /> 
        {(searchProducts.length === 0 && search) && <p className="search-error">Sorry, nothing matches your search. Try searching a different product!</p>}
        <Makeup 
          makeup={searchProducts}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        /> 
      </Route>
    }
    <Route exact path='/product/favorites'>
      <Favorites 
        favorites={favorites}
        removeFavorite={removeFavorite}
      />
    </Route>
    <Route exact path="/:id" render={({ match }) =>  <MakeupDetails id={ match.params.id }/>}>
    </Route>
   </>
  )
}

export default App;
