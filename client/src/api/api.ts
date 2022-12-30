import axios, { AxiosResponse, AxiosInstance } from 'axios'

interface IRestaurant {
  id: Number;
  name: String;
  location: string;
  price_range: Number;
}


export const getRestaurants = async ():Promise<IRestaurant[]> => {
  const instance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/restaurants'
  })
  const response = await instance.get('/')
  return response.data
}