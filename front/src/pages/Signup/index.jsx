import React, { useState } from "react";
import axios from "axios";
import LogInForm from "../Login";

const SignUpForm = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );


    passwordConfirmError.innerHTML = "";


    if (password !== controlPassword ) {
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
    } else {
      await axios({
        method: "post",
        url: `http://localhost:3500/api/auth/signup`,
        data: {
          username,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
 
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="username">username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setusername(e.target.value)}
            value={username}
          />
          <div className="username error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <br />
          <label htmlFor="password-conf">Confirmer mot de passe</label>
          <br/>
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>

          <input type="submit" value="Valider inscription" />
        </form>
   
  );
};

export default SignUpForm;