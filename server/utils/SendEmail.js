const nodemailer = require("nodemailer");
const { ApiError } = require("./ApiError");

const SendEmail = async(email,subject, html)=>{
   try {
     const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        service: process.env.SERVICE,
        auth:{
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    await transporter.sendMail({
        from: process.env.USER,
        to:email,
        subject,
        html
    });

    console.log("Email sent Successfully !")
    return true;
   } catch (error) {
    console.error("Error sending email from Nodemailer:",error);
    
    throw new ApiError(500, "Something went wrong while sending email", error)
   }
};

module.exports = SendEmail;