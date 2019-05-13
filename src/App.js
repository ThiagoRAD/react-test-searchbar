import './App.css';
import {useEffect, useState} from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {users
          .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
          .map((user) => (
            <li key={`user-${user.id}`}>{user.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default App;
