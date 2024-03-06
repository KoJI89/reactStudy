import React, { useMemo, useState } from 'react'

// UseMemo에서 memo는 메모리를 의미한다 

// 함수형 컴포넌트는 함수형이고, 렌더링이 될때 함수가 호출된다 -> 모든 내부변수가 초기화 된다.
// UseMemo는 처음에 계산된 결과를 다시 실행하는것이 아니라 메모리에서 가져온다

// UseMemosms 는 2개의 인자를 받는다 콜백함수와 배열(의존성 배열)을 받는다
// UseMemo를 사용한다는것은 메모리를 사용한다는 의미이므로 필요할 때만 사용하는것이 좋다
const hardCalculate = ( number ) =>{
    console.log('어려운계산실시!');
    for (let i = 0; i < 999999999; i++) {} // 생각하는 시간을 두기위한 의미없는 forloop
    return number + 10000;        
}
// 함수형 컴포넌트이기에 빠른실행이되는 함수라도 렌더링시에는 모든 함수가 실행되서 오랜시간이 소요된다 **비효율적인 코드가된다
const easyCalculate = ( number ) => {
    console.log('쉬운계산!');
    return number + 1;  
}

function UseMemo() {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // const hardSum = hardCalculate(hardNumber);
    
    //hardNumber가 변경될때만 useMemo안의 함수가 호출되도록 하는 useMemo
    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber)
    },[hardNumber])
    const easySum = easyCalculate(easyNumber);
  return (
    <>
        <h1>UseMemo</h1>
        <hr/>
        <div>
            <h3>어려운 계산기</h3>
            <input
                type='number'
                value={hardNumber}
                onChange={(e)=> {setHardNumber(parseInt(e.target.value))} }
            />
            <span> + 10000 = {hardSum}</span>

            <h3>쉬운 계산기</h3>
            <input
                type='number'
                value={easyNumber}
                onChange={(e)=> {setEasyNumber(parseInt(e.target.value))} }
            />
            <span> + 1 = {easySum}</span>
        </div>
    
    </>
  )
}

export default UseMemo