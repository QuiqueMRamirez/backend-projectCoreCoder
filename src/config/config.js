const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  postgre: {
    user: 'postgres',
    password: 'cemr!2013',
    host: 'localhost',
    database: 'budgetApp',
    port: '5432'
  },
  server: {
    port: 3800
  }
}