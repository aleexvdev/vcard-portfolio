import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (body: FormData) => {

  try {
    const dataToSend = {
      name: body.name,
      email: body.email,
      message: body.message,
    };
    const emailjsSend = await emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      dataToSend,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );

    if (emailjsSend) {
      return { error: false, success: true, message: emailjsSend.text, status: emailjsSend.status };
    } else {
      console.error('Error sending email');
      return { error: true, success: false, message: "Error sending email", status: 400 };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: true, success: false, message: "Error sending email", status: 400 };
  }
}