import { onNavigate } from '../router/utils';
import { signIn as signInFirebase } from '../lib-firebase';

export const logIn = () => {
  const desktopContainer = document.createElement('div');
  desktopContainer.className = 'desktop-container';

  const desktopImg = document.createElement('img');
  desktopImg.className = 'desktop-img';
  desktopImg.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/dj.png';

  const divLogin = document.createElement('div');
  divLogin.className = 'login-container';
  const inputEmail = document.createElement('input');

  // LOGO
  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/logo%20mapa%20de%20bits.png';

  // Login form
  const loginForm = document.createElement('div');
  loginForm.className = 'login-form';

  // TITULO
  const title = document.createElement('h2');
  title.textContent = 'Sign In';
  title.className = 'sign-in-title';

  // error content
  const errorContent = document.createElement('p');
  errorContent.id = 'errorContent';
  errorContent.className = 'error-content';

  // Email
  const email = document.createElement('h4');
  email.className = 'email-address';
  email.textContent = 'Correo electrónico';
  inputEmail.id = 'emailInput';
  inputEmail.type = 'mail';
  inputEmail.required = true;
  inputEmail.className = 'input-email';

  // Password
  const password = document.createElement('h4');
  password.className = 'password';
  password.textContent = 'Constraseña';
  password.required = true;
  const inputPass = document.createElement('input');
  inputPass.id = 'passwordInput';
  inputPass.type = 'password';
  inputPass.required = 'true';
  inputPass.className = 'input-password';
  inputPass.minLength = 6;

  // Boton login
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'sign-in-button';
  // Flechita
  const arrow = document.createElement('img');
  arrow.className = 'arrow';
  arrow.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/flechita.png';

  // Registro

  const bottomTextContainer = document.createElement('div');
  bottomTextContainer.className = 'bottom-text-container';

  const bottomText = document.createElement('p');
  bottomText.className = 'bottom-text';
  bottomText.textContent = '¿No tienes una cuenta?';

  const logInText = document.createElement('p');
  logInText.textContent = 'Regístrate acá';
  logInText.className = 'log-in-text';
  logInText.id = 'logInText';

  // Event Listener y conexión a Firebase
  buttonLogin.addEventListener('click', () => {
    const userEmail = document.getElementById('emailInput').value;
    const userPassword = document.getElementById('passwordInput').value;
    signInFirebase(userEmail, userPassword) // data para probar si está leyendo los datos
      .then((userCredential) => {
        // de acá para abajo es código copiado de la pag de firebase
        // Signed in
        const user = userCredential.user;
        console.log(user);
        onNavigate('/home');
      })
      .catch((error) => {
        errorContent.style.display = 'block';
        errorContent.innerHTML = 'Hubo un error';
        console.log(error.code, error.message);
      });
  });

  logInText.addEventListener('click', () => {
    onNavigate('/');
  });

  desktopContainer.append(desktopImg, divLogin);
  divLogin.append(logo, loginForm, buttonLogin, bottomTextContainer);
  loginForm.append(
    title,
    errorContent,
    email,
    inputEmail,
    password,
    inputPass,
  );
  buttonLogin.appendChild(arrow);

  bottomTextContainer.append(bottomText, logInText);

  return desktopContainer;
};
