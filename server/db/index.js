const { Pool } = require('pg')
 
/** Connects to pg database */
const pool = new Pool()
 
module.exports = {
  query: (text, params) => pool.query(text, params),
}