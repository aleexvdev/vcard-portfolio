import { CardAbout } from '../components/Cards/CardAbout';
import { Header } from '../components/common/Header/Header';
import { services } from '../data/data';

interface AboutPageProps {
  title: string;
}

export const AboutPage = ({ title }: AboutPageProps) => {
  return (
    <>
      <section className='p-5'>
        <Header title={title} />
        <div className='text-light-gray font-light leading-6 pt-8'>
          <p className='mb-7'>
            Full-Stack Developer with experience in building robust and scalable web applications. Passionate about technological innovation, I stay up-to-date with the latest trends and tools, enabling me to deliver cutting-edge and efficient solutions. My focus is on writing clean, modular, and easily maintainable code, following best programming practices.
          </p>
          <p>
            Throughout my career, I have developed solid skills in technologies such as PHP, Laravel, JavaScript, React, Redux, HTML, CSS, and relational databases. I excel at creatively and effectively solving complex problems, always striving to optimize performance and user experience. Additionally, I possess excellent communication and teamwork abilities, allowing me to collaborate closely with designers, developers, and stakeholders to deliver successful projects that meet business objectives.
          </p>
        </div>
      </section>
      <section className='px-5 py-3'>
        <h3 className='text-white-two capitalize font-medium text-2xl'>What I'm doing</h3>
        <div className='py-5 w-full grid grid-cols-2 gap-5'>
          {
            services.map((item, key) => (
              <CardAbout key={key} props={item} />
            ))
          }
        </div>
      </section>
    </>
  )
}
