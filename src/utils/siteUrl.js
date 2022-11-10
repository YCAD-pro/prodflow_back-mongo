const siteBdd = require("../entities/sites/siteMongo");
const app = require('../utils/urlUtils').app

app.get('/sites', async (req, res) => {
    let siteList = await siteBdd.getAllSite()
    return res.json(siteList)
})
app.get('/site/id/:id', async (req, res) => {
    let siteId = req.params.id
    let siteFind = await siteBdd.getSiteById(siteId)
    return res.json(siteFind)
})
app.get('/site/name/:name', async (req, res) => {
    let siteName = req.params.name
    let siteFind = await siteBdd.getSiteByName(siteName)
    return res.json(siteFind)
})
app.post('/site',async (req, res) => {
    const site = req.body
    let siteToAdd = await siteBdd.addSite(site)
    res.json(siteToAdd)
})
app.put('/site/:id', async (req, res) => {
    const updates= req.body
    const id = req.params.id
    let siteToUpdate = await siteBdd.updateSite(id, updates)
    res.json(siteToUpdate)
})
app.delete('/site/:name', async (req, res) => {
    const siteName = req.params.name
    let siteDeleted = await siteBdd.deleteSiteByName(siteName)
    res.json(siteDeleted)
})