import React from 'react'
import { useRecoilState } from 'recoil'
import userStore from '../src/stores/user'
import Button from '../src/components/Button'

const about = () => {
  const [user, setUser] = useRecoilState(userStore.user)

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-4">{user.username}</div>
      <img width={300} height={300} src="/images/bg.jpeg" />
      <div className="my-2">
        <Button
          text="hello"
          color="green"
          onClick={() => alert('hello')}
        />
      </div>
      <div className="my-2">
        <Button
          text="YES"
          color="blue"
          onClick={() => alert('yes')}
        />
      </div>
      <div className="my-2">
        <Button
          text="No"
          color="red"
          onClick={() => alert('no')}
        />
      </div>
    </div>
  )
}

export default about
