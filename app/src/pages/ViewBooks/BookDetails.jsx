import React from 'react';
import { useParams } from 'react-router-dom';
// book images
import book1 from "../../images/b1.webp";
import book2 from "../../images/b2.jpeg";
import book3 from "../../images/b3.jpg";
import book4 from "../../images/b4.jpg";
import book5 from "../../images/book5.jpg";
import book6 from "../../images/book6.jpg";
import book7 from "../../images/book7.jpg";
import book8 from "../../images/book8.jpg";
// Auther images
import author1 from "../../images/Alex.jpg";
import author2 from "../../images/James.jpg";
import author3 from "../../images/Andy.jpg";
import author4 from "../../images/Harper-Lee.jpg";
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { IoIosHeartEmpty } from 'react-icons/io';

export default function BookDetails() {
    const[isFav,setFav]=useState(false);
    const bookImages={
        book1,
        book2,
        book3,
        book4,
        book5,
        book6,
        book7,
        book8
      };
      const authorImages={
        author1,
        author2,
        author3,
        author4
      };
    const { id } = useParams();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:3000/books/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data))
        .catch((err) => console.error(err));
    }, [id]);
  
    if (!book) return <p>Loading...</p>;
  return (
   <section className="Book-details py-5">
      <div className="container py-2">
        <div className="row gap-5 d-flex flex-md-row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <img className="d-block w-100 border border-2" src={bookImages[book.image]} alt="cover-of-book" />
            </div>
    {/* col-2 */}
            <div className="col text-lg-start text-md-center text-sm-center text-center py-3">
            <h3 className="display-5 fw-bold">{book.title}</h3>
            {/* book information */}
           <div className="book-info row  row-cols-4 row-cols-md-4 py-4 d-flex flex-row align-items-center">
            <div className="col">
            <img className="d-block w-50 h-75 rounded rounded-4" src={authorImages[book.authorPhoto]} alt="auther-image" />
            </div>
            <div className="col">
             <span>Writen by</span>
              <h5>{book.author}</h5>
            </div>
            <div className="col">
            <span>Publisher</span>
            <h5>{book.Publisher}</h5>
            </div>
            <div className="col">
            <span>Year</span>
            <h5>{book.year}</h5>
            </div>
           </div>
           {/* book descrption */}
           <div className="descrption py-2 pb-5">
           <p className="desc">
            <b style={{color: "#28242a"}}> {book.description}</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
            <p className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                </p>
           </div>
        <div className="btns d-flex flex-row px-5 justify-content-end">
        <Button 
          style={{
            backgroundColor: "#df0139",
            border:"1px solid #df0139",
            boxShadow: "2px 4px 6px 2px rgba(0, 0, 0, 0.2)"
          }}
          className={`detBtn py-2 mt-1  mx-md-auto mx-sm-auto m-xauto`}>
              Download Now
          </Button>
          {/* <div className="FavBox-2"
            onClick={()=> setFav(!isFav)}
            style={{backgroundColor: isFav? "#ff1e4b":"white", cursor:"pointer"}}>
            <IoIosHeartEmpty
            className={`favIcon w-75 h-75 fs-1 ${isFav ? "text-light":"text-secondry" }`} />
          </div> */}
        </div>
            </div>
        </div>
      </div>
   </section>
  )
}
