import { Link } from "react-router-dom"

const NavBar = () => {
  return (
  <div className="navbar">
    <img src='https://images.squarespace-cdn.com/content/v1/596fa04517bffc637c5b1745/1635735244718-OO9DE8AR3INBZUMPFDCL/18th+Annual+PFK.png?format=300w' className="par-logo-nav"/>
    <Link to='/'>Home</Link>
    <Link to='/items'>Auction Items</Link>
    <Link to='/profile'>Profile</Link>
    <button>Log Out</button>
  </div>
)
}

export default NavBar