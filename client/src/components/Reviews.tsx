import React from 'react'
import Rating from './Rating.tsx'

const Reviews = (reviews) => {
  const array = reviews.reviews.reviews;
  //console.log(array)
  if (array) {
    return (
      <div className='row row-cols-3 mb-2'>
        {array.map((review) => {
          return (
            <div key={review.id}
              className="card text-white bg-primary mb-3 mr-4"
              style={{ maxWidth: "30%" }}>
            <div className="card-header d-flex justify-content-between padding">
              <span>{review.name}</span>
              <span>
                <Rating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
            )
        })}
      </div>
    ) 
  }
  

    /*<>
   <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between padding">
          <span>Joan</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div> 
    
    </>*/
     
    
  
}

export default Reviews