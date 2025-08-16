import React, { useContext, useEffect, useState } from 'react';
import SingleBook from './SingleBook';
// import BookDetails from './BookDetails';
import { FavoritesContext } from '../../context/FavoritesContext';

export default function GridBooks() {
      const[books ,setBooks]=useState([]);
      useEffect(()=>{
        fetch("http://localhost:3000/books")
        .then(response=>response.json()) 
        .then(data=>setBooks(data))
        .catch(error=> console.error('Error :',error));
      },[]);
      // Favorite Feature
      const{favorites,toggleFavorite}=useContext(FavoritesContext);
      // Filter Feature
      const [searchTerm,setSearchTerm]=useState("");
      const filteredBooks=books.filter(book=>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  return (
    <section className="books-section py-5">
    <div className="title-section pt-2">
     <h2 className="display-3 fw-bold text-center">All Books</h2>
    </div>
 <div className="container">
 <input type="text"
              className="form-control py-2 my-4  w-50 m-auto border-2 "
              placeholder="Enter title or category of book....."
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}           />
   <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 d-flex flex-row justify-content-center gap-5">
      {filteredBooks.map(book =>{
            const isFav=favorites.some(fav=> fav.id=== book.id);

      return( 
           <SingleBook 
           key={book.id} 
           book={book}
           isFav={isFav}
           toggleFavorite={toggleFavorite}
            />
           );
          
})}
   </div>
 </div>
</section>
  )
}

