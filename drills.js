
let express = require('express');
let app = express();
let port = 3000;
let Treeize = require('treeize');
let sumsing;
// Require Knex and make connection
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://jfmpicvc:PRwM5rSx3YGUO71IkjtL9WO__0fA-u0M@stampy.db.elephantsql.com:5432/jfmpicvc'
});

app.get('/restaurants/:id', (request, response) => {
  knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id as gradeId', 'grade', 'score')
    .from('restaurants')
    .where({'restaurants.id': request.params.id})
    .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
    .then(results => {
      let cahka = results;
      let items = new Treeize();
      items.grow(cahka);
      sumsing = items.getData();
      console.log(sumsing);
      return response.json(sumsing);
      // let grades = new Treeize();
      // grades.grow(results);
      // sumsing = grades.getData();
      // response.json(sumsing);
      // var items = new Treeize();
      // items.grow(results);
      // response.items.getData();
      //response.json(results);
      //var tree = items.getData();
      //console.log(response.json(tree));
    // const hydrated = {};
    //   results.forEach(item => {        
    //     if(!(item.id in hydrated)) {
    //       hydrated[item.id] = {
    //         name: item.name,
    //         cuisine: item.cuisine,
    //         borough: item.borough,
    //         grades: []            
    //       };
    //     }
    //     hydrated[item.id].grades.push({
    //       gradeId: item.gradeId,
    //       grade: item.grade,
    //       score: item.score
    //     });
    //   });
    //   response.json(hydrated);
    // });  
    });
});


app.listen(port, function() {
  console.log('Server is running');
});