import React from "react";

function LoginPage() {
  return (
    <form action="/sessions" method="POST">
      <div>
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
      </div>
      <input type="submit" value="login" />
    </form>
  );
}

export default LoginPage;
