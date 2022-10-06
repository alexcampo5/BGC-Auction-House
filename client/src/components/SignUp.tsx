import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

type SignUpProps = {}
type FormValues = {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  phoneNumber: string,
  password: string,
  confirmPassword: string,
}

const SignUp = () => {
  const initialFormValues: FormValues = {
      firstName: '',
      lastName: '',
      username:'',
      email: '',
      phoneNumber: '',
      password:'',
      confirmPassword: ''
  }
  

  let navigate = useNavigate()
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(formValues)
  }
  return (
  <div>
    <h1>Sign Up</h1>
    <form>
      <div>
        <input type='text' onChange={handleChange} name='firstName' placeholder='First Name' value={formValues.firstName} required/>
      </div>
      <div>
        <input type='text' onChange={handleChange} name='lastName' placeholder='Last Name' value={formValues.lastName} required/>
      </div>
      <div>
        <input type='text' onChange={handleChange} name='username' placeholder='username' value={formValues.username} required/>
      </div>
      <div>
        <input type='email' onChange={handleChange} name='email' placeholder='email' value={formValues.email} required/>
      </div>
      <div>
        <input type='text' onChange={handleChange} name='phoneNumber' placeholder='Phone Number' value={formValues.phoneNumber} required/>
      </div>
      <div>
        <input type='password' onChange={handleChange} name='password' placeholder='Password' value={formValues.password} required/>
      </div>
      <div>
        <input type='password' onChange={handleChange} name='confirmPassword' placeholder='Confirm Password' value={formValues.confirmPassword} required/>
      </div>
    </form>
  </div>
)
}

export default SignUp