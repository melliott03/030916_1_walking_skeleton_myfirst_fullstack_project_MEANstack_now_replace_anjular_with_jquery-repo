var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_walking_skeleton');
var Cat = mongoose.model('Cat', {name:String});

/* These are the calls that handle GET and POST, specifically when we hit the /cats route, and
the /add route. In the post call, we create a new instance of the Cat object and set the name
equal to the requests.body.name (from the Angular input field). We then call the .save
functionality of mongoose to toss it back to the database.
*/
router.post('/add', function(request, response){
  var kitty = new Cat({name: request.body.values});
  kitty.save(function(err){
    if(err) console.log('meow %s', err);
    response.send(kitty.toJSON());
  });
});

router.get('/cats', function(request, response){
  return Cat.find({}).exec(function(err, cats){
    if(err) throw new Error(err);
    response.send(cats);
  });
});

router.get("/*", function(req, res){
  console.log("Here is a colsole log");

  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
