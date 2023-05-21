import db from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

class Api {
  authenticateUser(email: string, password: string) {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => userCredential.user
    )
  }

  private create(collectionName: string, data: unknown): Promise<unknown> {
    return addDoc(collection(db, collectionName), data)
  }
}

export default new Api()
