const mysql = require('mysql')

const db = mysql.createPool({
  host: '10.162.149.15',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01',
})

module.exports = db
