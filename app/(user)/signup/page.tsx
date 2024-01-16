'use client';

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
  const onFormSubmit = () => {
    const data = async () => {
      const user = await fetch(`${process.env.NEXT_APP_URL}/api/user`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((resData) => resData.json())
        .then((data) => data)
        .catch((err) => console.log(err));
      return user;
    };
    console.log(data);
  };
  return (
    <form onSubmit={onFormSubmit}>
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
      <button type="submit">register</button>
    </form>
  );
};

export default Register;
