const bcrypt = require('bcryptjs');

/**
   * comparePassword
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */
const comparePassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword)

/**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
const isValidEmail = (email) => {
	const regEx = /\S+@\S+\.\S+/
	return regEx.test(email)
}

/**
   * validatePassword helper method
   * @param {string} password
   * @returns {Boolean} True or False
   */
const validatePassword = (password) => {
	if (password.length <= 5 || password === '') {
		return false
	} return true
}

/**
   * isEmpty helper method
   * @param {string, integer} input
   * @returns {Boolean} True or False
   */
const isEmpty = (input) => {
   if (input === undefined || input === '') {
      return true
   }
   if (input.replace(/\s/g, '').length) {
      return false
   } return true
}

module.exports = {
   comparePassword,
   isValidEmail,
   validatePassword,
   isEmpty,
}