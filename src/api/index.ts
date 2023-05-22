import db from './firebaseConfig'
import { setDoc, doc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Event from '@/types/Event'

class Api {
  authenticateUser(email: string, password: string) {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => userCredential.user
    )
  }

  createEvent(event: Event) {
    return this.create('event', event.id, event)
  }

  private create(collectionName: string, id: string, data: unknown): Promise<unknown> {
    return setDoc(doc(db, collectionName, id), data);
  }
}

export default new Api()
