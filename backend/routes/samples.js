import express from 'express'
const router = express.Router();
import Fire_sample from '../models/Fire_sample.js'
import Step_sample from '../models/Step_sample.js'
import Explosion_sample from '../models/Explosion_sample.js'

router.post('/add/fire', async(req , res) => {
    try {
        const fire_sample = await Fire_sample.create(req.body)
        if(fire_sample) {
            res.send(fire_sample)
            console.log('Все прошло успешно');
        }
    }catch(error) {
        res.send("Плохо. Переделывай!")
        console.log('Плохо. Переделывай!')
        console.log(error)
    }
})

router.post('/add/step', async(req , res) => {
    try {
        const step_sample = await Step_sample.create(req.body)
        if(step_sample) {
            res.send(step_sample)
            console.log('Все прошло успешно');
        }
    }catch(error) {
        res.send("Плохо. Переделывай!")
        console.log('Плохо. Переделывай!')
        console.log(error)
    }
})

router.post('/add/explosion', async(req , res) => {
    try {
        const explosion_sample = await Explosion_sample.create(req.body)
        if(explosion_sample) {
            res.send(explosion_sample)
            console.log('Все прошло успешно');
        }
    }catch(error) {
        res.send("Плохо. Переделывай!")
        console.log('Плохо. Переделывай!')
        console.log(error)
    }
})


router.get('/get/fire', async(req, res) => {
    const fire_samples = await Fire_sample.find();
    res.json(fire_samples)
    console.log("Метод вызван");
})
router.get('/get/fire/:gamename', async(req, res) => {
    const fire_samples = await Fire_sample.find({gamename: req.params.gamename});
    res.json(fire_samples)
    console.log("Метод вызван");
})


router.get('/get/step', async(req, res) => {
    const step_samples = await Step_sample.find();
    res.json(step_samples)
    console.log("Метод вызван");
})
router.get('/get/step/:gamename', async(req, res) => {
    const step_samples = await Step_sample.find({gamename: req.params.gamename});
    res.json(step_samples)
    console.log("Метод вызван");
})


router.get('/get/explosion', async(req, res) => {
    const explosion_samples = await Explosion_sample.find();
    res.json(explosion_samples)
    console.log("Метод вызван");
})
router.get('/get/explosion/:gamename', async(req, res) => {
    const explosion_samples = await Explosion_sample.find({gamename: req.params.gamename});
    res.json(explosion_samples)
    console.log("Метод вызван");
})

export default router