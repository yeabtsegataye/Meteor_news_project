import { Link } from "react-router-dom";

const Navbar = () => {

    return (
         <div className="Navbar">
          <nav className="navbar navbar-expand-sm bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">NEWS</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <span><Link to='/' className="nav-link">Home</Link></span>
          </li>
          <li className="nav-item">
           <span><Link to='/AddNews' className="nav-link">add news</Link></span>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
    </div> );
   
}

export default Navbar;