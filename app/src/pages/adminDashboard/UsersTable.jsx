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
        <div className='my-2 text-center mx-auto '>
            <Button as={Link} to="/admin-dashboard/users" variant="primary" className='mx-1'>Users</Button>
            <Button as={Link} to="/admin-dashboard/Books" variant="primary" className='mx-1'>Books</Button>
        </div>

        <div className='container-lg container-md' >
            <h5>Users</h5>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.admin? "admin": "user"}</td>
                            <td className='text-center'>
                                <Button variant='btn btn-outline-danger btn-sm w-75' onClick={(e) => deleteUser(e, user.id)}>Delete</Button>
                            </td>
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
