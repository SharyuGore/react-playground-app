import React from 'react'

function FunctionClick() {

    const number = [1,2,3,4];
    const newNumbers = number.map(function(number){
        return <li>{number}</li>
    })
  return (
    <div>
        <ul>{newNumbers}</ul>
    </div>
  )
}

export default FunctionClick