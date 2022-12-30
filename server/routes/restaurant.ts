import { Router } from 'express'
import { 
  getRestaurant, 
  getAllRestaurants, 
  createRestaurant, 
  deleteRestaurant, 
  updateRestaurant 
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
  
export default router