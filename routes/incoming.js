const { Router } = require('express');
const router = Router();

//import sample.json
const movies = require('../sample.json');
//console.log(movies)
//routes
router.get('/', (req,res) => {
    res.json(movies)
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send("received")
})

//exportar
module.exports = router;