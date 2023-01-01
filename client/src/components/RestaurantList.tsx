import React, { useEffect, useContext } from 'react'
import { getRestaurants, deleteRestaurant } from '../api/api.ts'
import { RestaurantsContext } from '../context/restaurantsContext.tsx'
import { useNavigate } from 'react-router-dom'


const RestaurantList = () => {
  // const test:RestaurantContextType {
  //   restaurants,
  //   setRestaurants(),
  // }
  const {context, setContext} = useContext(RestaurantsContext)
  let navigate = useNavigate();


  useEffect(() => {
    (getRestaurants().then(response => setContext(response.data.restaurants)))

  },[])

  const handleDelete = (e, id:Number) => {
    e.stopPropagation();
    deleteRestaurant(id);
    setContext(context.filter((restaurant) => {
      return restaurant.id !== id;
    }) )
  }

  const handleUpdate = (e, id:Number) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  }

  const handleRestaurantSelect = (id:Number) => {
    navigate(`/restaurants/${id}`);
  }

  return (
    <div className='list-group'>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {context && context.map(restaurant => {
            return (
              <tr onClick={() => handleRestaurantSelect(restaurant.id)}key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{'$'.repeat(restaurant.price_range)}</td>
                <td>reviews</td>
                <td>
                  <button onClick={(e) => handleUpdate(e, restaurant.id)} className="btn btn-warning">Update</button>
                </td>
                <td>
                  <button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList