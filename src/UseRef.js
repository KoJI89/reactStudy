import React, { useEffect, useRef, useState } from 'react'


// Ref는 해당 값이 변하더라도 렌더링이 발생하지 않는다. => 잦은 렌더링은 성능저하를 일으킨다
// Ref를 통해 DOM요소에 접근할 때 유용하게 사용할 수 있다.

// 변화는 감지해야하지만, 해당 변화가 렌더링을 발생시키지 않는경우에 사용하면 유용하다.


function UseRef() {
    const [ count, setCount ] = useState(0);
    // useRef의 선언
    const countRef = useRef(0);
    // Ref는 객채형태로 저장되며 해당 값을 호출하고자 할때는 변수명.current로 접근할 수 있다
    console.log("countRef의 형태 확인" , countRef);

    const increaseCountState = () => {
        setCount(count + 1);
        console.log('렌더링실시됨');
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current +1
        // Ref값이 변하더라도 화면렌더링이 발생하지 않기때문게 값이 즉각적으로 보이진 않는다
        console.log('Ref값이 변함, countRef의 값: ', countRef.current);
    }


    // -------------------------------------------------------------------------------
    const numberRef = useRef(0);
    // 변수는 화면이 렌더링이 되면 값이 초기화 되므로 누적산된 값이라도 렌더링시 값이 초기화된다
    let numberVar = 0;
    const [renderer, setRenderer] = useState(0);

    const increaseRef = () => {
        numberRef.current = numberRef.current + 1;
        console.log( "numberRef.current값 :", numberRef.current );
    }
    const increaseVar = () => {
        numberVar = numberVar + 1;
        console.log( "numberVar의 값 " + numberVar );
    }
    const doRendering = () => {
        setRenderer(renderer+1); // State의 값의 변화가 있을 때 렌더링이 진행되므로 임의로 값을 변경한다
        console.log("렌더링됨");
    }
    const printResult = () => {
        console.log(`ref : ${numberRef.current}, var: ${numberVar}`);
    }

    // -------------------------------------------------------------------------------
    // State의 경우, 
    const [renderCount, setRenderCount] = useState(0);
    
    const totalRenderCount = useRef(0);
    // useEffect는 매개로 받은 콜백함수를 렌더링 할때마다 실시한다 (= 렌더링마다 실행한다.)
    useEffect(()=> {
        totalRenderCount.current = totalRenderCount.current + 1
        console.log("렌더링된 횟수 : ", totalRenderCount.current);
    })
    // -------------------------------------------------------------------------------
    const inputRef = useRef();

    useEffect(()=>{
        // console.log("inputRef", inputRef);
        // 화면이 렌더링될때 로그인창에 커서가 활성화(focus)가 되도록 한다
        inputRef.current.focus();
    },[])

    const login = () =>{
        alert(`환영합니다 ${inputRef.current.value}!`);
        inputRef.current.focus();
    }

  return (
    <>
        <h1>UseRef</h1>
        <hr/>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <button onClick={increaseCountState}>State값 갱신</button>
            <button onClick={increaseCountRef}>Ref값 갱신</button>

        <hr/>
            <p>Ref : {numberRef.current}</p>
            <p>Var : {numberVar}</p>
            <br/>
            <button onClick={doRendering}>렌더링</button>
            <button onClick={increaseRef}>Ref올려</button>
            <button onClick={increaseVar}>var올려</button>
            <button onClick={printResult}>Ref와 Var값 로그로 확인</button>
    
        <hr/>
            <p>Ref로 확인하는 렌더링수 : {totalRenderCount.current}</p>
            <button onClick={ ()=>{ setCount(count+1)}}> 렌더링 실시 </button>
        <hr/>
            {/* Ref를 이용한 DOM요소 접근 */}
            <div>
                <input type='text' ref={inputRef} placeholder='username' />
                <button onClick={login} >로그인</button>
            </div>

    </>
  )
}

export default UseRef