import React, { useState, createContext, FC } from 'react'

interface IRestaurant {
  id: Number;
  name: String;
  location: string;
  price_range: Number;
}

// export interface RestaurantContextType {
//   restaurants?: IRestaurant;
//   setRestaurants: (restaurants:IRestaurant) => void;
// }

interface Props {
  children: React.ReactNode
}

type RestaurantContextType = {
  context: IRestaurant[];
  setContext: React.Dispatch<React.SetStateAction<any>>
  addContext: React.Dispatch<React.SetStateAction<any>>
} 

const IRestaurantContextState = {
  context: [],
  setContext: () => {},
  addContext: () => {},
}

export const RestaurantsContext = createContext<RestaurantContextType>(IRestaurantContextState);
//export const RestaurantsContext = createContext<RestaurantContextType | null>(null);

export const RestaurantsContextProvider: React.FC<Props> = ({ children }) => {
  const [context, setContext] = useState([] as any);

  const addContext = (restaurant:any) => {
    setContext([...context, restaurant])
  }

  return (
    <RestaurantsContext.Provider value={{context, setContext, addContext}}>
      {children}
    </RestaurantsContext.Provider>
  )
};


