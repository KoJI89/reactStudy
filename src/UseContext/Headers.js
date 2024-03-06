import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext'
import UserContext from './context/UserContext'

// useContext사용시 props를 별도 선언해줄 필요없다
function Headers( {isDark}) {
    // const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    console.log('user ::' , user);
  return (
    <header
        className='header'
        style={{
            backgroundColor : isDark? 'black' : 'lightgray',
            color : isDark? 'white' : "black",
        }}
    >
        <h1>Welcome 홍길동!</h1>
    </header>
  )
}

export default Headers