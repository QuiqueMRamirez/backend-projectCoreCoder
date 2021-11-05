import { query } from '../util/postgre-database';

const IncExp = {}

IncExp.create = (data) => {
    const bindings = [...data];
    const SQL_CREATE_EXPENSE_INCOME = `INSERT INTO EXPINC(name,type,account,amount)values($1, $2, $3, $4)`
    query(SQL_CREATE_EXPENSE_INCOME,bindings);
}