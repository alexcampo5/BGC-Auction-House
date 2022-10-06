import { useNavigate } from "react-router-dom"


const Home = () => {

  const navigate = useNavigate()

  const navigateLogin = () => {
    navigate('/login')
  }

  const navigateSignUp = () => {
    navigate('/signup')
  }

  const navigateListings = () => {
    navigate('/items')
  }


    return (
    <div className="homepage">
      <img src='https://images.squarespace-cdn.com/content/v1/596fa04517bffc637c5b1745/1635735244718-OO9DE8AR3INBZUMPFDCL/18th+Annual+PFK.png?format=300w' />
      <h1>Welcome to Par Fore Kids</h1>
      <div className="home-button-container">
        <button onClick={navigateLogin} className='home-button'>Login</button>
        <button onClick={navigateSignUp} className='home-button'>Sign Up</button>
        <button onClick={navigateListings} className='home-button'>View Auction Items</button>
      </div>
    </div>
  )
}

export default Home