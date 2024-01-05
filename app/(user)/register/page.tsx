'use client';

import React from 'react';

const Register = () => {
  const [user, setUser] = React.useState({
    username: '',
    email: '',
  });
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser((user.email = e.target.value))}
      />
      <input type="text" placeholder="username" />
      <button type="submit">register</button>
      <div>
        <pre>{user.email}</pre>
      </div>
    </div>
  );
};

export default Register;
