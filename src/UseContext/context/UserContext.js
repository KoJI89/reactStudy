import React, { createContext } from 'react'

function userContext() {
    
  return (
    <div>userContext</div>
  )
}

// Context를 사용할 경우 반드시 이와같이 createContext를 생성해야함
export default userContext = createContext(null);