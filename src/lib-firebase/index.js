/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithEmailAndPassword, getRedirectResult,
} from 'firebase/auth';
import {
  getFirestore, doc, setDoc, collection, getDocs, getDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA1E6v0tl-VMKi90Oqck7ywqNNbgBj6lBE',
  authDomain: 'beat-1-29ed1.firebaseapp.com',
  projectId: 'beat-1-29ed1',
  storageBucket: 'beat-1-29ed1.appspot.com',
  messagingSenderId: '95473403789',
  appId: '1:95473403789:web:c3d43d3ca3251e2a029fc4',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// función de autenticación
export const auth = getAuth();
// eslint-disable-next-line max-len
export const signUpFirebase = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

// función de google provider
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return new Promise((resolve) => {
    signInWithRedirect(auth, provider);
    resolve(getRedirectResult(auth));
    // resolve(signInWithRedirect(auth, provider));
    // resolve(signInWithRedirect(auth, provider))
  });
};

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// export const createReview = (username, comment) => setDoc(doc(collection(db, 'reviews')), {
//   username,
//   comment,
//   likes: [],
// });

export function createReview(username, comment) {
  const dbRef = doc(collection(db, 'reviews'));
  const data = {
    username,
    comment,
    likes: [],
  };

  const result = setDoc(dbRef, data);

  return result;
}

// Collecting data from FireStore
// export function getReview() {
//   const getCollection = getDocs(collection(db, 'reviews'));
//   getCollection.forEach((doc) => {
//     console.log(doc.id, ' => ', doc.data());
//   });
// }

// Prueba
export const getReview = () => {
  let asd = [];
  getDocs(collection(db, 'reviews')).then((reviews) => {
    reviews.forEach((doc) => {
      console.log(doc.id, '=> ', doc.data().comment, doc.metadata);
      asd.push(doc.data().comment)
    });
  
    console.log(" AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", asd, asd[asd.length - 1]);
  });
};

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     onNavigate('/home');
//   } else {
//     onNavigate('/');
//   }
// });
