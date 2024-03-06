import React, { useState } from 'react'
import Page from './Page.js'
import ThemeContext from './context/ThemeContext.js';
import UserContext from './context/UserContext.js';

// 리액트의 일반적인 컴포넌트구조에서 prop를 전달할 때 인자로 전달해준다
// 규모가 큰 프로젝트의 경우, 전역적으로 사용되는 prop를 Context를 사용하면 props를 전달하지 않더라도
// 하위컴포넌트에서 해당 값에 접근할 수 있다 ex) 사용자 정보, 언어, 등 전역적인 정보를 전달하기 좋음

// Constext를 사용하면 컴포넌트를 재사용하기에 어려워질 수 있음
// 무조건적인 사용보다 컴포넌트 합병을 통해 관련 이점을 상쇄할 수 있다. 
function UseContext() {
  // state를 개별 props로 전달해주는 과정
  const [isDark, setIsDark] = useState(false);
  
  
  return (
    <>
        <h1>UseContext</h1>
        <hr/>
        <Page isDark={isDark} setIsDark={setIsDark}/>

        <hr/>
        {/* useContext를 사용할시 .Provider value={ 전달할 요소 }를 반드시 지정해줘야한다 */}
        <UserContext.Provider value={'사용자'}>
          <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page/>
          </ThemeContext.Provider>
        </UserContext.Provider>
    </>
  )
}

export default UseContext