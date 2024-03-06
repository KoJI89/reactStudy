import React, { useContext } from 'react'
import UserContext from './context/UserContext';

function Content({ isDark }) {
    // const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    console.log('content에서 user의 데이터 :: ' , user);
  return (
    <div 
        className='content' 
        style={{
            backgroundColor : isDark? 'black': 'white',
            color : isDark? 'white': 'black',
        }}
        >
        <p>{user}님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content