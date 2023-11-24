const path = require('path');
const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

require('dotenv').config();

module.exports = class Email {
  constructor(user, url, invoice, business_name) {
    this.to = user.email;
    this.name = user.owner_name ? user.owner_name.split(' ')[0] : user.name;
    this.url = url;
    this.from = `Chat <${process.env.EMAIL_FROM}>`;
    this.invoice = invoice ? invoice : null;
    this.business_name = business_name ? business_name : null;
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

  async send(template, subject, resetToken) {
    const html = pug.renderFile(
      path.join(__dirname, `../views/email/${template}.pug`),
      {
        name: this.name,
        url: this.url,
        subject,
        resetToken,
        invoice: this.invoice ? this.invoice : null,
        business_name: this.business_name ? this.business_name : null
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

  async sendActivation() {
    await this.send('welcome', 'Activate your account!');
  }

  async sendPasswordReset(resetToken) {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 2 minutes)',
      resetToken
    );
  }

  async sendInvoice() {
    await this.send('invoice', 'Your Invoice');
  }

  async sendReceipt() {
    await this.send('paidInvoice', 'Your Receipt');
  }
};
