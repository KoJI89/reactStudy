import React, { useEffect, useMemo, useState } from 'react'

// js의 2가지 타입

// 1. 원시타입 : String, Number, Boolean, Null, Undefined, ..
//      변수 자체에 데이터를 보관한다
// 2. 객체 타입 : 원시타입을 제외한 모든것, Object, Array
//      객체의 경우 메모리상에 데이터가 보관하고 변수에는 주소값이 저장된다. 
function UseMemo2() {
    const [ number, setNumber ] = useState(0);
    const [ isKorea, setIsKorea ] = useState(true);

    // const location = isKorea? '한국' : '외국';
    // 객체일경우는 경우가 달라진다. 
    
    
    const location = useMemo(()=>{
        return {
            country : isKorea? '한국' : '외국'
        }
    },[isKorea]);
    
    // {
    // };

    useEffect(()=>{
        console.log('useEffect 호출');
    },[location]);

  return (
    <>
        <h1>UseMemo_심화</h1>
        <hr/>
        <div>
            <h2>하루에 몇 끼 먹어요?</h2>
            <input
                type='number'
                value={number}
                onChange={(e)=> setNumber(e.target.value)}
            />
            <hr/>
            <h2>어느 나라에 있어요?</h2>
            <p>나라: { location.country }</p>
            <button onClick={()=>setIsKorea(!isKorea)}>비행기 타자</button>

        </div>
    </>
  )
}

export default UseMemo2