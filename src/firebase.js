import { initializeApp } from 'firebase/app'
import { getAuth } from 'Firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB2gzRdciZF7Y9Q2c0QZyjxiP7YjPbJtNE",
  authDomain: "tutorial1-b3b25.firebaseapp.com",
  projectId: "tutorial1-b3b25",
  storageBucket: "tutorial1-b3b25.appspot.com",
  messagingSenderId: "1086387089132",
  appId: "1:1086387089132:web:a4ec259f0a49375aa7ffc9",
  measurementId: "G-PD9JV67M07",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)

export default firebaseApp
