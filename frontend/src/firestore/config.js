// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTbx7GYM4y9koSzK1il44Yp7sAq5T6Vkk',
  authDomain: 'elschoolstorage.firebaseapp.com',
  projectId: 'elschoolstorage',
  storageBucket: 'elschoolstorage.appspot.com',
  messagingSenderId: '647718019052',
  appId: '1:647718019052:web:a97248f95082a57ad72ac9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
