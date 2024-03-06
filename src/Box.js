import React, { useEffect, useState } from 'react'
// useCallback2 에서 사용하는 컴포넌트
function Box({createBoxStyle}) {
    const [style, setStyle] = useState({});

    useEffect(()=>{
        console.log('박스사이즈 변경됨');
        setStyle(createBoxStyle())
    },[createBoxStyle])
  return (
    <div style={style}></div>
  )
}

export default Box