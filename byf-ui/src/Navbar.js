import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Book Your Friend</h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
               
            </div>
        </nav>
     );
}
 
export default Navbar;