const settings = require('./settings.json');

module.exports = {

  development: {
    client: 'pg',
    connection: {
   //   filename: settings
      user: settings.user,
      password: settings.password,
      database: settings.database
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: settings.database,
      user:     settings.user,
      password: settings.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: settings.database,
      user:     settings.user,
      password: settings.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
