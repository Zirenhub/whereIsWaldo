// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyAjHnlo3RD1-K8aIGAJSTQa9OiMGUjTq5w',

  authDomain: 'where-s-waldo-88e49.firebaseapp.com',

  projectId: 'where-s-waldo-88e49',

  storageBucket: 'where-s-waldo-88e49.appspot.com',

  messagingSenderId: '7858924533',

  appId: '1:7858924533:web:6c07ed1eea8bf6986d4ebc',

  measurementId: 'G-8SB65JTKHE',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app;
