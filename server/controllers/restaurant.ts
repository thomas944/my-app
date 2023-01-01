import { Request, Response } from 'express'
const db = require('../db');

interface Restaurant {
  id: Number;
  name: String;
  location: string;
  price_range: Number;
  restaurant_id: Number;
  count: Number;
  average_rating: Number;
}

interface Reviews {
  id: Number;
  restaurant_id:Number
  name: String;
  review: String;
  rating: Number;
}

/** METHOD: GET */
/** ROUTE: http://localhost:4000/api/v1/restaurants/ */
export const getAllRestaurants = async (_req: Request,res: Response) => {
  try {
    const restaurantsRatingData = await db.query( "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;");
    //console.log(restaurantsRatingData);
    res.status(200).json({
      status: "success",
      results: restaurantsRatingData.rows.length,
      data: {
        restaurants: restaurantsRatingData.rows
      }
    });
  } catch(err:any) {
    console.log(err)
  }
  
}

/** METHOD: POST */
/** ROUTE: http://localhost:4000/api/v1/restaurants/ */
export const createRestaurant = async (_req: Request,res: Response) => {
  try {
    let name = _req.body.name;
    let location = _req.body.location;
    let price_range = _req.body.price_range;
    const results = await db.query('INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *',[name, location, price_range]);
    res.status(200).json({
      status:"success",
      data: {
        restaurants: results.rows[0]
      }
    });
  } catch(err:any) {
    console.log(err)
  }
}

/** METHOD: GET */
/** ROUTE: http://localhost:4000/api/v1/restaurants/:id */
export const getRestaurant = async (_req: Request,res: Response) => {
  try {
    let results = await db.query("select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1", [_req.params.id]);
    const post:Restaurant = results.rows[0];

    results = await db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [_req.params.id]);
    const reviews: Reviews = results.rows;

    res.status(200).json({
      status:"success",
      data: {
        restaurant: post,
        reviews: reviews,
      }
    })

  } catch(err:any) {
    console.log(err)
  }
}

/** METHOD: DELETE */
/** ROUTE: http://localhost:4000/api/v1/restaurants/:id */
export const deleteRestaurant = async (_req: Request,res: Response) => {
  try {
    let id = _req.params.id;
    await db.query('DELETE FROM restaurants WHERE id = $1', [id]);
    res.status(200).json({
      status:"success"
    })
  } catch(err:any) {
    console.log(err)
  }
}

/** METHOD: PUT */
/** ROUTE: http://localhost:4000/api/v1/restaurants/:id */
export const updateRestaurant = async (_req: Request,res: Response) => {
  try {
    let name = _req.body.name;
    let location = _req.body.location;
    let price_range = _req.body.price_range;
    let id = _req.params.id;
    const results = await db.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *',[name, location, price_range, id]);
    res.status(200).json({
      status:"success",
      data: {
        restaurants: results.rows[0]
      }
    });
  } catch(err:any) {
    console.log(err)
  }
}

/** METHOD: POST */
/** ROUTE: http://localhost:4000/api/v1/restaurants/:id/addReview */
export const addReview = async (_req: Request,res: Response) => {
  try{
    let id = _req.params.id;
    let name = _req.body.name;
    let review = _req.body.review;
    let rating = _req.body.rating;
    const newReview = await db.query('INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *' ,[id, name, review, rating]);
    res.status(200).json({
      status:'success',
      data: {
        reviews: newReview.rows[0]
      }
    })
  } catch(err:any) {
    console.log(err)
  }
}
