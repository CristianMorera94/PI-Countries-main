const { Router } = require('express');
const { Country, Activity } = require('../db')

const routerCountry = Router();

routerCountry.get('/', async(req, res) => {
    const  { name }  = req.query;
    let countries = await Country.findAll();
    if (name) {
        console.log(name);
        let nameCountry = countries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        nameCountry.length ?
        res.status(200).send(nameCountry) :
        res.status(404).send('Pais no encontrado')
    }else{
    res.status(200).send(countries)
    }
});

routerCountry.get('/:id', async(req, res) => {
    const id = req.params.id.toUpperCase();
        let countries = await Country.findAll({
            where:{id}, 
            include:{
                model: Activity,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })
        if (countries) {
            res.status(200).send(countries) 
        } else {
            res.status(404).send("no se encontro el pais")
        }
})

module.exports = routerCountry;