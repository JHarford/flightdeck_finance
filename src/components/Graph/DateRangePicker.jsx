import React, { useState } from 'react'

const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleDateChange = () => {
    onDateChange({ startDate, endDate })
  }

  const quickFilters = (type) => {
    const now = new Date()
    let start, end

    switch (type) {
      case 'lastYear':
        start = new Date(now.getFullYear() - 1, 0, 1)
        end = new Date(now.getFullYear() - 1, 11, 31)
        break
      case 'last6Months':
        start = new Date(now.setMonth(now.getMonth() - 6))
        end = new Date()
        break
      case 'last3Months':
        start = new Date(now.setMonth(now.getMonth() - 3))
        end = new Date()
        break
      default:
        start = ''
        end = ''
    }

    setStartDate(start.toISOString().split('T')[0])
    setEndDate(end.toISOString().split('T')[0])
    onDateChange({ startDate: start, endDate: end })
  }

  return (
    <div>
      <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={handleDateChange}>Apply</button>
      <div>
        <button onClick={() => quickFilters('lastYear')}>Last Year</button>
        <button onClick={() => quickFilters('last6Months')}>Last 6 Months</button>
        <button onClick={() => quickFilters('last3Months')}>Last 3 Months</button>
      </div>
    </div>
  )
}

export default DateRangePicker
