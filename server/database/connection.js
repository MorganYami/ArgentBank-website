const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb+srv://UserTest:zerOVCUY1jqJuXfC@cluster0.cyg8xg3.mongodb.net/Cluster0?retryWrites=true&w=majority'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
