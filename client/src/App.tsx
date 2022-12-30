import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home.tsx'
import RestaurantDetailPage from './routes/RestaurantDetailPage.tsx'
import UpdatePage from './routes/UpdatePage.tsx'
import { RestaurantsContextProvider } from './context/restaurantsContext.tsx'
import { useState } from 'react'

const App = () => {  

  return (
    <RestaurantsContextProvider>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/restaurants/:id/update' element={<UpdatePage />} /> 
            <Route path='/restaurants/:id' element={<RestaurantDetailPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RestaurantsContextProvider>    
  )
}

export default App;
