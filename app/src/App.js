import { BrowserRouter, Routes, Route, useLocation, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import './App.css';
import AdminDashboard from "./Componants/adminDashboard/AdminDashboard";
import UsersTable from "./Componants/adminDashboard/UsersTable";
import BooksTable from "./Componants/adminDashboard/BooksTable";
import AddBookForm from "./Componants/adminDashboard/AddBookForm";
import EditBookForm from "./Componants/adminDashboard/EditBookForm";
import SharedNav from "./Componants/SharedNav";
import Landing from "./Componants/Landing/Landing";
import NotFound from "./Componants/NotFound";
import  SharedFooter from "./Componants/Sharedfooter";
import LoginForm from "./Componants/Form/LoginForm.jsx";
import RegisterForm from "./Componants/Form/RegisterForm.jsx";
import GridBooks from "./pages/ViewBooks/GridBooks";
import BookDetails from "./pages/ViewBooks/BookDetails";
import FavoriteBooks from "./pages/FavoriteBooks";
import About from "./Componants/about/About.jsx";
import Contact from "./Componants/contact/Contact.jsx";
import Forgot from "./Componants/Form/Forgot.jsx";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";




function Layout() {

  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgot";

  // const dash = location.pathname === "/admin-dashboard"

  const {user} = useContext(UserContext);
  
  console.log("user: ", user);




  return (
      <div className="d-flex flex-column min-vh-100">

     
      {!hideLayout && <SharedNav />}

      <div className="flex-grow-1">

     
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot" element={<Forgot />} />

        {/* Public Routes */}
        <Route path="/" element={<Landing/>} />
        <Route path="*" element={<NotFound/>} />

        {/* Admin Routes */}
        
        <Route path="/admin-dashboard">
          <Route index element={ user?.admin ?  <AdminDashboard /> : <h1 className="text-danger text-center my-5">You are not admin!</h1>  } />
          <Route path="users" element={user?.admin ? <UsersTable /> : <h1 className="text-danger text-center my-5">You are not admin!</h1>} />
          <Route path="books">
            <Route index element= { user?.admin ?   <BooksTable /> : <h1 className="text-danger text-center my-5">You are not admin!</h1>} />
            <Route path="add-book" element={ user?.admin ?   <AddBookForm /> : <h1 className="text-danger text-center my-5">You are not admin!</h1> } />
            <Route path="edit-book/:id" element={ user?.admin ?   <EditBookForm /> : <h1 className="text-danger text-center my-5">You are not admin!</h1> } />
          </Route>
        </Route>

        {/* GridBooks */}
        <Route path="/product" element={<GridBooks />} />
        <Route path="/books/:id" element={<BookDetails/>} />
        <Route path="/Favorites" element={<FavoriteBooks />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact/>} />

      </Routes>
       </div>

     
      {!hideLayout && <SharedFooter />}
       </div>
       
  );
}
function App(){
  return(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
export default App;
