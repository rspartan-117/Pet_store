
import './Navbar.css'; // Add custom CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Zigly</h1>
                <p>For Happy Pets</p>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search.." />
            </div>
            <div className="nav-links">
                <a href="/">Dogs</a>
                <a href="/">Cats</a>
                <a href="/">Small Pets</a>
                <a href="/">Bird</a>
                <a href="/">Brand</a>
                <a href="/">Pet Grooming</a>
                <a href="/">Vet Care</a>
                <a href="/">Our Stores</a>
                <a href="/">Blog</a>
                <a href="/">Happy Pets</a>
            </div>
            <div className="nav-icons">
                <button>Track</button>
                <button>Location</button>
                <button>Cart</button>
                <button>Profile</button>
            </div>
        </nav>
    );
};

export default Navbar;
