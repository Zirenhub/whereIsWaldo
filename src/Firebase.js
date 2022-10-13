import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAjHnlo3RD1-K8aIGAJSTQa9OiMGUjTq5w',

  authDomain: 'where-s-waldo-88e49.firebaseapp.com',

  projectId: 'where-s-waldo-88e49',

  storageBucket: 'where-s-waldo-88e49.appspot.com',

  messagingSenderId: '7858924533',

  appId: '1:7858924533:web:6c07ed1eea8bf6986d4ebc',

  measurementId: 'G-8SB65JTKHE',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
