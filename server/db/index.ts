// module.exports = dbInstance;
namespace database {
  const db = require('./db');

  // register models
  require('./models');

  module.exports = db;
}


