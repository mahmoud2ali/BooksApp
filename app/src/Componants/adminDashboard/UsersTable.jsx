import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios"
import Table from 'react-bootstrap/Table';


export default function UsersTable() {

    const [users, setUsers] = useState([])



    var deleteUser = (e, id)=>{
        e.preventDefault();

        if(window.confirm("Are you sure you want to delete this user? ")){
            axios.delete(`http://localhost:3000/users/${id}`)
            .then(()=>{
                setUsers(prevUsers => prevUsers.filter(user=>user.id !== id));
            })
            .catch(err => {
                console.log(err);
            })
        }

    }


    var toggelRole =(e, id) =>{
        e.preventDefault();

        if(window.confirm("Are you sure you want to toogle this user's role? ")){
            const user = users.find(u =>u.id === id);
            if(user)
            {
                // console.log("user found: ", user);
                user.admin = !user.admin;
                
                axios.patch(`http://localhost:3000/users/${id}`, user)
                .then(()=>{
                    setUsers(prevUsers =>
                        prevUsers.map(u => u.id === id ? user : u)
                    );
                })
                .catch(err => {
                    console.log(err);
                })

                alert("success!")
            }
        }
            
    }

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(response=>{
            setUsers(response.data);
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

        <div className='container-lg container-md my-3' >
            <h5>Users</h5>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th width="120px">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.admin? "admin": "user"}</td>
                            <td className='text-center'>
                                <div className='d-flex flex-sm-row flex-column justify-content-around gap-1'>
                                    <Button variant='btn btn-outline-danger btn-sm ' className="fw-bold px-4 py-2 rounded-pill" onClick={e => deleteUser(e, user.id)}>Delete</Button>
                                    <Button variant='btn btn-outline-secondary btn-sm ' className="fw-bold px-4 py-2 rounded-pill" onClick={ e => toggelRole(e, user.id)}>Toggel</Button>
                                </div>
                            </td>
                            {/* <td className='text-center'>
                                <Button variant='btn btn-outline-danger btn-sm w-75' onClick={(e) => deleteUser(e, user.id)}>Delete</Button>
                            </td> */}
                        </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className='text-right'>
                            count: {users.length}
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
  
    </>
  )
}
