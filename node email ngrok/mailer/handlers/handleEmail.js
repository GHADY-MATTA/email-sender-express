const fs = require("fs");
const path = require("path");
const sendEmail = require("../services/mailer");

module.exports = async function handleEmail(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password." });
  }

  try {
    const templatePath = path.join(__dirname, "../templates/email_template.txt");
    const raw = fs.readFileSync(templatePath, "utf8");
    const [subjectLine, ...bodyLines] = raw.split("\n");

    const subject = subjectLine.trim();
    const body = bodyLines.join("\n") + `\n\nPassword: ${password}`;

    await sendEmail(email, subject, body);
    res.json({ success: true, message: `Email sent to ${email}` });
  } catch (err) {
    console.error("Error in handler:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
