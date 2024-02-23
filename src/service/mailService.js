const nodemailer = require("nodemailer");

// Khởi tạo transporter để gửi email
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    auth: {
      user: "chuberogt@gmail.com",
      pass: "qzeiowlvzbxbdmqf",
    },
  },
});

const sendMailService = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: "chuberogt@gmail.com",
      to: to,
      subject: subject,
      html: `Xin chào,<br>${text}`,
    };

    await transporter.sendMail(mailOptions);

    return { msg: "Success" };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  sendMailService,
};
