import React from 'react'
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <>
    {/* <div className='my-2 text-center mx-auto '>
        <Button as={Link} to="users" variant="primary" className='mx-1'>Users</Button>
        <Button as={Link} to="books" variant="primary" className='mx-1'>Books</Button>
    </div> */}


      <div className="container py-5">
          <h1 className="text-danger fw-bold mb-4">Admin Dashboard</h1>
          <p className="lead text-muted">
            Welcome to the admin panel. From here you can manage users and books.
          </p>
          
          <div className="d-flex gap-3 mt-4">
            <NavLink to="/admin-dashboard/users">
              <Button variant="outline-danger" size="lg" className="fw-bold rounded-pill">
                Manage Users
              </Button>
            </NavLink>
            
            <NavLink to="/admin-dashboard/books">
              <Button variant="outline-danger" size="lg" className="fw-bold rounded-pill">
                Manage Books
              </Button>
            </NavLink>
          </div>
        </div>

    </>
  )
}
