<h1 align="center">🔐 Secure OTP Email Sender</h1>

<p align="center">
A lightweight, production-ready REST API that sends one-time passwords (OTPs) or temporary credentials to user emails using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Nodemailer</strong> over Gmail.
</p>

<p align="center">
Reads a customizable plaintext email template, injects a secure OTP, and sends it via Gmail using App Passwords. Clean, fast, and deployable via local server, <a href="https://ngrok.com">Ngrok</a>, or IIS.
</p>

<br>

---

## ✨ Features

- ⚡ **Simple POST API** — Just call `/send` with email + OTP
- ✏️ **Customizable Message** — Use a `.txt` template with a fixed subject + body
- 🔐 **Secure Gmail Auth** — Uses Gmail App Passwords with 2FA enabled
- 🧱 **Modular Codebase** — Cleanly separated into `handler`, `mailer`, `template`
- 🌍 **Deploy Anywhere** — Works with Ngrok, localhost, or behind IISNode

---

## 📁 Folder Structure

```
secure-otp-email-sender/
├── server.js               # Express server entry point
├── .env                    # Gmail credentials and port
├── handlers/
│   └── handleEmail.js      # Main logic (parse, validate, send)
├── services/
│   └── mailer.js           # Nodemailer configuration
├── templates/
│   └── email_template.txt  # Subject + Body template
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/secure-otp-email-sender.git
cd secure-otp-email-sender
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Gmail App Password

> You **must enable 2-Step Verification** on your Gmail and generate a **[Gmail App Password](https://myaccount.google.com/apppasswords)**.

Create a `.env` file:

```env
PORT=3000
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your16digitapppassword
```

---

## 📝 Customize Your Email

Edit the content of `templates/email_template.txt`.  
The first line is used as the subject, the rest is the message body.

**Example:**
```
Your OTP Code
Hello,

Here is your one-time login code:

Please do not share this with anyone.

Thanks,
SecureApp Team
```

➡️ The OTP will be appended to the message body automatically.

---

## 🔁 API Endpoint

### 📬 POST `/send`

| Field     | Type     | Required | Description              |
|-----------|----------|----------|--------------------------|
| `email`   | `string` | ✅        | The recipient's email    |
| `password`| `string` | ✅        | OTP or password to send  |

**Example Request:**

```http
POST https://your-ngrok-subdomain.ngrok.io/send
Content-Type: application/json
```

```json
{
  "email": "recipient@example.com",
  "password": "123456"
}
```

---

## 📧 Email Output

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

## 🌍 Expose Locally with Ngrok

```bash
npx ngrok http 3000
```

Use the generated HTTPS link in Postman or your frontend.

---

## 🧠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Ngrok](https://ngrok.com/)

---

## 📌 Best Practices

- ✅ Use `.env` to store credentials securely
- ✅ Add `.env` to `.gitignore`
- ❌ Never hardcode sensitive data
- ✅ Use Gmail App Passwords (not your real password)
- ✅ Keep template text editable for easy reuse

---

## 🪪 License

MIT License — free for personal and commercial use.

---

## 🙋‍♂️ Author

**[Ghady Matta](https://www.linkedin.com/in/ghady-matta-a92a3b28b/)**  
IoT Developer | IT Manager | Full-Stack Engineer

> Built for internal tools, IoT dashboards, and secure email OTP systems.

---

