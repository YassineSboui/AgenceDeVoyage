const nodemailer = require("nodemailer");
const Mail = require('../models/mail');


exports.sendmail = (req, res, next) => {
    async function main() {
        const mail = new Mail({ ...req.body });

        let transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: "yassinosb7@gmail.com",
                pass: "sab3oun7",
            },
            tls: { rejectUnauthorized: false }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: "yassinosb7@gmail.com", // sender address
            to: "ys.sboui7@gmail.com", // list of receivers
            subject: mail.subject, // Subject line
            text: " Name: " + mail.name + "\n Mail: " + mail.mail + " :\n " + mail.text // plain text body

        }).then(() => res.status(200).json({ remessage: "mail envoyé" }))
            .catch(error => res.status(400).json({ error }));;

    }

    main().catch(console.error);
}

exports.sendresult = (req, res, next) => {
    async function main() {
        const mail = new Mail({ ...req.body });

        let transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: "yassinosb7@gmail.com",
                pass: "sab3oun7",
            },
            tls: { rejectUnauthorized: false }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: "yassinosb7@gmail.com", // sender address
            to: mail.mail, // list of receivers
            subject: mail.subject, // Subject line
            text: mail.text // plain text body

        }).then(() => res.status(200).json({ remessage: "mail envoyé" }))
            .catch(error => res.status(400).json({ error }));;

    }

    main().catch(console.error);
}