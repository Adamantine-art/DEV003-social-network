import { signUpFirebase, loginWithGoogle } from '../lib-firebase/index.js';
import { onNavigate } from '../router/utils';

export const signUp = () => {
  const divSignUp = document.createElement('div');
  divSignUp.className = 'sign-up-container';

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = 'img/logo mapa de bits.png';

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
  arrow.src = 'img/flechita.png';

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

  const logInText = document.createElement('a');
  logInText.textContent = 'Inicia sesión acá';
  logInText.className = 'log-in-text';
  logInText.setAttribute('href', 'http://localhost:5173/login');

  // Event Listener y conexión a Firebase

  buttonSignUp.addEventListener('click', () => {
    const userEmail = document.getElementById('emailInput').value;
    const userPassword = document.getElementById('passwordInput').value;
    // console.log('registrate');
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

        if (errorCode === 'auth/weak-password') {
          errorContent.innerHTML = 'La contraseña debe tener al menos 6 carácteres';
        } else if (errorCode === 'auth/missing-email') {
          errorContent.innerHTML = 'Llena todos los campos';
        } else {
          errorContent.innerHTML = 'Hubo un error';
          console.log(error.code, error.message);
        }
      });
  });

  buttonLogIn.addEventListener('click', () => {
    loginWithGoogle();
  });

  divSignUp.append(logo, signUpForm, buttonSignUp, bottomTextContainer);
  signUpForm.append(title, errorContent, email, inputEmail, password, inputPass, line, buttonLogIn);
  buttonSignUp.appendChild(arrow);
  bottomTextContainer.append(bottomText, logInText);

  return divSignUp;
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
