import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Makeup from './Makeup';
import '../styles/App.css';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const App = () => {
  const [makeup, setMakeup] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_tag=vegan'

    try {
      const response = await fetch(url)
      const makeup = await response.json()
      const filteredMakeup = [];
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

  return (
   <>
    <Route exact path='/'>
      <Makeup 
      makeup={makeup}
      /> 
    </Route>
   </>
  );
}

export default App;
