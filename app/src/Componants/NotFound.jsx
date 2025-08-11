import { Badge } from "react-bootstrap";

function NotFound() {
  return (
    <div>
      <div className="text-center my-5   nh ">
       
         <Badge bg="danger" className="display-1 fw-bold shadow">
           <h1>404</h1>
         </Badge>
        <h3>Page Not Found</h3>
        <p>Sorry, the page you are looking for does not exist.</p>
        
      </div>
      
      
    </div>
  );
}

export default NotFound;

