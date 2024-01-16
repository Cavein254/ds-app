'use client';

import { GetData } from '@/utils/fetcher';
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setusername] = useState('');
  const [isAdult, setisAdult] = useState(false);

  const userData = {
    email,
    username,
    isAdult,
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    GetData('/api/user', userData, 'POST');
  };
  return (
    <form>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={onFormSubmit}>register</button>
    </form>
  );
};

export default Register;
