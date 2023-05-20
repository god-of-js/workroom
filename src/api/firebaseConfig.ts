import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDuQrTGPjOnYCQ8FjqhbBTyhHrWwCC2qNY',
  authDomain: 'schedulo-712fb.firebaseapp.com',
  projectId: 'schedulo-712fb',
  storageBucket: 'schedulo-712fb.appspot.com',
  messagingSenderId: '123045250916',
  appId: '1:123045250916:web:fa3a3512f3c57b88bedc71',
  measurementId: 'G-BZLZDX4HP3'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
