import React, { useState } from 'react'

// In this page we will create a form component to add an entry, each entry will have tags for filtering.
// Only tags from the database will be allowed to be added to the entry.
// We will add a dropdown to select / filter tags

function AddEntry() {
  const [formData, setFormData] = useState({
    name: '',
    supplier: '',
    type: false,
    tags: [],
    cost: 0,
    date: new Date().toISOString().split('T')[0],
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Supplier:
          <input type='text' name='supplier' value={formData.supplier} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Type (In/Out):
          <input type='checkbox' name='type' checked={formData.type} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Tags:
          <input type='text' name='tags' value={formData.tags.join(', ')} onChange={(e) => handleChange({ target: { name: 'tags', value: e.target.value.split(', ') } })} />
        </label>
      </div>
      <label>
        Date:
        <input type='date' name='date' value={formData.date} onChange={handleChange} />
      </label>
      <div>
        <label>
          Cost:
          <input type='number' name='cost' value={formData.cost} onChange={handleChange} />
        </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddEntry
