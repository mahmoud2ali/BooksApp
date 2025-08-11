import { BrowserRouter, Routes, Route } from "react-router-dom";


import AdminDashboard from "./Componants/adminDashboard/AdminDashboard";
import UsersTable from "./Componants/adminDashboard/BooksTable";
import BooksTable from "./Componants/adminDashboard/UsersTable.jsx";
import AddBookForm from "./Componants/adminDashboard/AddBookForm";
import EditBookForm from "./Componants/adminDashboard/EditBookForm";
import SharedNav from "./Componants/SharedNav";
import Landing from "./Componants/Landing/Landing";
import NotFound from "./Componants/NotFound";
import  SharedFooter from "./Componants/Sharedfooter";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">

     
      <SharedNav />

      <div className="flex-grow-1">

     
      <Routes>
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
      </Routes>
       </div>

     
      <SharedFooter/>
       </div>
    </BrowserRouter>
  );
}

export default App;
