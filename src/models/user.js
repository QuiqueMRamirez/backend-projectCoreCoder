import { query } from '../util/postgre-database';

const User = {};

User.create = (data) => {
  const bindings = [...data];
  const SQL_CREATE_USER = `INSERT INTO USER(firstname, lastname, email, celular, gender, city, password) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  return query(SQL_CREATE_USER, bindings);
}

export default User;