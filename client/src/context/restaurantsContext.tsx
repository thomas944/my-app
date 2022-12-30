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
  restaurants: IRestaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<any>>
} 

const IRestaurantContextState = {
  restaurants: [],
  setRestaurants: () => {}
}

export const RestaurantsContext = createContext<RestaurantContextType>(IRestaurantContextState);
//export const RestaurantsContext = createContext<RestaurantContextType | null>(null);

export const RestaurantsContextProvider: React.FC<Props> = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  // const providerValue: RestaurantContextType = {
  //   restaurants,
  //   setRestaurants,
  // };
  
  // return (
  //     <RestaurantsContext.Provider value={providerValue}>
  //       {children}
  //     </RestaurantsContext.Provider>
  // )
  return (
    <RestaurantsContext.Provider value={{restaurants,setRestaurants}}>
      {children}
    </RestaurantsContext.Provider>
  )
};


