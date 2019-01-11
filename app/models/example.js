import knex from '../../config/database';

//TABLES SHORTHANDS
const User = () => knex('some_table_name');


//CONSULTS

const createUser = (email, password) => 
  User()
    .insert({
      email,
      password
    })

const getuser = (userId) =>
  User()
    .where('id', '=', userId)
    .andWhere('active', '=', true)



export default {
  createUser,
  getuser
}


