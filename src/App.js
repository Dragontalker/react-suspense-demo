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
    </div>
  )
}

export default App;
