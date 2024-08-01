// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, deleteDoc, doc, updateDoc, getDocs, query, where } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASyznOiYCBQZgKS4nujsRqJPFZmx9vDh8',
  authDomain: 'flightdeck-finance.firebaseapp.com',
  projectId: 'flightdeck-finance',
  storageBucket: 'flightdeck-finance.appspot.com',
  messagingSenderId: '67683889682',
  appId: '1:67683889682:web:22682ea65c57f2502c5ecb',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Creating a collection and adding a document
export const addEntryToCollection = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

// Deleting an entry
export const deleteEntry = async (collectionName, docId) => {
  try {
    await deleteDoc(doc(db, collectionName, docId))
    console.log('Document successfully deleted!')
  } catch (e) {
    console.error('Error removing document: ', e)
  }
}

// Modifying an entry
export const modifyEntry = async (collectionName, docId, newData) => {
  try {
    const docRef = doc(db, collectionName, docId)
    await updateDoc(docRef, newData)
    console.log('Document successfully updated!')
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

// Fetching all entries from a collection
export const getAllEntries = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    let documents = []
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    return documents // Return the array of documents
  } catch (e) {
    console.error('Error getting documents: ', e)
    throw e // Re-throw the error to be caught by the caller
  }
}

// Searching for specific documents within a collection
export const searchInCollection = async (collectionName, field, searchTerm) => {
  try {
    const q = query(collection(db, collectionName), where(field, '==', searchTerm))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data())
    })
  } catch (e) {
    console.error('Error querying documents: ', e)
  }
}
