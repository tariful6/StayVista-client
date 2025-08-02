
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDz4gFHAMOYX81HxDsu3cwLuS-WFkmV9sU",
  authDomain: "stayvista-d8a08.firebaseapp.com",
  projectId: "stayvista-d8a08",
  storageBucket: "stayvista-d8a08.firebasestorage.app",
  messagingSenderId: "984245992893",
  appId: "1:984245992893:web:274c9da34aaf39c4ab66d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)
