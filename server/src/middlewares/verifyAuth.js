const Utils = require('../helpers/utils.js')

const decodeHeader = (req, res, next) => {
	let token = req.headers['x-access-token'] || req.headers.authorization || req.body.token
	if (!token) {
		res.statusMessage = "No token provided";
        return res.status( 401 ).end()
	}
	if (token.startsWith('Bearer ')) {
		// Remove Bearer from string
		token = token.slice(7, token.length)
		if (!token || token === '') {
			res.statusMessage = "No token provided";
        	return res.status( 401 ).end()
		}
	}
	const decoded = Utils.verifyJWT(token)
	if (!decoded) {
		res.statusMessage = "invalid signature";
        return res.status( 403 ).end()
	}
	if (decoded) res.user = decoded

	res.token = token
	return next()
}

module.exports = { decodeHeader }