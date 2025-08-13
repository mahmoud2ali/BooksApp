import React, {useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { Button,Card } from '../../../node_modules/react-bootstrap/esm/index';
import book1 from "../../images/b1.webp";
import book2 from "../../images/b2.jpeg";
import book3 from "../../images/b3.jpg";
import book4 from "../../images/b4.jpg";
import book5 from "../../images/book5.jpg";
import book6 from "../../images/book6.jpg";
import book7 from "../../images/book7.jpg";
import book8 from "../../images/book8.jpg";
import { Link } from 'react-router-dom';

export default function SingleBook({book,isFav,toggleFavorite}) {
  const[Exist,setExist]=useState(false);
  const images={
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
    book8
  };
  return (
       <Card 
       className="myCard pt-3 px-3" 
       style={{ width: '18rem' }} 
       onMouseEnter={()=> setExist(true)}
       onMouseLeave={() => setExist(false)}>
        <Card.Img className="border border-1" variant="top" src={images[book.image]} />
        <Card.Body className="text-center">
          <Link className="link text-decoration-none fw-bold fs-5" to={`/books/${book.id}`} >{book.title}</Link>
          <p className="p fw-semibold">{book.category}</p>
        </Card.Body>
        {/* Favorite button */}
        <div 
        className="FavBox"
        onClick={()=> toggleFavorite(book)}
        style={{backgroundColor: isFav? "#ff1e4b":"white", cursor:"pointer"}}>
        <IoIosHeartEmpty
         className={`favIcon w-75 h-75 fs-1 ${isFav ? "text-light":"text-secondary" }`} />
          </div>
          {/* Download button */}
          <Button 
          style={{
            backgroundColor:"black",
            border:"1px solid #1a1668",
            position: "absolute",
            bottom: "-25px",
            left: "50%",
            transform: `translateX(-50%) ${Exist ? "translateY(0)" : "translateY(10px)"}`,
            opacity: Exist ? 1 : 0,
            transition: "opacity 0.5s ease, transform 0.5s ease"
          }}
          className={`downloadBtn py-2`}>
              Download Now
          </Button>
      </Card>

  )
}
