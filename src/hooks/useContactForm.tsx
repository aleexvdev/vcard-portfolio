import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { sendEmail } from '../service/sendEmail';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();
  const [isMessageSuccess, setMessageSuccess] = useState<boolean>(false);


  useEffect(() => {
    if (isMessageSuccess) {
      const timer = setTimeout(() => {
        setMessageSuccess(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [isMessageSuccess]);

  const onSubmit = async (data: FormData) => {
    const { error, success } = await sendEmail(data);
    if (success) {
      setMessageSuccess(true);
      reset();
    } else {
      console.error(error)
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isMessageSuccess,
    onSubmit,
  };
}
