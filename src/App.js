import React, { Suspense } from 'react';
import { fetchData } from './Api';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

const ProfileDetails = () => {
  const user = resource.user.read()
  return (
    <div className='card card-body my-3'>
      <h1 className='large text-primary'>{user.name}</h1>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.address.city}</li>
      </ul>
    </div>
  )
}

export default App;
