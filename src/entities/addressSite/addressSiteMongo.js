let addressSiteData = require('../../utils/bddUtils').addressSiteData

async function getAllAddressSite() {
    let sites = await siteData.find()
    return sites;
}

async function getAddressSiteById(id) {
    return addressSiteData.findById(id)
}

async function getAddressSiteByName(siteName) {
    return addressSiteData.findOne({site_name: siteName});
}

async function addAddressSite(site) {
    let siteToAddAddress = new addressSiteData(site)
    return await siteToAddAddress.save()
}

async function updateAddressSite(id, addressSite) {
    return addressSiteData.findByIdAndUpdate(id, { addressSite });
}

async function deleteAddressSiteByName(addressSiteName) {
    return addressSiteData.deleteOne({site_name: addressSiteName})
}

module.exports = {
    getAllAddressSite: getAllAddressSite,
    getAddressSiteById: getAddressSiteById,
    getAddressSiteByName: getAddressSiteByName,
    addAddressSite: addAddressSite,
    updateAddressSite: updateAddressSite,
    deleteAddressSiteByName: deleteAddressSiteByName
}

