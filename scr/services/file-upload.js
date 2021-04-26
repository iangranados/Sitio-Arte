const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: 'OMq0J/ztLDS7S83j/fMFRYQesVKnz41JtKdhU1GA',
    accessKeyId: 'AKIATPZGQEGILU5ZNDZJ',
    region: 'us-east-2'
})

const s3 = new aws.S3()

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'sitioarte',
        acl: 'public-read',
        key: function (req, file, cb) {
        cb(null, Date.now().toString())
        }
    })
})

module.exports = upload;