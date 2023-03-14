import { signUpFirebase, loginWithGoogle } from '../lib-firebase/index.js';
import { onNavigate } from '../router/utils';

export const signUp = (props = {}) => {
  const desktopContainer = document.createElement('div');
  desktopContainer.className = 'desktop-container';

  const desktopImg = document.createElement('img');
  desktopImg.className = 'desktop-img';
  desktopImg.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/dj.png';
  desktopImg.id = 'desktopImg';

  const divSignUp = document.createElement('div');
  divSignUp.className = 'sign-up-container';

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/logo%20mapa%20de%20bits.png';

  const signUpForm = document.createElement('div');
  signUpForm.className = 'sign-up-form';

  const title = document.createElement('h2');
  title.textContent = 'SIGN UP';
  title.className = 'sign-up-title';

  const email = document.createElement('h4');
  email.className = 'email-address';
  email.textContent = 'Correo electrónico';

  const errorContent = document.createElement('p');
  errorContent.id = 'errorContent';
  errorContent.className = 'error-content';

  const inputEmail = document.createElement('input');
  inputEmail.id = 'emailInput';
  inputEmail.type = 'mail';
  inputEmail.required = true;
  inputEmail.className = 'input-email';

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

  const buttonSignUp = document.createElement('button');
  // buttonSignUp.textContent = 'Crea una cuenta';
  buttonSignUp.id = 'signUpBtn';
  buttonSignUp.className = 'sign-up-button';

  const arrow = document.createElement('img');
  arrow.className = 'arrow';
  arrow.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/flechita.png';

  const line = document.createElement('div');
  line.className = 'line';

  const buttonLogIn = document.createElement('button');
  buttonLogIn.textContent = 'Inicia Sesión con Google';
  buttonLogIn.className = 'log-in-google';

  const bottomTextContainer = document.createElement('div');
  bottomTextContainer.className = 'bottom-text-container';

  const bottomText = document.createElement('p');
  bottomText.className = 'bottom-text';
  bottomText.textContent = '¿Ya tienes una cuenta?';

  const logInText = document.createElement('button');
  logInText.textContent = 'Inicia sesión acá';
  logInText.className = 'log-in-text';
  logInText.id = 'logInText';

  // Event Listener y conexión a Firebase

  buttonSignUp.addEventListener('click', () => {
    const userEmail = document.getElementById('emailInput').value;
    const userPassword = document.getElementById('passwordInput').value;

    signUpFirebase(userEmail, userPassword) // data para probar si está leyendo los datos
      .then((userCredential) => { // de acá para abajo es código copiado de la pag de firebase
        // console.log(userCredential);

        // Signed in
        const user = userCredential.user;
        console.log(user);

        onNavigate('/home');
      })
      .catch((error) => {
        errorContent.style.display = 'block';
        const errorCode = error.code;
        console.log(errorCode);

        if (errorCode === 'auth/weak-password') {
          errorContent.innerHTML = 'La contraseña debe tener al menos 6 carácteres';
        } else if (errorCode === 'auth/invalid-email') {
          errorContent.innerHTML = 'Llena todos los campos';
        } else {
          errorContent.innerHTML = 'Hubo un error';
          console.log(error.code, error.message);
        }
      })
      .finally(() => {
        console.log(props);
        if (props.testSignUpCallback) {
          props.testSignUpCallback();
        }
      });
  });

  // Botón de Google
  buttonLogIn.addEventListener('click', () => {
    // if (loginWithGoogle()) {
    //   onNavigate('/home');
    // }
    loginWithGoogle().then((res) => {
      console.log(res);
      onNavigate('/home');
    });
  });

  // Botón de cuenta existente
  logInText.addEventListener('click', () => {
    onNavigate('/login');
  });

  desktopContainer.append(desktopImg, divSignUp);
  divSignUp.append(logo, signUpForm, buttonSignUp, bottomTextContainer);
  signUpForm.append(title, errorContent, email, inputEmail, password, inputPass, line, buttonLogIn);
  buttonSignUp.appendChild(arrow);
  bottomTextContainer.append(bottomText, logInText);

  return desktopContainer;
};

// export const signUp = `
// <section>
//     <img src="img/logo mapa de bits.png" alt="logo de la aplicación">
//     <form>
//       <h3>SIGN UP</h3>
//       <div>
//         <label>Nombre de usuario</label>
//         <input type="text">
//         <br><br>
//         <label>Correo eletrónico</label>
//         <input type="text">
//         <br><br>
//         <label>Contraseña</label>
//         <input type="text">
//         <br><br>

//         <div class="linea"></div>
//         <hr class="featurette-divider">
//         <button class="google"></button>
//       </div>
//     </form>

//     <button class="enter"></button>
//     <div>
//       <p>¿Ya tienes una cuenta?</p>
//       <a href="#">Inicia sesión acá.</a>
//     </div>
//   </section>
// `;
