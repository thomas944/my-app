import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../api/api.ts';
import AddReview from '../components/AddReview.tsx';
import Rating from '../components/Rating.tsx';
import Reviews from '../components/Reviews.tsx';

const RestaurantDetailPage = () => {
  const {id} = useParams();
  const [currRes, setCurrRes] = useState('')
  
  const fetchData = async (id:any) => {
    const currentRestaurant = await getRestaurant(id);
    setCurrRes(currentRestaurant);
  }

  useEffect(() => {
    fetchData(id)
  },[])

  return (

      <>
      <h1 className='text-center display-1'>{currRes.restaurant.name}</h1>
      <div className="mt-3">
        <Reviews reviews={currRes} />
      </div>
      <AddReview />
      </>
  )
}

export default RestaurantDetailPage