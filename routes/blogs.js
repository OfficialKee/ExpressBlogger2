const express = require('express');
const router = express.Router();

//instantiate mongodb 
const { db } = require('../mongo');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const blogs = await db()
  .collection('sample_blogs')
  .find({})
  .limit(5)
  .toArray(function(err, result){
      if (err) {
        res.status(400).send("error fetching blogs")
      } else {
        res.json(result);
      }
    }); 

    res.json({
      sucess:true,
      blogs: blogs
    });

    

});

/* GET users listing. */



router.get('/all', async function(req, res, next) {

  const blogsAll = await db()
  .collection('sample_blogs')
  .find({})
  .limit(5)
  .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });

    res.json({
      sucess: true,
      blogs: blogsAll
    });

});

router.get('/get-one', async function (req, res, next) {
  

  const title = req.query.title
 
  const queryFind = await db()
  .collection('sample_blogs')
  .find({title: title})
  .limit(5)
  .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });

    res.json({
      sucess: true,
      blogs: queryFind
    });
});

    
   



router.get('/single-blog/:titleToGet', async function (req, res, next) {
    
 const titleToGet = req.params.titleToGet
    
  const queryFind = await db()
  .collection('sample_blogs')
  .find({title: titleToGet})
  .limit(5)
  .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });

    res.json({
      sucess: true,
      blogs: queryFind
    });
          
 })



module.exports = router;
