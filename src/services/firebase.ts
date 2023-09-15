
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCOatln-ThhTLcE5gr9q6XgCyLWo3fiZtM',
  authDomain: 'auth-1a58c.firebaseapp.com',
  projectId: 'auth-1a58c',
  storageBucket: 'auth-1a58c.appspot.com',
  messagingSenderId: '948325220372',
  appId: '1:948325220372:web:f6310519c3ade9f1bfe701'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
