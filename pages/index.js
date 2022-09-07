import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { reactLocalStorage } from 'reactjs-localstorage'
import users from '../src/mock/users'
import userStore from '../src/stores/user'
import Button from '../src/components/Button'

const index = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useRecoilState(userStore.user)

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

  const onSignOut = () => {
    setUser({})
    reactLocalStorage.setObject('user', {})
  }

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
          <div className="flex items-center justify-center">
            <button onClick={onSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  )
}

export default index
