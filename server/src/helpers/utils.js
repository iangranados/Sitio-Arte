/* eslint-disable no-tabs */
const jwt = require('jsonwebtoken')
const fs = require('fs')

const publicKEY = fs.readFileSync('./public.key', 'utf8')

const i = 'jwt-node'
const s = 'jwt-node'
const a = 'jwt-node'

const verifyOptions = {
	issuer: i,
	subject: s,
	audience: a,
	expiresIn: '5d',
	algorithm: ['RS256'],
}

const generateJWT = (payload) => {
	const privateKEY = process.env.RSA_PRIVATE_KEY

	const signOptions = {
		issuer: i,
		subject: s,
		audience: a,
		expiresIn: '5d',
		algorithm: 'RS256',
	}

	const options = signOptions
	if (payload && payload.exp) {
		delete options.expiresIn
	}
	return jwt.sign(payload, privateKEY, options)
}

const verifyJWT = (payload) => {
	try {
		return jwt.verify(payload, publicKEY, verifyOptions)
	} catch(e) { return null }
}

module.exports = {
	verifyJWT, generateJWT
}