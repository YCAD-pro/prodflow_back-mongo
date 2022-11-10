const {Schema} = require("mongoose")
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/prodflow')

let userSchema = new Schema({
    name: {type: String, require: true},
    password: String,
    email: {type: String, require: true},
    roles: {type: String, require: true},
}, {collection: 'user-data'});
let userData = mongoose.model('UserData', userSchema)

let siteSchema = new Schema({
    site_name: {type: String, require: true},
    site_short_name: String,
    img_url: String,
}, {collection: 'site-data'});
let siteData = mongoose.model('SiteData', siteSchema)

let addressSiteSchema = new Schema({
    site_name: {type: String, require: true},
    road: String,
    city: String,
    post_code: Number,
    country: String
}, {collection: 'addr-site-data'});
let addressSiteData = mongoose.model('AddrSiteData', addressSiteSchema)

// TODO prodLine to add, with specifiques params like inUse or type prod, ...
module.exports = {
    userData: userData,
    addressSiteData: addressSiteData,
    siteData: siteData,
    mongoose: mongoose
}
