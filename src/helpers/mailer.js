// ===== Mailer
// import all modules
const mailer = require('nodemailer')

const { EMAIL: user, EMAIL_PASSWORD: pass } = process.env

module.exports = (reciever, title, message) => {
  const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass
    }
  })

  const mailOptions = {
    from: user,
    to: reciever,
    subject: title,
    html: message
  }

  transporter.sendMail(mailOptions, err => {
    if (err) {
      throw err
    }
  })
}
