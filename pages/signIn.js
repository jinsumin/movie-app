import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function signIn() {
  return (
    <div className="login-input-section-wrap">
      <div className="login-input-wrap">
        <input placeholder="Username" type="text"></input>
      </div>
      <div className="login-input-wrap password-wrap">
        <input placeholder="Password" type="password"></input>
      </div>
      <div className="login-button-wrap">
        <button>Sign in</button>
      </div>
      <div className="login-stay-sign-in">
        <FontAwesomeIcon icon="fa-solid fa-circle-check" />
      </div>
    </div>
  );
}
