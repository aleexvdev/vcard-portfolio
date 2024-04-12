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
      'service_4l0dhj5',
      'template_7pgmzyh',
      dataToSend,'FxnI-nRC2aLUqth9D'
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