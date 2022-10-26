import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../services/api' 

interface AllUsers {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  passwordDigest: string,
  phoneNumber: string,
}

interface CurrentUser {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  passwordDigest: string,
  phoneNumber: string,
}

interface LoginProps {
    allUsers: AllUsers[];
    currentUser: CurrentUser;
    setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUser>>
  }

type LoginValues = {
  username: string,
  password: string
}

const Login = ({allUsers, currentUser, setCurrentUser}: LoginProps) => {

  const initialFormValues: LoginValues = {
    username: '',
    password: ''
  }
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleLoginSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    let correctUser: AllUsers = allUsers.find((user) => {
      return (user.username == formValues.username)
    })! //this is a not null operator
    if (formValues.password == correctUser.passwordDigest) {
      let user = await axios.get(`${BASE_URL}/users/${correctUser.id}`)
      console.log(user)
      setCurrentUser(user.data)
      setFormValues(initialFormValues)
      navigate('/items')
    } else{
      alert('Wrong password. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const navSignUp = () => {
    navigate('/signup')
  }


  return (
  <div className='login'>
    <form onSubmit={handleLoginSubmit} className='login-form'>
      <div className='title'>Welcome!</div>
      <div className='subtitle'>Please log in below.</div>
      <div className='input-container'>
        <input className= 'input' type='text' onChange={handleChange} name='username' placeholder='username' value={formValues.username} required/>
      </div>
      <div className='input-container'>
        <input className='input' type='password' onChange={handleChange} name='password' placeholder='password' value={formValues.password} required/>
      </div>
      <button className='submit'>Login</button>
      <button className='submit' onClick={navSignUp}>Not Registered Yet? Sign Up Here.</button>
    </form>
  </div>
)
}

export default Login