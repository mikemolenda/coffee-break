require('dotenv').config()
let secureEnv = require('secure-env')
global.env = secureEnv({ secret: 'secret' })
console.log(global.env.MAIL_PASS)

const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})