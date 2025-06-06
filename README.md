# 🔐 Secure OTP Email Sender

A lightweight, production-ready API built with **Node.js** and **Express** that sends one-time passwords (OTPs) or temporary credentials to user emails using **Gmail** and **Nodemailer**.  
It reads a customizable email template from file, appends a dynamic OTP/password, and sends a clean, readable message to any user securely via Gmail.

---

## ✨ Features

- 🚀 **Fast API**: Single POST endpoint `/send` to trigger email
- 💌 **Customizable Templates**: Edit your message in a `.txt` file
- 🔐 **Secure Auth**: Uses Gmail App Password (2FA-compatible)
- 📦 **Modular Design**: Cleanly separated logic (router / handler / mailer)
- 🌍 **Deploy-Ready**: Works with local, Ngrok, or IISNode setup

---

## 📁 Project Structure

```
secure-otp-email-sender/
├── server.js               # Express server entry point
├── .env                    # Env vars for Gmail credentials
├── handlers/
│   └── handleEmail.js      # Handles the POST route logic
├── services/
│   └── mailer.js           # Sends emails via Nodemailer
├── templates/
│   └── email_template.txt  # Plaintext email template
```

---

## 🚀 Quickstart

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/secure-otp-email-sender.git
cd secure-otp-email-sender
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your Gmail credentials

To use Gmail, you **must enable 2-Step Verification** and [create an App Password](https://myaccount.google.com/apppasswords).

Then create a `.env` file:

```env
PORT=3000
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your16digitapppassword
```

> Never use your real Gmail password. Always use an App Password.

---

## ✏️ Customize Email Template

Edit the text inside `templates/email_template.txt`.

```
Your OTP Code
Hello,

Here is your one-time login code:

Please do not share this with anyone.

Thanks,
SecureApp Team
```

The OTP will be automatically added to the end of the message.

---

## 🧪 API Usage

### Endpoint

```
POST /send
```

### Full URL (if using ngrok)

```
https://your-ngrok-subdomain.ngrok.io/send
```

### Request Headers

```http
Content-Type: application/json
```

### Request Body

```json
{
  "email": "recipient@example.com",
  "password": "123456"
}
```

---

## 📧 Sample Output (Email)

**Subject:**
```
Your OTP Code
```

**Body:**
```
Hello,

Here is your one-time login code:

Please do not share this with anyone.

Thanks,
SecureApp Team

OTP Code: 123456
```

---

## 🌐 Run with Ngrok (optional)

Expose your local server to the internet:

```bash
npx ngrok http 3000
```

Copy the HTTPS URL and use it in Postman or your frontend.

---

## 🧠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Ngrok](https://ngrok.com/) (optional)

---

## 📌 Best Practices

- Use `.env` to keep credentials out of code
- Add `.env` to `.gitignore` if using version control
- Never hardcode email addresses or passwords in source files
- Make sure to use Gmail App Passwords only

---

## 📜 License

MIT License – free for personal and commercial use.

---

## 🙋‍♂️ Author

Made by [Your Name] — built for internal use, testing flows, and teaching purposes.  
Pull requests, issues, and forks welcome.

