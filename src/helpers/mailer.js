// ===== Mailer
// import all modules
const mailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const config = require('../config/config')

module.exports = (reciever, title, message) => {
  const transporter = mailer.createTransport(smtpTransport(config.mailerOptions))

  const mailOptions = {
    from: config.mailerOptions.auth.user,
    to: reciever,
    subject: title,
    html: message
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
    }
    console.log(info)
  })
}
