import knex from 'knex';

export const connectKnex = (() => knex({
  client: 'mssql',
  connection: {
    host: 'localhost',
    user: 'yourmom',
    port: '0000',
    password: '123456',
    database: 'somedb'
  }
}))();


export default connectKnex;

