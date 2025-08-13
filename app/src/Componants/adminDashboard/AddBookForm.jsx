import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import FormGroup from 'react-bootstrap/esm/FormGroup';

export default function AddBookForm() {
   
    const [book, setBook] = useState({});

    const navigator= useNavigate()


    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post(`http://localhost:3000/books/`, book)
      .then(()=>{
        alert('Book added successfully');
        navigator("/admin-dashboard/books");
      }).catch(err => {
        console.log(err)
      });
    }

  
  return (
    <div className='container my-3'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={book.title} 
            
            onChange={e => 
              setBook({...book, title: e.target.value})
            }

          />
          
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={book.description} 
           onChange={e => 
              setBook({...book, description: e.target.value})}
          />

          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={book.author}
          
           onChange={e => 
              setBook({...book, author: e.target.value})
            }

          />

          <Form.Label>Year</Form.Label>
          <Form.Control type="text" value={book.year}
          
           onChange={e => 
              setBook({...book, year: e.target.value})
            }
          
          />

          <Form.Label>category</Form.Label>
          <Form.Control type="text" value={book.category}
          
           onChange={e => 
              setBook({...book, category: e.target.value})
            }
          
          />
        </Form.Group>


          <FormGroup className="d-flex justify-content-end gap-2 mt-3">
            <Button variant="danger" className='fw-bold px-4 rounded-pill' size="md" type="submit">
              Add
            </Button>
            <Button as={Link} to={"/admin-dashboard/books"} variant="outline-secondary" className='fw-bold px-4 rounded-pill' size="md">
              Cancel
           </Button>
        </FormGroup>

      </Form>
    </div>
  );
  
}
