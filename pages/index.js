import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { reactLocalStorage } from 'reactjs-localstorage'
import Swal from 'sweetalert2'
import users from '../src/mock/users'
import userStore from '../src/stores/user'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import validateEmail from '../src/functions/validateEmail'

const index = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useRecoilState(userStore.user)
  const [isOpenSingUp, setIsOpenSignUp] = useState(true)
  const [singUpFields, setSignUpFields] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isShowError, setIsShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSignIn = () => {
    const correctUser = users.find((user) => {
      if (user.username === username && user.password === password) {
        return true        
      }
      return false
    })

    if (correctUser) {
      const userData = {
        isLogin: true,
        firstName: correctUser.firstName,
        lastName: correctUser.lastName,
        age: correctUser.age,
        sex: correctUser.sex,
        username: correctUser.username,
      }
      setUser(userData) // global state
      reactLocalStorage.setObject('user', userData) // local storeage
    } else [
      alert('sign in fail')
    ]
  }

  const onSignUp = () => {
    setIsOpenSignUp(true)
  }

  const onSignOut = () => {
    setUser({})
    reactLocalStorage.setObject('user', {})
  }

  const onChange = (fieldName) => (e) => {
    const text = e.target.value
    setSignUpFields((prev) => ({
      ...prev,
      [fieldName]: text,
    }))
  }

  const createUser = () => {
    setIsShowError(true)
    if (
      checkError('email', true) === '' &&
      checkError('password', true) === '' &&
      checkError('confirm-password', true) === ''
    ) {
      Swal.fire({
        icon: 'success',
        title: 'signup success',
        text: 'please try to login our website',
        confirmButtonColor: '#2ecc71',
        confirmButtonText: `let's roll`,
      })
    }
  }

  const checkError = (field, forceCheck) => {
    if (!forceCheck && !isShowError) return ''

    let error = ''
    if (field === 'email') {
      if (singUpFields.email === '') {
        error = 'please fill email'
      } else if (!validateEmail(singUpFields.email)) {
        error = 'email wrong format'
      }
    } else if (field === 'password') {
      if (singUpFields.password === '') {
        error = 'please fill password'
      } else if (singUpFields.password.length < 6) {
        error = 'please fill password minimum 6 character'
      } else if (singUpFields.password.search(/[a-z]/) < 0) {
        error = 'must have a letter'
      } else if (singUpFields.password.search(/[A-Z]/) < 0) {
        error = 'must have a uppercase letter'
      } else if (singUpFields.password.search(/[0-9]/) < 0) {
        error = 'must have a number'
      }
    } else if (field === 'confirm-password') {
      if (singUpFields.confirmPassword === '') {
        error = 'please fill confirmPassword'
      } else if (singUpFields.confirmPassword.length < 6) {
        error = 'please fill confirmPassword minimum 6 character'
      } else if (singUpFields.confirmPassword.search(/[a-z]/) < 0) {
        error = 'must have a letter'
      } else if (singUpFields.confirmPassword.search(/[A-Z]/) < 0) {
        error = 'must have a uppercase letter'
      } else if (singUpFields.confirmPassword.search(/[0-9]/) < 0) {
        error = 'must have a number'
      } else if (singUpFields.confirmPassword !== singUpFields.password) {
        error = 'confirm password incorrect'
      }
    }
    return error
  }

  if (isOpenSingUp) return (
    <div className="flex flex-col justify-center items-center">
      <Input
        label="Email"
        placeholder="please type email"
        type="email"
        onChange={onChange('email')}
        error={checkError('email')}
      />
      <div className="h-3" />
      <Input
        label="Password"
        placeholder="please type password"
        type="password"
        onChange={onChange('password')}
        error={checkError('password')}
      />
      <div className="h-3" />
      <Input
        label="Confirm-Password"
        placeholder="please type confirm-password"
        type="password"
        onChange={onChange('confirmPassword')}
        error={checkError('confirm-password')}
      />
      <div className="h-6" />
      <Button text="sign up" color="green" onClick={createUser} />
    </div>
  )

  return (
    <div>
      {user.isLogin ? (
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <div className='mt-5'>
            <Button text="Signout" color="red" onClick={onSignOut} />
          </div>
        </div>
      ) : (
      <div className="w-full max-w-xs text-center mx-auto font-bold">
        <div className="my-4">SIGN-IN</div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input onChange={onChangeUsername} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input onChange={onChangePassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button onClick={onSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <button onClick={onSignUp} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  )
}

export default index
