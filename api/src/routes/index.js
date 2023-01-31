const { Router } = require('express');
const router = Router();

const routerCountry = require("./routesCountries");
const routerActivity = require("./routesActivity")

router.use("/country", routerCountry)
router.use("/activity", routerActivity)

module.exports = router;
