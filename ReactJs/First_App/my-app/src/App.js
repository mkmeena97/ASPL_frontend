import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/Hello';
import UserCard from './components/UserCard';
import Count from './components/Count';

function App() {

  const users = [
    { name: "Tez Singh", email: "tez@coding.com" },
    { name: "Tabbu sharma", email: "sharma@example.com" }
  ];


  return (
    <div className="App">
      <HelloWorld></HelloWorld>
            
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} email={user.email} />
      ))}

      <p>Counter</p>
      <Count></Count>

    </div>
  );
}

export default App;
