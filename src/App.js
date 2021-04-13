import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  // const mobiles=[
  //   {name:"Nokia", price:200, website:"www.nokia.com"},
  //   {name:"Symphony", price:100, website:"www.symphony.com"},
  //   {name:"apple", price:600, website:"www.apple.com"},
  //   {name: "Asus", price:450,website:"www.asus.com"},
  //   {name: "Apple", price:500,website:"www.apple.com"},
  //   {name:"Mackbook", price: 585, website:"www.mackbook.com"},
  //   {name:"Lenevo", price:677,website:"www.lenevo.com"}
  // ]
  // const student = [
  //   {name : "Mohammad Rejaul karim", age:21, fatherName : "Mahabub Alam", motheName : "Jesmin Begum"},
  //   {name : "Mahabub Alam", age: 49, fatherName : "Mojibal Haque"},
  //   {name : "Jesmin BEgum", age: 41, fatherName : "Abdul Malek"},
  //   {name :"Mosammad Tanzila", fatheName:"Mahabub alam"}
  // ]

  const laptops = [
    {name: "Asus", price:450},
    {name: "Apple", price:500},
    {name:"Mackbook", price: 585},
    {name:"Lenevo", price:677}
  ]
  const [person, setPerson] = useState([])
  useEffect(()=>{
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setPerson(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {
          person.map(ps=><Person name={ps.name}  email={ps.email} key={ps.id} address={ps.address.zipcode}></Person>)
        }
      {
        laptops.map(laptop=><Laptops price={laptop.price} key={laptop.price}></Laptops>)
      }

        {/* {
          mobiles.map(mobile=> <Mobile name={mobile.name} price={mobile.price} website={mobile.website}></Mobile>)
        }
        {
          laptops.map(laptop => <li>{laptop.name}</li>)
        }
        <Counter></Counter>
        <Decrease></Decrease>
        <TicetCounter></TicetCounter>
        {
          student.map(stdnt=><Student name={stdnt.name} age={stdnt.age}></Student>)
        } */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//fake data from json placeholder
function Person(props){
  const personStyle={
    width : "500px",
    border : "1px solid white",
    margin: "8px 10px",
    padding : "10px",
    borderRadius : "8px",
    color : "red"
  }
  return(
    <div style={personStyle}>
      <h3>Name : {props.name}</h3>
      <p>Email : {props.email}</p>
      <p>zipcode : {props.address}</p>
    </div>
  )
}
function Laptops(props){
  return(
    <div>
      <h3>Laptop Name : {props.name} </h3>
      <p>Laptop Price : {props.price}</p>
    </div>
  )
}
// function Mobile(props){
//   return(
//     <div>
//     <h1>Name:{props.name}</h1>
//     <p>Price:{props.price}</p>
//     <p>website:{props.website}</p>
//   </div>
//   )

// }
// function Student(props){
//   const studentStyle = {
//     border : "2px solid red",
//     margin : "20px 10px",
//     padding : "10px",
//     borderRadius : "5px"
//   }
//    console.log(props)
//   return (
//     <div style = {studentStyle}>
//       <h2>Name : {props.name} </h2>
//       <h2>I am {props.age || 17} years old</h2>
//     </div>
//   )
// }
// function Counter(){
//   const [count, setCount] = useState(0);
//   const handleClick = () => setCount(count + 1);
//     return(
//     <div>
//       <p>My age : {count}</p>
//       <button onClick={handleClick}>AGE COUNT</button>
//     </div>
//   )
// }

// //decrease button
// function Decrease(){
//   const buttonStyle = {
//     marginTop : "30px",
//     padding : "12px 15px",
//     color : "#ecf0f1",
//     background : "#e74c3c",
//     fontSize : "20px",
//     boxShadow : "0",
//     borderRadius : "15px",
//     border : "1px solid #1e90ff"

//   }
//   const [count, setCount] = useState(100)
//   const productHandle = () => setCount(count - 1)
//   return(
//     <div>
//       <button onClick={productHandle} style={buttonStyle}>Decrease</button>
//       <h4>NUMBERS OF PRODUCT {count}</h4>
//       <YourProduct productNum={count}></YourProduct>
//     </div>
//   )
// }

// function YourProduct(props){
//   return <h2>Your Product : {props.productNum}</h2>
// }


// function TicetCounter(){
//   const ticketStyle ={
//     padding : "12px 15px",
//     color : "#1B1464",
//     background : "#9980FA",
//     fontSize : "20px",
//     boxShadow : "0",
//     borderRadius : "15px",
//     border : "1px solid #1e90ff"
//   }
//   const [count, setCount] = useState(0);
//   const ticket = () =>{
//     const newCount = count + 1;
//     setCount(newCount)
//   }
//   return(
//     <div>
//       <h2>TICKET : {count}</h2>
//       <button onClick={ticket} style = {ticketStyle}>Ticket buy</button>
//       <SitDisplay sit={count}></SitDisplay>
//       <SitDisplay sit={count+1}></SitDisplay>
//       <SitDisplay sit={count+2}></SitDisplay>
//     </div>
//   )
// }

// function SitDisplay(props){
//   return <h3>Numbers of sit :{props.sit} </h3>
// }

export default App;
