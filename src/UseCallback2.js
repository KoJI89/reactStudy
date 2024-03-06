import React, { useCallback, useState } from 'react'
import Box from './Box';

function UseCallback2() {
    const [ size, setSize ] = useState(100);
    const [ isDark, setIsDark] = useState(false);
    // 일반적인 함수 선언은 화면 렌더링 때마다 지속 호출 실행하여 초기화한다
    // const createBoxStyle = () => {
    //     return {
    //         backgroundColor : 'pink',
    //         width:`${size}px`,
    //         height:`${size}px`,
    //     };
    // };

    // useCallback을 이용하여 불필요한 함수의 재사용을 방지
    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor : 'pink',
            width:`${size}px`,
            height:`${size}px`,
        };
    },[size])
  return (
    <>
        <h1>useCallback심화</h1>
        <br/>
        <div>
            <div style={{
                backgroundColor: isDark? "black" : "white",
            }}>

                <input
                    type='number'
                    value={size}
                    onChange={ (e)=>{ setSize(e.target.value) }}
                    />
            {/* useCallback을 사용하지 않으면 버튼을 클릭할때마다 화면이 재랜더링되며 상관없는 함수 createBoxStyle가 계속 호출된다  */}
            <button onClick={()=> setIsDark(!isDark) } >Change Theme</button>
            <Box createBoxStyle={createBoxStyle}/>
            </div>
        </div>
    </>
  )
}

export default UseCallback2