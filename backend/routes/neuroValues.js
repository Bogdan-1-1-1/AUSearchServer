import express from 'express'
const router = express.Router();
import NeuroValues from '../models/NeuroValues.js'

router.post('/add/values', async(req, res) => {
    try {
        const values = await NeuroValues.create(req.body)
        if(values) {
            res.send(values)
            console.log('Все прошло успешно');
        }
    }catch(error) {
        res.send("Плохо. Переделывай!")
        console.log('Плохо. Переделывай!')
        console.log(error)
    }
})

router.get('/get/values', async(req, res) => {
    const values = await NeuroValues.find();
    res.json(values)
    console.log("Метод вызван");
})

router.delete('/delete/values', async(req, res) =>{
    try {
        const values = await NeuroValues.deleteOne()
        if(values) {
            res.send(values);
            console.log('удаление прошло успешно');
        }
    }
    catch(eror) {
        res.send("Не удалил")
        console.log('Не удалил')
        console.log(error)
    }
})

router.get('/get/values/:gamename', async(req, res) => {
    const values = await NeuroValues.find({gamename: req.params.gamename})
    res.json(values)
    console.log("Метод вызван");
})

router.delete('/delete/values/:gamename', async(req, res) => {
    try {
        const values = await NeuroValues.deleteOne({gamename: req.params.gamename})
        if(values) {
            res.send(values);
            console.log('удаление прошло успешно');
        }
    }
    catch(eror) {
        res.send("Не удалил")
        console.log('Не удалил')
        console.log(error)
    }
})

export default router