import { useEffect, useState } from "react";
import styles from './LoginPage.module.css';
import { loginRequest } from "../services/apiRequest";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function LoginPage() {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginFailed, setIsLoginFailed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    loginRequest(userInput, passwordInput, setIsLoginFailed, setIsLoggedIn, setIsLoading);
  }

  useEffect(() => {
    isLoggedIn && navigate('/generate-codes');
  }, [isLoggedIn])

  const buttonStyles = {
    backgroundColor: '#23297A',
    border: '1px solid #23297A',
    height: '38px',
    marginBottom: '12px',
    marginTop: '8px',
    width: '100%',
    fontSize: '14px',
  }
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
        { !isLoading && loginFailed
          && (
            <p
              style={ {
                fontSize: '14px',
                color: '#dc3545',
                marginBottom: '8px' } }
            >
              Usuário ou senha incorretos
            </p>
          )}
        { isLoading && <Loading /> }
        <button
          className="btn btn-primary"
          id="login-button"
          type="button"
          style={ buttonStyles }
          onClick={ handleLoginClick }
        >
          Entrar
        </button>
      </form>
    </section>
  )
}

export default LoginPage;
