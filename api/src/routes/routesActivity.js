const { Router } = require('express');
const { Activity, Country } = require('../db')
const { Op } = require('sequelize');

const routerActivity = Router();

routerActivity.get('/', async(req, res) =>{
    res.status(200).send(await Activity.findAll())
})

routerActivity.post('/', async(req,res) => {
    const { name, difficulty, time, season, relatedCountries} = req.body;
    console.log(name, difficulty, time, season, relatedCountries );
    if (!name || !difficulty || !time || !season || !relatedCountries )
        return res.status(404).send({msg: 'Required data is missing'})
    try {
        console.log(name, difficulty, time, season, relatedCountries );
        const createActivity = await Activity.create({
            name, difficulty, time, season
        })
        relatedCountries.forEach(async(country) => {
            if (country) {
                const countries = await Country.findAll({
                    where: {name: country}
                })
                await createActivity.addCountry(countries)
            }
        });

        return res.status(201).send("actividad creada")
    } catch (error) {
    console.log(error)
    }
})

module.exports = routerActivity;