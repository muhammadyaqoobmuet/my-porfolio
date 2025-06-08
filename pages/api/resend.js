import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req, res) => {
  // get email from req
  const { email, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: "Muhammad Yaqoob <hi@yaqoobhalepoto.engineer>",
      to: [email],
      // Remove CC to yourself initially - can trigger spam filters
      // cc: ["hi@yaqoobhalepoto.engineer"],
      subject: `Thank you for reaching out to Yaqoob`,
      // Add both HTML and text versions
      react: EmailTemplate({ email: email, message: message }),
      // Add headers to improve deliverability
      headers: {
        'X-Entity-Ref-ID': new Date().getTime().toString(),
      },
      // Add reply-to
      replyTo: 'hi@yaqoobhalepoto.engineer',
    });

    console.log("Data from email response: ", data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(400).json(error);
  }
};

export default sendEmail;