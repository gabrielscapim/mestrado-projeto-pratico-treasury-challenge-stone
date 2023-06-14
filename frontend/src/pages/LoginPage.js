import { useState } from "react";

function LoginPage() {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <form>
      <div className="form-group">
        <label htmlFor="user-input" >
          Nome de usuário
        </label>
        <input
          className="form-control"
          id="user-input"
          type="text"
          name="userInput"
          value={ userInput }
          onChange={ ({ target: { value } }) => setUserInput(value) }
          placeholder="Digite seu nome de usuário"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password-input" >
          Senha
        </label>
        <input
          className="form-control"
          id="password-input"
          type="password"
          name="passwordInput"
          value={ passwordInput }
          onChange={ ({ target: { value } }) => setPasswordInput(value) }
          placeholder="Digite sua senha"
        />
      </div>
    </form>
  )
}

export default LoginPage;
