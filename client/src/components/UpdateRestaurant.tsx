import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRestaurant, updateRestaurant } from '../api/api.ts'


const UpdateRestaurant = (props) => {
  const {id} = useParams();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  let navigate = useNavigate();

  const fetchData = async (id:any) => {
    const response = await getRestaurant(id)
    setName(response.name);
    setLocation(response.location);
    setPriceRange(response.price_range);
  }

  const handleSubmit = async (e, id:any,name:String,location:String,priceRange:String) => {
    e.preventDefault();
    updateRestaurant(id,name,location,priceRange).then(() => {
      navigate('/');
    })
  }

  useEffect(()=> {
    fetchData(id);
  }, [])
  
  return (
    <>
    <form action="">
      <div className="form-group">
        <label htmlFor='name'>Name</label>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          id='name' 
          className='form-control' 
          type='text'>
        </input>
      </div>
    </form>
    <form action="">
      <div className="form-group">
        <label htmlFor='location'>Location</label>
        <input 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          id='location' 
          className='form-control' 
          type='text'>
        </input>
      </div>
    </form>
    <form action="">
      <div className="form-group">
        <label htmlFor='price_range'>Price Range</label>
          <input 
            value={priceRange} 
            onChange={(e) => setPriceRange(e.target.value)} 
            id='price_range' 
            className='form-control' 
            type='Number'>
          </input>      
       </div>
      <button type='submit' onClick={(e) => handleSubmit(e,id,name,location,priceRange)} className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default UpdateRestaurant