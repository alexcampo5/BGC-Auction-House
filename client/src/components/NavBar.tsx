import { Link } from "react-router-dom"

const NavBar = () => {
  return (
  <div className="navbar">
    <Link to='/'>Home</Link>
    <Link to='/items'>Auction Items</Link>
    <Link to='/profile'>Profile</Link>
    <button>Log Out</button>
  </div>
)
}

export default NavBar