import { Router } from 'express'
import { 
  getRestaurant, 
  getAllRestaurants, 
  createRestaurant, 
  deleteRestaurant, 
  updateRestaurant,
  addReview,
} from "../controllers/restaurant"

const router = Router();
router
  .route('/')
  .get(getAllRestaurants)
  .post(createRestaurant)

router
  .route('/:id')
  .get(getRestaurant)
  .delete(deleteRestaurant)
  .put(updateRestaurant)

router
  .route('/:id/addReview')
  .post(addReview)
  
export default router