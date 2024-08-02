const generateRandomEntry = () => {
  // Define some sample data for randomness
  const names = ['Digital Ocean Hosting', 'AWS Cloud Services', 'Azure Storage', 'Google Compute Engine', 'IBM Cloud', 'Linode Hosting', 'Heroku Dynos', 'Vultr Compute', 'Alibaba Cloud', 'Oracle Cloud Services']
  const suppliers = ['Digital Ocean', 'Amazon', 'Microsoft', 'Google', 'IBM', 'Linode', 'Heroku', 'Vultr', 'Alibaba', 'Oracle']
  const types = ['in', 'out']
  const tagOptions = [
    ['cloud', 'hosting'],
    ['marketing', 'sales'],
    ['development', 'research'],
    ['it', 'support'],
    ['finance', 'accounting'],
    ['design', 'ux'],
    ['seo', 'advertising'],
    ['legal', 'compliance'],
    ['hr', 'recruitment'],
    ['education', 'training'],
  ]
  const baseDate = new Date(2024, 0, 1) // Start from Jan 1, 2024

  // Randomly select data for entry
  const name = names[Math.floor(Math.random() * names.length)]
  const supplier = suppliers[Math.floor(Math.random() * suppliers.length)]
  const type = types[Math.floor(Math.random() * types.length)]
  const tags = tagOptions[Math.floor(Math.random() * tagOptions.length)]
  const date = new Date(baseDate.getTime() + Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toDateString() // Random date within one year
  const cost = parseFloat((Math.random() * 100 + 20).toFixed(2)) // Random cost between 20 and 120

  return {
    name,
    supplier,
    type,
    tags,
    date,
    cost,
  }
}

// Generate an array of 20 random entries
const entries = Array.from({ length: 20 }, generateRandomEntry)

export default entries
