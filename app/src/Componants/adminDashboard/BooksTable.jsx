import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios"
import Table from 'react-bootstrap/Table';


export default function BooksTable() {

    const [books, setBooks] = useState([])



    var deleteBook = (e, id)=>{
        e.preventDefault();

        if(window.confirm("Are you sure you want to delete this book? ")){
            axios.delete(`http://localhost:3000/books/${id}`)
            .then(()=>{
                setBooks(prevBooks => prevBooks.filter(book=>book.id !== id));
            })
            .catch(err => {
                console.log(err);
            })
        }

    }



    useEffect(()=>{
        axios.get("http://localhost:3000/books")
        .then(response=>{
            setBooks(response.data);
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

  return (
    <>
        {/* <div className='my-2 text-center mx-auto '>
            <Button as={Link} to="/admin-dashboard/users" variant="primary" className='mx-1'>Users</Button>
            <Button as={Link} to="/admin-dashboard/books" variant="primary" className='mx-1'>Books</Button>
        </div> */}

        <div className='my-3 text-center mx-auto '>
            <Button as={Link} to={"add-book"} variant="danger" className='text-white fw-bold px-4 py-2 rounded-pill' >Add New Book</Button>
        </div>

        <div className='container-lg container-md' >
            <h5>Books</h5>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>description</th>
                        <th>author</th>
                        <th>year</th>
                        <th>category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books?.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>{book.category}</td>

                            <td className='text-center'>
                                <div className='d-flex flex-sm-row flex-column justify-content-around gap-1'>
                                    <Button variant='btn btn-outline-danger btn-sm' onClick={(e) => deleteBook(e, book.id)} className="fw-bold px-4 py-2 rounded-pill">Delete</Button>
                                    <Button as={Link} to={`edit-book/${book.id}`} variant='btn btn-outline-secondary btn-sm' className="fw-bold px-4 py-2 rounded-pill">Edit</Button>
                                </div>
                            </td>
                        </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="7" className='text-right'>
                            count: {books.length}
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
  
    </>
  )
}
