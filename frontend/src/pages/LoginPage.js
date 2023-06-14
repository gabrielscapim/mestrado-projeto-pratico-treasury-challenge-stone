import { useState } from "react";
import styles from './LoginPage.module.css';

function LoginPage() {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const buttonStyles = {
    backgroundColor: '#006400',
    border: '1px solid #006400',
    height: '38px',
    marginBottom: '12px',
    marginTop: '8px',
    width: '100%',
    fontSize: '14px',
  };
  const inputStyle = {
    marginBottom: '8px',
  }
  const labelStyle = {
    marginBottom: '8px',
  }
  const inputContainerStyle = {
    marginBottom: '16px',
  }

  return (
    <section className={ styles['page-container'] }>
      <form className={ styles['form-container'] }>
        <div className="form-group" style={ inputContainerStyle }>
          <label 
            htmlFor="user-input"
            style={ labelStyle }
          >
            Nome de usuário
          </label>
          <input
            className="form-control"
            id="user-input"
            type="text"
            style={ inputStyle }
            name="userInput"
            value={ userInput }
            onChange={ ({ target: { value } }) => setUserInput(value) }
            placeholder="Digite seu nome de usuário"
          />
        </div>
        <div className="form-group" style={ inputContainerStyle }>
          <label 
            htmlFor="password-input"
            style={ labelStyle }
          >
            Senha
          </label>
          <input
            className="form-control"
            id="password-input"
            type="password"
            style={ inputStyle }
            name="passwordInput"
            value={ passwordInput }
            onChange={ ({ target: { value } }) => setPasswordInput(value) }
            placeholder="Digite sua senha"
          />
        </div>
        <button
          className="btn btn-primary"
          id="login-button"
          type="button"
          style={ buttonStyles }
        >
          Entrar
        </button>
      </form>
    </section>
  )
}

export default LoginPage;
