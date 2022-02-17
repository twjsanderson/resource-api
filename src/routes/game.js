var express = require('express');
var router = express.Router();

const db = {};

// get specific url
router.get('/game/:id', (req, res, next) => {
  res.json({ 'heleo': 'dfbnjksfh '})
});

// need fall back URL
router.get('*', function(req, res){
  res.send('what???', 404);
});

// create new game 
// generate id 
// add to DB
// respond with confirmation
// router.post('/game', (req, res, next) => {
//   res.json({ '200': 'added new game'})
// });

// router.put('/game', (req, res, next) => {

//   res.json({ 'heleo': 'dfbnjksfh '})
// });

// router.delete('/game', (req, res, next) => {

//   res.json({ 'heleo': 'dfbnjksfh '})
// });


module.exports = router;
