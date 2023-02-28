import { signUp } from '../src/components/signup.js';
import { signUpFirebase } from '../src/lib-firebase/index.js';
// eslint-disable-next-line prefer-promise-reject-errors
jest.mock('../src/lib-firebase/index.js', () => ({
  signUpFirebase: jest.fn(),
}));

describe('Sign Up Function', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
});

// Función asíncrona - botón de Sign Up
describe('Sign Up Form', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });
  it('should show error when user didnt fill all the fields', (done) => {
    signUpFirebase.mockRejectedValueOnce({ code: 'auth/missing-email' });

    const testSignUpCallback = () => {
      expect(document.getElementById('errorContent').innerHTML).toEqual('Llena todos los campos');
      done();
    };

    document.body.append(signUp({ testSignUpCallback }));

    document.getElementById('signUpBtn').click();
  });

  it('should show error when user use weak password', (done) => {
    signUpFirebase.mockRejectedValueOnce({ code: 'auth/weak-password' });
    const testSignUpCallback = () => {
      expect(document.getElementById('errorContent').innerHTML).toEqual('La contraseña debe tener al menos 6 carácteres');
      done();
    };
    document.body.append(signUp({ testSignUpCallback }));
    document.getElementById('signUpBtn').click();
  });
});
