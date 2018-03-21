
var fs = require('fs')

var cfg = JSON.parse(fs.readFileSync(process.env.ENRICHMENT_CONFIG) + '')

function getConfig() {

	return cfg

}

module.exports = getConfig


