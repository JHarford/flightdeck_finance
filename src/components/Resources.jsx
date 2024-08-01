import React from 'react'
import { useState } from 'react'

import { addEntryToCollection, deleteEntry, modifyEntry, getAllEntries, searchInCollection } from '../services/firebase'

export default function Resources() {
  const [entries, setEntries] = useState([])

  const handleAdd = () => {
    addEntryToCollection('testCollection', { name: 'John Doe', age: 30 })
      .then(() => {
        console.log('Added document to testCollection')
        handleFetchAllEntries()
      })
      .catch((error) => console.error('Error adding document:', error))
  }

  const handleFetchAllEntries = () => {
    getAllEntries('resources')
      .then((documents) => {
        setEntries(documents)
        console.log('Fetched all documents from testCollection')
      })
      .catch((error) => console.error('Error fetching documents:', error))
  }

  return (
    <div>
      <h1>Resources</h1>
      <button onClick={handleAdd}>Add document</button>
      <button onClick={handleFetchAllEntries}>Fetch all entries</button>
      <pre>{JSON.stringify(entries, null, 2)}</pre> {/* Display fetched documents */}
    </div>
  )
}
