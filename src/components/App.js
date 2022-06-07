import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Makeup from './Makeup';
import '../styles/App.css';

const App = () => {
  const [makeup, setMakeup] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json'

    try {
      const response = await fetch(url)
      const makeup = await response.json()
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
