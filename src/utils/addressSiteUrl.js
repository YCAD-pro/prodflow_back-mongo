const addressSiteBdd = require("../entities/addressSite/addressSiteMongo");
const app = require('../utils/urlUtils').app

app.get('/addressSites', async (req, res) => {
    let addressSiteList = await addressSiteBdd.getAllAddressSite()
    return res.json(addressSiteList)
})
app.get('/addressSite/id/:id', async (req, res) => {
    let addressSiteId = req.params.id
    let addressSiteFind = await addressSiteBdd.getAddressSiteById(addressSiteId)
    return res.json(addressSiteFind)
})
app.get('/addressSite/name/:name', async (req, res) => {
    let addressSiteName = req.params.name
    let addressSiteFind = await addressSiteBdd.getAddressSiteByName(addressSiteName)
    return res.json(addressSiteFind)
})
app.post('/addressSite',async (req, res) => {
    const addressSite = req.body
    let addressSiteToAdd = await addressSiteBdd.addAddressSite(addressSite)
    res.json(addressSiteToAdd)
})
app.put('/addressSite/:id', async (req, res) => {
    const updates= req.body
    const id = req.params.id
    let addressSiteToUpdate = await addressSiteBdd.updateAddressSite(id, updates)
    res.json(addressSiteToUpdate)
})
app.delete('/addressSite/:name', async (req, res) => {
    const addressSiteName = req.params.name
    let addressSiteDeleted = await addressSiteBdd.deleteAddressSiteByName(addressSiteName)
    res.json(addressSiteDeleted)
})