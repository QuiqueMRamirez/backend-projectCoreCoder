import { query } from '../util/postgre-database';

const Bank = {};

Bank.create = (data) => {
    const bindings = [...data]
    const SQL_CREATE_BANK = `INSERT INTO BANK(account,type,coin,bankname,name)values($1,$2,$3,$4,$5)`
    return query(SQL_CREATE_BANK,bindings)
}

export default Bank;