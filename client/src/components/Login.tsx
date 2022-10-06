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
  password: string,
  phoneNumber: string,
}

interface CurrentUser {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
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
    let user = await axios.get(`${BASE_URL}/users/${correctUser.id}`)
    console.log(user)
    setCurrentUser(user.data)
    setFormValues(initialFormValues)
    navigate('/items')
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