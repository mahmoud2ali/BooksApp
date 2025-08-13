import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import SingleBook from './ViewBooks/SingleBook';

export default function FavoriteBooks() {
    const {favorites,toggleFavorite}=useContext(FavoritesContext);
  return (
   <section className="favorite-section py-5">
      <div className="title-section py-5">
         <h2 className="display-3 fw-bold text-center">Favorite Books</h2>
      </div>
      <div className="container">
        {
            favorites.length===0 ? (
                <p className="text-center fs-5 text-primary">No favorite books yet!</p>
            ):(
                 <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 d-flex flex-row justify-content-center gap-5">
                    {
                        favorites.map(book=>(
                           <SingleBook
                           key={book}
                           book={book}
                           isFav={true}
                           toggleFavorite={toggleFavorite}
                            />
                        )
                        )}
                 </div>
            )
        }
      </div>
    
   </section>
  );
}
