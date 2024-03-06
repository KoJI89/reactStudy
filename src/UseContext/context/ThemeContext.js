import React, { createContext } from 'react'

function ThemeContext() {
  return (
    <div>ThemeContext</div>
  )
}

// 상위 컴포넌트에서 Provider로 감싸주지 않는경우 인자가 초기값으로 넘겨진다 
export default ThemeContext = createContext('hello');