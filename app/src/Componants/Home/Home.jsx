import { Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="  btnRed textWhite bgimg d-flex flex-column justify-content-between align-items-center text-center pt-5">
        <div
          className="btnRed textWhite bgimg d-flex flex-column justify-content-start align-items-center g-5 text-center pb-5"
          style={{ minHeight: "80vh" }} 
        >
         <h1 className="display-1 mt-5 fw-bold text-center ">
  Welcome to Our Bookstore
</h1>
<p className="lead mt-3 text-center display-6 ">
  Every book is a new journey waiting for you.<br />
  Choose your book and start your adventure.
</p>
<Button 
  variant="danger" 
  className="btnAll textWhite mt-5 px-4 py-2 fs-5 rounded-pill d-block mx-auto"
>
  Discover More
</Button>

        </div>
      </div>
    </div>
  );
}

export default Home;
