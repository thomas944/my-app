import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addReview } from '../api/api.ts';


const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [rating, setRating] = useState('Rating');
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    addReview(id, name, reviewText, rating);
    window.location.reload();
  }


  return (
    <div className='mb-2'>
      <form action=''>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor='name'>Name</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name' 
              placeholder="name" 
              type='text' 
              className='form-control'
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select 
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating" 
              className='custom-select'
            >
              <option disabled>Rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor='Review'>Review</label>
          <textarea 
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review" 
            className="form-control">

            </textarea>
        </div>
        <button onClick={handleSubmitReview} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddReview