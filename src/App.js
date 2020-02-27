import React from 'react';
import './App.css';
import Card from './components/Card';

// const Pet = (props) => {
//   return (
//     <div>
//       <p>My pet is {props.petName}</p>
//     </div>
//   )
// }

// const View = (props) => {
//   return (
//     <div>
//       <img>{props.img}</img>
//     </div>
//   )
// }

// const Image = (props) => {
//   return(
//     <img src={props.src} alt={props.alt} />
//   )
// }

// const Price = (props) => {
//   return (
//     <div>
//       <p>{props.xprice}</p>
//     </div>
//   )
// }

// const Information = (props) => {
//   return (
//     <div>
//       <p>{props.info}</p>
//     </div>
//   )
// }

// const Car = (props) => {
//   return (
//     <div>
//       <p>{props.content}</p>
//       <Price xprice={props.price} />
//     </div>
//   )
// }

// const Card = (props) =>{
//   return(
//     <div>
//       <Image src={props.src} alt={props.alt} />
//       <Car content={props.content} price={props.price} />
//       <Information info={props.info}/>
//     </div>
//   )
// }

class App extends React.Component {

  state = {
    Cards : [ 
      {content:"Fiat 500 1.0 MHEV Lounge (s/s)3dr", price:"£11,790", src:require("./img/fiat500.jpeg"), alt:"fiat", info:"3 door Manual Petrol Hatchback", avail:"BRAND NEW - IN STOCK"},
      {content:"Kia Ceed 1.0 T-GDi ECO 2 (s/s) 5dr", price:"£17,342", src:require("./img/kia.jpeg"), alt:"kia", info:"5 door Manual Petrol Hatchback", avail:"BRAND NEW - IN STOCK"},
      {content:"Audi Q8 3.0 TDI V6 50 Vorsprung Tiptronic quattro (s/s)5dr", price:"£76,588", src:require("./img/audi.jpeg"), alt:"audi", info:"5 door Automatic Diesel SUV", avail:"BRAND NEW - IN STOCK"},
      {content:"Suzuki Ignis 1.2 Dualjet SHVS SZ5 ALLGRIP (s/s) 5dr", price:"£15,214", src:require("./img/suzuki.jpeg"), alt:"suzuki", info:"5 door Manual Hybrid-Petrol/Electric Hatchback", avail:"BRAND NEW - IN STOCK"}
    ]
  }
  render() {
    const eachCar = this.state.Cards.map((Cards, index)=>{
      return <Card content={Cards.content} price={Cards.price} src={Cards.src} alt={Cards.alt} info={Cards.info} avail={Cards.avail} key={index} />
    })

    return (
      <div className="App">
        <h1>Latest brand new car deals</h1>

        <div className="moreBtn">
          <button>View more deals -></button>
        </div>

        <br></br>
        <div className="container">
          {/* <div className="box"> 
          {/* <Card content="Fiat 500 1.0 MHEV Lounge (s/s)3dr" price="£11,790" src={fiat} alt="fiat" info="3 door Manual Petrol Hatchback" avail="BRAND NEW - IN STOCK"/> */}
          {/* </div> */} 
          {eachCar}

          {/* <div>
            <img src={fiat} alt="fiat" />
            <Car content="Fiat 500 1.0 MHEV Lounge (s/s)3dr" price="£11,790" />
          </div> */}
          {/* <div className="box"> */}
          {/* <Card content="Kia Ceed 1.0 T-GDi ECO 2 (s/s) 5dr" price="£17,342" src={kia} alt="kia" info="5 door Manual Petrol Hatchback" avail="BRAND NEW - IN STOCK"/> */}
          {/* </div> */}

          {/* <div>
            <img src={kia} alt="kia" />
            <Car content="Kia Ceed 1.0 T-GDi ECO 2 (s/s) 5dr" price="£17,342" />
          </div> */}
          {/* <div className="box"> */}
          {/* <Card content ="Audi Q8 3.0 TDI V6 50 Vorsprung Tiptronic quattro (s/s)5dr" price="£76,588" src={audi} alt="audi" info="5 door Automatic Diesel SUV" avail="BRAND NEW - IN STOCK"/> */}
          {/* </div> */}

          {/* <div>
            <img src={audi} alt="audi" />
            <Car content="Audi Q8 3.0 TDI V6 50 Vorsprung Tiptronic quattro (s/s)5dr" price="£76,588" />
          </div> */}
          {/* <div className ="box"> */}
          {/* <Card content="Suzuki Ignis 1.2 Dualjet SHVS SZ5 ALLGRIP (s/s) 5dr" price="£15,214" src={suzuki} alt="suzuki" info="5 door Manual Hybrid-Petrol/Electric Hatchback" avail="BRAND NEW - IN STOCK"/> */}
          {/* </div> */}

          {/* <div>
            <img src={suzuki} alt="suzuki" />
            <Car content="Suzuki Ignis 1.2 Dualjet SHVS SZ5 ALLGRIP (s/s) 5dr" price="£15,214" />
          </div> */}
        </div>
    </div>
      
    )
  }
}

export default App;
