import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a company dedicated to providing high-quality products and services.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main Street, Anytown USA</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Example Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;