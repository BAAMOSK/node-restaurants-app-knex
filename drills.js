
// Require Knex and make connection
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://jfmpicvc:PRwM5rSx3YGUO71IkjtL9WO__0fA-u0M@stampy.db.elephantsql.com:5432/jfmpicvc'
});



// knex.select().table('restaurants').then(results => console.log(results));
//knex.select().table('restaurants').where({cuisine: 'Italian'}).then(results => console.log(results));

// knex.select('id', 'name')
// .from('restaurants')
// .where({cuisine: 'Italian'})
// //.limit(10)
// .then(names => console.log({restaurants: names}));

knex('id', 'name')
.count().where({cuisine: 'Thai'})
.from('restaurants')
.then(results => console.log(results)); 