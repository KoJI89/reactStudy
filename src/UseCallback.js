import React, { useCallback, useEffect, useState } from 'react'

// useCallback은?? - 인자로 전달한 콜백함수 자체를 메모이제이션한다
// 함수를 필요할때마다 메모리에 저장해둔 함수를 가져다와 사용한다

function UseCallback() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);
    // 함수형컴포넌트이므로 someFunction함수는 렌더링될때마다 새롭게 생성되어 주소값을 갖는다. 그렇기때문에 useEffect때마다 호출된다
    // const someFunction = () => {
    //     console.log( `someFunc : number ${number}` );
    //     return;
    // }
    
    // 두번째인자를 빈배열로 두면 첫 렌더링시에만 해당 함수가 저장되고 재호출되지 않는다
    // 
    const someFunction = useCallback(() => {
        console.log( `someFunc : number ${number}` );
        return;
    }, [number]);

    useEffect(()=>{
        console.log('someFunction이 변경되었습니다');
    },[someFunction])

  return (
    <>
    <h1>useCallback</h1>
    <hr/>
       <div>
            <input
                type='number'
                value={ number }
                onChange={(e) => { setNumber(e.target.value) } }
            />
            <br/>
            <button onClick={ someFunction }>Call someFunc</button>
            {/* 해당버튼을 클릭해도 useCallback에 저장된 함수는 재호출되지 않는다 */}
            <button onClick={ ()=>{ setToggle(!toggle)} }>{toggle.toString()}</button>
        </div> 
    </>
  )
}

export default UseCallback