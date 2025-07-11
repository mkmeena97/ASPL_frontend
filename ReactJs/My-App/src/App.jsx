import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card, CardContent, Typography, Button } from '@mui/material';
import './App.css'
import UserCard from './component/Multi_prop'
import FuncProp from './component/Function_prop'
import TodoItem from './component/Prop_List'
import GreetingCard from './component/GeetingCard'
import CardWrapper from './component/Prop_as_children'
import FormComponent from './component/FormComponent';
import UserList from './component/UserData';


function App() {
  function handleClick() {
    alert("Button was clicked!");
  }

  const tasks = ["Eat", "Code", "Sleep"];

  return (
    <>
      <div className="card-row">
        <UserCard name="Tez" age={27}></UserCard>

        <FuncProp onClick={handleClick} label="Click Me" />
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <CardWrapper title="Tez Card">
            <Typography variant="body1">This content is passed via props.children</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Click Me</Button>
          </CardWrapper>

          <CardWrapper title="Another Card">
            <ul>
              <li>Eat</li>
              <li>Code</li>
              <li>Sleep</li>
            </ul>
          </CardWrapper>
        </div>

        <GreetingCard 
          name={23} 
          message="Hope you're enjoying React props!" 
          buttonText="Thanks "
        />
      </div>
      <div>
        <FormComponent />
        <UserList />
      </div>
    </>
  )
}

export default App
