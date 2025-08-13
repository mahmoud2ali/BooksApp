// @ts-ignore
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">

     
      <SharedNav />

      <div className="flex-grow-1">

     
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Public Routes */}
        <Route path="/" element={<Landing/>} />
        <Route path="*" element={<NotFound/>} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard">
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UsersTable />} />
          <Route path="books">
            <Route index element={<BooksTable />} />
            <Route path="add-book" element={<AddBookForm />} />
            <Route path="edit-book/:id" element={<EditBookForm />} />
          </Route>
        </Route>
        {/* GridBooks */}
        <Route path="/product" element={<GridBooks />} />
        <Route path="/books/:id" element={<BookDetails/>} />
        <Route path="/Favorites" element={<FavoriteBooks />} />
      </Routes>
       </div>

     
      <SharedFooter/>
       </div>
    </BrowserRouter>
  );
}

export default App;
