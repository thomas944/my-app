import React from 'react'
import Header from '../components/Header.tsx'
import AddRestaurant from '../components/AddRestaurant.tsx'
import RestaurantList from '../components/RestaurantList.tsx'

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  )
}

export default Home