import React from 'react'

function Reduce() {
    
    const numbers = [1, 2, 3, 4];
  
    // forEach로 합산
    let total = 0;
    numbers.forEach(number => {
        total += number;
    })

    // reduce로 합산
    // reduce는 배열함수이다. currentValue는 배열의 현재의 값을, accumulator은 누적된 값을 나타낸다.

    // reduce의 두번째 인자는 accumulator의 초기값을 나타낸다.
    const redceTotal = numbers.reduce(( accumulator, currentValue )=>{
       return accumulator + currentValue;
    },0)

    // -----------------------------------------------------------------

    // 배열 중 가장 작은 값을 가져오기
    const minNumbers = [10, 4, 2, 8];

    // reduce의 두번째 인자를 공란으로 둘 경우 1번째 요소를 자동선택한다.
    const smallest = minNumbers.reduce((accumulator, currentValue)=>{
        if( accumulator > currentValue ) return currentValue;
        return accumulator; 
    })

    // ------------------------------------------------------------------

    // 객체로 이루어진 배열에서의 reduce의 활용
    const cart = [
        {
            name: '사과',
            price: 500, 
        },
        {
            name: '바나나',
            price: 700, 
        },
        {
            name: '레몬',
            price: 300, 
        },
    ]

    // cart에 담은 모든 물건의 가격의 합산
    const fruitPrice = cart.reduce(( totalPrice, product )=>{
        return totalPrice + product.price
    },0)

    return (
    <>
        <div>Reduce</div>
        <div>forEach를 이용한 배열 합 : { total }</div>
        <div>reduce의 이용한 배열 합 : { redceTotal }</div>
        <div>reduce의 이용한 가장 작은 수 : { smallest }</div>
        <div>reduce의 이용해 객체에 접근한 합산 : { fruitPrice }</div>

    </>
  )
}

export default Reduce