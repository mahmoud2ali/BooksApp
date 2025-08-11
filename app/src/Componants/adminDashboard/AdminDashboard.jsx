import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <>
    <div className='my-2 text-center mx-auto '>
        <Button as={Link} to="users" variant="primary" className='mx-1'>Users</Button>
        <Button as={Link} to="books" variant="primary" className='mx-1'>Books</Button>
    </div>

    </>
  )
}
