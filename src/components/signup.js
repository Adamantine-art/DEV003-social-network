// import { onNavigate } from '../main.js';
import { signUp as signUpFirebase } from '../lib-firebase';

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
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.required = true;
  inputEmail.className = 'input-email';
  const password = document.createElement('h4');
  password.className = 'password';
  password.textContent = 'Constraseña';
  password.required = true;
  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  inputPass.required = 'true';
  inputPass.className = 'input-password';
  inputPass.minLength = 6;
  const buttonSignUp = document.createElement('button');
  buttonSignUp.textContent = 'Crea una cuenta';
  buttonSignUp.id = 'signUpBtn';
  const buttonLogIn = document.createElement('button');
  buttonLogIn.textContent = 'Inicia Sesión';

  buttonSignUp.addEventListener('click', () => {
    console.log('registrate');
    signUpFirebase('ejemplo@gmail.com', '123456') // data para probar si está leyendo los datos
      .then((userCredential) => { // de acá para abajo es código copiado de la pag de firebase
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    // onNavigate('/login');
  });

  divSignUp.append(logo, signUpForm, email, inputEmail, password, inputPass);
  signUpForm.appendChild(title, buttonSignUp, buttonLogIn);

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
