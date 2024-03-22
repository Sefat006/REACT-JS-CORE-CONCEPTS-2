import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const products=[
    {name: 'laptop', price: 153000},
    {name: 'Mobile', price: 93000},
    {name: 'Watch', price: 33000},
    {name: 'Tablet', price: 5000},
  ]
  return (
    <div className="App">
      <Product name="Laptop" price="47000"></Product>
      <Product name="Mobile" price = "75000"></Product>


      <h1 style={{marginTop: '200px'}}>Dynamic props</h1>
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }


      <h1 style={{marginTop: '200px'}}>Counter</h1>
      <Counter></Counter>


      <h1 style={{marginTop: '200px'}}>External Users</h1>
      <ExternalUsers></ExternalUsers>
      
    </div>
  );
}

function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(33);
  // here count = 33;
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // const increaseCount = ()=>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  //

  return (
    <div className='counter'>
      <h1>Count:{count} </h1>
      <button onClick={increaseCount} className='btn'>Increase</button>
      <br />
      <button onClick={decreaseCount} className="btn-1">Decrease</button>
    </div>
  )
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
export default App;
