import db from './firebaseConfig'
import { setDoc, doc, query, collection, where, getDocs, WhereFilterOp } from 'firebase/firestore'
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

  getEvents() {
    const uid = localStorage.getItem('uid')
    return this.getMany<Event>('event', 'uid', '==', uid!)
  }

  private create(collectionName: string, id: string, data: unknown): Promise<unknown> {
    return setDoc(doc(db, collectionName, id), data)
  }

  private async getMany<T>(
    collectionName: string,
    key: string,
    queryCommand: WhereFilterOp,
    value: unknown
  ) {
    const q = query(collection(db, collectionName), where(key, queryCommand, value))
    const arr: T[] = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      arr.push(doc.data() as T)
    })

    return arr
  }
}

export default new Api()
