import React from 'react';
import Car from './Car';
import Image from './Image';
import Information from './Information';
import Availability from './Availability';


const Card = (props) => {
    return (
        <div className="box">
            <Image src={props.src} alt={props.alt} />
            <Car content={props.content} price={props.price} />
            <Information info={props.info} />
            <Availability avail={props.avail}/>
        </div>
    )
}

export default Card;