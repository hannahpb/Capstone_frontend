import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const history = useNavigate();
  function logout()
  {
    localStorage.clear();
    history("/login")
  }

  let user = JSON.parse(localStorage.getItem('user-info'))
  return (
    <div>
      <h5>{user.name}</h5>
      <h6>{user.email}</h6>
      <button onClick={logout} >Log Out</button>
    </div>
  );
};

export default Home;
