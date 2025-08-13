import { createContext, useEffect, useState } from "react";

// create context
export const FavoritesContext=createContext();

//function provider
export function FavoritesProvider({children}){
    const [favorites,setFavorites]=useState(()=>{
        try{
            const saved=localStorage.getItem("favorites");
            return saved ? JSON.parse(saved):[];
        }catch{
            return [];
        }
   });
    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favorites));
        },[favorites]);

    const toggleFavorite=(book)=>{
        if(favorites.some(fav=> fav.id === book.id)){
            setFavorites(favorites.filter(fav=> fav.id !== book.id));
        }else{
            setFavorites([...favorites,book]);
        }
    };

    return(
        <FavoritesContext.Provider value={{favorites,toggleFavorite}}>
            {children}
         </FavoritesContext.Provider>
   );
  
}