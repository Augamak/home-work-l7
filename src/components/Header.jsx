import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/products">Products</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};

export default Header;
