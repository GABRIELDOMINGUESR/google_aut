import { useState } from "react";
import { GoogleLogo } from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../services/firebase";

import "./style.scss";

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);         
      });
  }
  return (
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuario" />}
          <strong>{user.displayName}</strong>
          <span>{user.email}</span>
      </div>

      <h1>Acesse sua conta</h1>
      <span>
        Ultilizando authenticação social, por exemplo, authenticação com a
        Google voçê <br />
        facilita a vida do usuario permitindo ultilizar sua aplicação sem fazer
        cadastro.
      </span>

      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <GoogleLogo />
        Entrar com o Google
      </button>
    </div>
  );
}
