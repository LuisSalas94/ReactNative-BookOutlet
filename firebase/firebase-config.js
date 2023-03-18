// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDd3fw7duwP4xKmn4OLvzORsDAYEWVZLe8',
  authDomain: 'proyectofirebase-9d69f.firebaseapp.com',
  databaseURL: 'https://proyectofirebase-9d69f.firebaseio.com',
  projectId: 'proyectofirebase-9d69f',
  storageBucket: 'proyectofirebase-9d69f.appspot.com',
  messagingSenderId: '946631872206',
  appId: '1:946631872206:web:019702268330f7958d4a9f',
  measurementId: 'G-3SSB09Z2FH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
