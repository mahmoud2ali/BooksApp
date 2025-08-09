import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import UsersTable from './pages/adminDashboard/UsersTable';
import BooksTable from './pages/adminDashboard/BooksTable';
import AddBookForm from './pages/adminDashboard/AddBookForm'
import EditBookForm from "./pages/adminDashboard/EditBookForm"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/admin-dashboard'>
          <Route index element={<AdminDashboard />} />
          <Route path='users' element={<UsersTable />} />
          <Route path='books'>
            <Route index element={<BooksTable />} />
            <Route path='add-book' element={<AddBookForm />} />
            <Route path='Edit-book/:id' element={<EditBookForm />} />
          </Route>
          
        </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
