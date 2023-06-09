import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> My Profile</h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/post/create">New post</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;