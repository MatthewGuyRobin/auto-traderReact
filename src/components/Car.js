import React from 'react';
import Price from './Price'

const Car = (props) => {
    return (
      <div className="name">
        <p>{props.content}</p>
        <Price xprice={props.price} />
      </div>
    )
  }

  export default Car;