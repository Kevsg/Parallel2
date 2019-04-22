const router = require('express-promise-router')();
const model = require('./model');

router.get('/', async (req, res) => {
    res.status(200).json(await model.allrooms())
})
router.post('/', async (req, res) => {
    var id = req.body.id;
    var valid = await model.addRoom(id);
    if(valid){
        res.status(201).json({'id':id});
    }
    else{
        res.status(404).send('ROOM_ID already exists');
    }
})
router.put('/', async (req, res) => {
    var id = req.body.id;
    //console.log(id);
    var valid = await model.addRoom(id);
    if(valid){
        res.status(201).json({'id':id});
    }
    else{
        res.status(200).json({'id':id});
    }
})
router.delete('/',async (req, res) => {
    var id = req.body.id;
    //console.log(id);
    var valid = await model.removeRoom(id);
    if(valid){
        res.status(200).send("ROOM_ID Is deleted");
    }
    else{
        res.status(404).send("Room id is not found");
    }
})

module.exports = router;
