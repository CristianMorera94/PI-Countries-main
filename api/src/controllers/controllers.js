const axios = require ('axios');
const { Country } = require('../db');

////pasar de la api a la DB tabla country
    const getApiInfo = async () =>{
    const {data} = await axios.get(`https://restcountries.com/v3/all`);
    const api = await data.map( country => {
        return{
            id: country.cca3,
            name: country.name.common,
            imgFlag: country.flags[1],
            capital: country.capital != null ? country.capital[0] : "No data",
            continent: country.continents[0],
            subregion: country.subregion? country.subregion:'no tiene',
            area: country.area? country.area: 'no tiene',
            population: country.population,
        };
    })
    const result = await Country.bulkCreate(api)
    return result
};
    

module.exports={
    getApiInfo,
}