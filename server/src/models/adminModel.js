const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    priviledge: {type: Boolean, default: true}
}, { timestamps: true });

mongoose.pluralize(null);

const AdminCollection = mongoose.model('admin', AdminSchema);

const Admin = {
    getAdminUser: function({ email }) {
        return AdminCollection.findOne({email})
    },
    addNewAdmin: function({ email, password }) {
        const hash = bcrypt.hashSync(password, 10); 
        return AdminCollection.create( {email, password: hash} )
    }
}

// AdminSchema.methods.encryptPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = bcrypt.hash(password, salt);
//     return hash;
// };

// AdminSchema.methods.matchPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };

// AdminSchema.methods.getAdminUser = function ( email ) {
//     return 
// }

module.exports = { Admin };