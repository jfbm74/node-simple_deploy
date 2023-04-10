const { Router } = require('express');
const router = Router();


//routes
router.get('/', (req,res) => {
    res.json({"Title" : "Hi Slack!"})
});

//exportar
module.exports = router;