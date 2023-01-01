import axios, { AxiosResponse, AxiosInstance } from 'axios'

interface IRestaurant {
  id: Number;
  name: String;
  location: string;
  price_range: Number;
}


export const getRestaurants = async ():Promise<IRestaurant[]> => {
  const instance:AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/restaurants'
  })
  const response = await instance.get('/')
  return response.data
}

export const addRestaurant = async (name:String,location:String,price_range:Number) => {
  const instance:AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/restaurants'
  })
  const response = await instance.post('/', {
    name,
    location,
    price_range
  })
  return response.data.data
}

export const deleteRestaurant = async (id:Number) => {
  const instance:AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/restaurants'
  })
  const response = await instance.delete(`/${id}`);
}

export const getRestaurant = async (id:Number) => {
  const instance:AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/restaurants'
  })
  const response = await instance.get(`/${id}`);
  return response.data.data
}

export const updateRestaurant = async (id:String,name:String,location:String,price_range:Number) => {
  const instance:AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/restaurants'
  })
  const updatedRestaurant = await instance.put(`/${id}`,{
    name,
    location,
    price_range
  })

  return updatedRestaurant;
}

export const addReview = async (restaurant_id:String,name:String,review:String,rating:Number) => {
  const instance:AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/restaurants'
  })
  const newReview = await instance.post(`/${restaurant_id}/addReview`,{
    name,
    review,
    rating
  })
  console.log(newReview)
}