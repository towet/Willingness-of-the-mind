import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBRLNJLDSKGQOkHMWpZCKdlOlPFPSQjLWI",
  authDomain: "mental-wellness-chat.firebaseapp.com",
  databaseURL: "https://mental-wellness-chat-default-rtdb.firebaseio.com",
  projectId: "mental-wellness-chat",
  storageBucket: "mental-wellness-chat.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef0123456789"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
