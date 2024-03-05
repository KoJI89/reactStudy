import {React, useState} from 'react'


const havyWork = () => {
    console.log("엄청무거운 작업");
    return ['홍길동','김민수']
}

function useStateStudy() {
// 초기값 1을 가진 time이라는 변수명을 가지고, setTime로 값을 수정할 수 있다. 
  const [time, setTime] = useState(1);
  //state값이 갱신될때 마다 렌더링된다
  const handleClick = () => {
    //   setTime(time + 1);
    let newTime;
    if(time >= 12){
        newTime = 1;
    }else{
        newTime = time + 1;
    }
    setTime(newTime);
  };
  
//   console.log( '렌더링 됨' );
// --------------------------------------------

//   const [names, setName] = useState(["홍길동", "김민수"]);
  // 무거운 함수가 있을경우 콜백함수를 활용하면 화면 첫 렌더링에서만 활용되므로 유용하다
  const [names, setName] = useState(()=> {
    return havyWork();
  });
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  }

  // 새로 변경할 state의 값이 이전 stete의 값과 연관이 되어있을때 setState에 인자로 콜백함수를 넣어 이전값을 넣는것이 좋다 
  const handleUpload = () => {
    setName( (prevState)=> {
        return ([input, ...prevState])
    } )
  }

  return (
    <>
      <h1>UseState</h1>
      <div>State를 이용하여 현재시간을 표시하는 컴포넌트</div>
      <span>현재 시각 : {time}시</span>
      <button onClick={handleClick}>update</button>
      <hr/>
      
      
      <div>
        <input type='text' value={input} onChange={handleInputChange}/>
        <button onClick={handleUpload} >Upload</button>
      </div>
      { names.map( (name, idx)=>{
        return <p key={idx}> {name} </p>
      } )  }
    </>
  )
}

export default useStateStudy
