import { resendClient, sender } from '../lib/resend.js';
import { createWelcomeEmailTemplate } from '../emails/emailTemplate.js';

export const sendWelcomeEmail = async (email, name, clientURL) => {

    try {
        const { data, error } = await resendClient.emails.send({
            from: `${sender.name} <${sender.email}>`,
            to: email,
            subject: 'Welcome to Chatify!',
            html: createWelcomeEmailTemplate(name, clientURL)
        });

        if (error) {
            console.error('Error sending welcome email:', error);
            return;
        }

        console.log("Welcome Email sent", data);

    } catch (err) {
        console.error("Unexpected Email Error:", err);
    }
};
