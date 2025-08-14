import React, {useEffect, useState } from 'react';
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
import book12 from "../../images/book12.jpg";
import { Link, useNavigate } from 'react-router-dom';

export default function SingleBook({book,isFav,toggleFavorite}) {
  const[Exist,setExist]=useState(false);
  const navigate=useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const handleFavourites=()=>{
      if(user && user !== "Guest"){
        toggleFavorite(book);
      }
      else{
        navigate("/login")
      }
  };
  const[message,setMessage]=useState("");
  const handleDownloading=()=>{
    if(user && user !== "Guest"){
       setMessage(
        <span>
        <span className="text-danger text-bold">"{book.title}" </span>Downloading....
        </span>
       );
       setTimeout(()=>{
        setMessage(
          <span>
          <span className="text-danger text-bold">"{book.title}" </span>Downloaded successfuly!
          </span>
         );
         setTimeout(()=> setMessage(""), 2000);
       },3000);
    }
    else{
      navigate("/login")
    }
};
  const images={
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
    book8,
    book12
  };
  return (
    <div className="wrap">
      {message&&<p className="message p-3 border border-1 bg-primary-subtle rounded-3">{message}</p>}
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
        onClick={handleFavourites}
        style={{backgroundColor: isFav? "#ff1e4b":"white", cursor:"pointer"}}>
        <IoIosHeartEmpty
         className={`favIcon w-75 h-75 fs-1 ${isFav ? "text-light":"text-secondary" }`} />
          </div>
          {/* Download button */}
          <Button 
          onClick={handleDownloading}
          style={{
            backgroundColor:"black",
            border:"1px solid #1a1668",
            position: "absolute",
            bottom: "-25px",
            left: "50%",
            transform: `${Exist ? "translateY(0)" : "translateY(10px)"}`,
            opacity: Exist ? 1 : 0,
            transition: "opacity 0.5s ease, transform 0.5s ease"
          }}
          className={`downloadBtn py-2`}>
              Download Now
          </Button>
      </Card>
    </div>
  )
}
