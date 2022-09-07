import React from 'react'
import Button from '../src/components/Button'

const about = () => {
  return (
    <div>
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
