import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// select
app.post('/mailer', async (req, res) => {
  // SMTP の設定
  const options = {
    host: process.env.MAILSERVER, // メールサーバー
    port: 465, // ポート番号 25 など
    secure: true, // 465 番ポートを使う場合。それ以外は false
    requireTLS: false,
    tls: {
      rejectUnauthorized: false
    },
    auth: {
      // 認証情報
      user: process.env.MAILER_AUTH_USER, // ユーザー名
      pass: process.env.MAILER_AUTH_PASS // パスワード
    }
  }

  // メールの内容
  const mail = {
    from: process.env.MAILER_FROM_MAILADDRESS, // 送信元メールアドレス `"Sample Company" <no-reply@example.com>`なども可
    to: req.query.mailaddress, // 送信先メールアドレス
    subject: req.query.subject,
    text: req.query.name + `様\nお問い合せありがとうございます。`,
    html:
      '<h3>' +
      req.query.name +
      `様</h3>\n<p>お問い合せありがとうございます。</p>`
  }

  // メールの送信
  try {
    const transport = nodemailer.createTransport(options)
    const result = await transport.sendMail(mail)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
  res.status(200).json('success')
})

export default app
