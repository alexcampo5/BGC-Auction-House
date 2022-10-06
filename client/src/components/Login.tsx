import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../services/api' 

interface LoginProps {
    allUsers: {
      id: number,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      password: string,
      phoneNumber: string,
    };
    currentUser: {
      id: number,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      password: string,
      phoneNumber: string,
    };
    setCurrentUser: void
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

  console.log(allUsers)

  const handleLoginSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    let newUser = await axios.get(`${BASE_URL}/users`)
    setFormValues(initialFormValues)
    console.log(newUser)
    navigate('/login')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  return (
  <div>
    <h1>Login</h1>
    <form onSubmit={handleLoginSubmit}>
      <div>
        <input type='text' onChange={handleChange} name='username' placeholder='username' value={formValues.username} required/>
      </div>
      <div>
        <input type='password' onChange={handleChange} name='password' placeholder='password' value={formValues.password} required/>
      </div>
      <button>Login</button>
    </form>
  </div>
)
}

export default Login