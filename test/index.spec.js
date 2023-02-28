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

describe('Sign Up Form', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should show error when user didnt fill all the fields', (done) => {
    signUpFirebase.mockRejectedValueOnce({ code: 'auth/invalid-email' });

    document.body.append(signUp());
    document.getElementById('signUpBtn').click();

    setTimeout(function () {
      expect(document.getElementById('errorContent').innerHTML).toEqual('Llena todos los campos');
      done()
    });
  });

  it.skip('should show error when user use weak password', (done) => {
    signUpFirebase.mockRejectedValueOnce({ code: 'auth/weak-password' });
    const testCallback = () => {
      expect(document.getElementById('errorContent').innerHTML).toEqual('La contraseña debe tener al menos 6 carácteres');
      done();
    };
    document.body.append(signUp({ testCallback }));
    document.getElementById('signUpBtn').click();
  });
});
