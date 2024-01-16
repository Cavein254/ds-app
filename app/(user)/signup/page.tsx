'use client';

import { GetData } from '@/utils/fetcher';
import React from 'react';

const Register = () => {
  const [user, setUser] = React.useState({
    username: '',
    email: '',
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const onFormSubmit = () => {
    const data = GetData('/api/user', user, 'POST');
    console.log(data);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={user.username}
        onChange={(e) => onChangeHandler(e)}
      />
      <input
        type="text"
        placeholder="email"
        value={user.email}
        onChange={(e) => onChangeHandler(e)}
      />
      <button type="submit">register</button>
    </div>
  );
};

export default Register;
