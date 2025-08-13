import { BrowserRouter, Routes, Route, useLocation, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminDashboard from "./Componants/adminDashboard/AdminDashboard.jsx";
import UsersTable from "./Componants/adminDashboard/BooksTable.jsx";
import BooksTable from "./Componants/adminDashboard/UsersTable.jsx";
import AddBookForm from "./Componants/adminDashboard/AddBookForm.jsx";
import EditBookForm from "./Componants/adminDashboard/EditBookForm.jsx";
import SharedNav from "./Componants/SharedNav.jsx";
import Landing from "./Componants/Landing/Landing.jsx";
import NotFound from "./Componants/NotFound.jsx";
import  SharedFooter from "./Componants/Sharedfooter.jsx";

import LoginForm from "./Componants/Form/LoginForm.jsx";
import RegisterForm from "./Componants/Form/RegisterForm.jsx";
import About from "./Componants/about/About.jsx";
import Contact from "./Componants/contact/Contact.jsx";
import Forgot from "./Componants/Form/Forgot.jsx";

function Layout() {

  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgot";

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
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UsersTable />} />
          <Route path="books">
            <Route index element={<BooksTable />} />
            <Route path="add-book" element={<AddBookForm />} />
            <Route path="edit-book/:id" element={<EditBookForm />} />
          </Route>
        </Route>

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
