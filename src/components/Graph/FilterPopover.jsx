import React, { useState } from 'react'

const FilterPopover = ({ onFilterChange }) => {
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedSupplier, setSelectedSupplier] = useState('')
  const [selectedPaymentType, setSelectedPaymentType] = useState('')

  const handleFilterChange = () => {
    onFilterChange({ selectedTags, selectedSupplier, selectedPaymentType })
  }

  return (
    <div>
      <div>
        <label>Tags:</label>
        <input type='text' value={selectedTags} onChange={(e) => setSelectedTags(e.target.value.split(','))} />
      </div>
      <div>
        <label>Supplier:</label>
        <input type='text' value={selectedSupplier} onChange={(e) => setSelectedSupplier(e.target.value)} />
      </div>
      <div>
        <label>Payment Type:</label>
        <input type='text' value={selectedPaymentType} onChange={(e) => setSelectedPaymentType(e.target.value)} />
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  )
}

export default FilterPopover
