import { Link } from "react-router-dom"
import {useNavigate} from 'react-router-dom'

interface CurrentUser {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  passwordDigest: string,
  phoneNumber: string,
}

interface NavProps {
  currentUser: CurrentUser;
  initialUserValues: CurrentUser;
  setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUser>>
}

const NavBar = ({currentUser, setCurrentUser, initialUserValues}: NavProps) => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    setCurrentUser(initialUserValues)
    navigate('/')
  }


  return (
  <div className="navbar">
    <p>Welcome {currentUser.firstName}</p>
    <img src='https://images.squarespace-cdn.com/content/v1/596fa04517bffc637c5b1745/1635735244718-OO9DE8AR3INBZUMPFDCL/18th+Annual+PFK.png?format=300w' className="par-logo-nav"/>
    <Link to='/'><a>Home</a></Link>
    <Link to='/items'><a>Auction Items</a></Link>
    <Link to='/profile'><a>Profile</a></Link>
    <button onClick={handleLogOut}>Log Out</button>
  </div>
)
}

export default NavBar