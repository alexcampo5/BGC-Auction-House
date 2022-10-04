const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        phoneNumber: user.phoneNumber
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { firstName, lastName, username, email, phoneNumber, password } =
      req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      passwordDigest
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
