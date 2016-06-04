import React from 'react';

const Login = function () {
  return (<div className="login">
    <h1>FOOTBALL FORECASTS</h1>
    <h3>Please enter your first name or login</h3>
    <input
      type="text"
      name={'loginForm'}
    />
  </div>);
};

export default Login;
