const path = require('path');
const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

require('dotenv').config();

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.name = user.owner_name.split(' ')[0];
    this.url = url;
    this.from = `Chat <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    // if (process.env.NODE_ENV === 'production') {
    //   return nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //       user: process.env.EMAIL_PASSWORD,
    //       pass: process.env.GMAIL_PASSWORD
    //     }
    //   });
    // }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(
      path.join(__dirname, `../views/email/${template}.pug`),
      {
        name: this.name,
        url: this.url,
        subject
      }
    );

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html)
    };
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to Klusterthon!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)'
    );
  }
};
