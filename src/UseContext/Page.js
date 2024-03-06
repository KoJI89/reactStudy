import React, { useContext } from 'react'
import Headers from './Headers';
import Content from './Content';
import Footer from './Footer';
import ThemeContext from './context/ThemeContext';
import UserContext from './context/UserContext'

// 부모컴포넌트에서 { isDark, setIsDark }의 props를 받아오지만 활용되지 않음 (중간컴포넌트)
function Page( { isDark, setIsDark }) {
    // Context를 사용하기 위해서는 별도의 변수를 생성해준다 
    const data = useContext(ThemeContext);

    console.log( 'data: ',  data );
    return (
    <div className='page'>
        props를 전달하는 경우
        <Headers isDark={isDark}/>
        <Content isDark = {isDark}/>
        <Footer isDark={isDark} setIsDark={setIsDark}/>
    </div>

    //useContext를 사용할 경우 props를 전달해줄 필요가 없다 

    // <div className='page'>
    //     <Headers />
    //     <Content />
    //     <Footer />
    // </div>
  );
};

export default Page