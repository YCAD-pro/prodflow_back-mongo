let siteData = require('../../utils/bddUtils').siteData

async function getAllSite() {
    let sites = await siteData.find()
    return sites;
}

async function getSiteById(id) {
    return siteData.findById(id)
}

async function getSiteByName(siteName) {
    return siteData.findOne({site_name: siteName});
}

async function addSite(site) {
    let siteToAdd = new siteData(site)
    return await siteToAdd.save()
}

async function updateSite(id, site) {
    return siteData.findByIdAndUpdate(id, {site});
}

async function deleteSiteByName(siteName) {
    return siteData.deleteOne({site_name: siteName})
}

module.exports = {
    getAllSite: getAllSite,
    getSiteById: getSiteById,
    getSiteByName: getSiteByName,
    addSite: addSite,
    updateSite: updateSite,
    deleteSiteByName: deleteSiteByName
}

