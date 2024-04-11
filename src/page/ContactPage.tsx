import { BsFillSendFill } from 'react-icons/bs';
import { Header } from '../components/common/Header/Header'
import { useState } from 'react';

interface ContactPageProps {
  title: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactPage = ({ title }: ContactPageProps) => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <article className='py-3 lg:py-5 px-2 md:px-6'>
      <Header title={title} />
      <section className='pt-10 pb-2'>
        <div className='mapbox h-96'>
          <figure>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.04473629172!2d-77.15258853388661!3d-12.026254177446859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1712636323849!5m2!1ses-419!2spe" width="600" height="450" loading="lazy"></iframe>
          </figure>
        </div>
      </section>
      <section className='w-full'>
        <h3 className='text-white-two capitalize font-semibold text-2xl'>Contact Form</h3>
        <div className='py-5 w-full'>
          <form onSubmit={handleSubmit}>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
              <div>
                <input
                  type="text"
                  className="w-full h-14 rounded-xl text-white-two font-normal outline-none px-5 text-sm border border-black-one bg-transparent"
                  name="name"
                  id="name"
                  value={formData.name}
                  placeholder='Full Name'
                  autoComplete='off'
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="w-full h-14 rounded-xl text-white-two font-normal outline-none px-5 text-sm border border-black-one bg-transparent"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder='Email address'
                  autoComplete='off'
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <textarea 
              name="message" 
              id="message" 
              className='resize-none min-h-40 text-white-two font-normal outline-none w-full rounded-xl text-sm border border-black-one bg-transparent p-5' 
              placeholder='Your Message'
              onChange={handleInputChange}
            >
              {formData.message}
            </textarea>
            <div className='w-full flex items-center justify-end mt-5'>
              <button type='submit' className='flex items-center justify-center px-5 shadow-sm shadow-black-main-one rounded-xl py-3 gap-3 bg-black-two hover:bg-black-one'>
                <BsFillSendFill className='w-6 h-6 text-orange-yellow-crayola' /> 
                <span className='text-orange-yellow-crayola text-sm capitalize'>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </article>
  )
}

