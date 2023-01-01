import React from 'react'
import {FontAwesomeIcon } from 'font-awesome'

const Rating = ({rating}) => {
  const stars:any[] = []; 
  for (let i = 1; i <=5 ; i++){
    if (i <= rating){
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)){
      stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    } 

  }
  return (
    <>
    {stars}
    </>
  )
}

export default Rating