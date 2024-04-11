import { CardAbout } from '../components/common/Cards/CardAbout';
import { Header } from '../components/common/Header/Header';
import { Tooltip } from '../components/common/Tooltip/Tooltip';
import { services, skills } from '../data/data';

interface AboutPageProps {
  title: string;
}

export const AboutPage = ({ title }: AboutPageProps) => {
  return (
    <article className='py-3 lg:py-5 px-2 md:px-6'>
      <Header title={title} />
      <section className='py-3'>
        <div className='text-light-gray font-light leading-6 pt-4 lg:pt-8'>
          <p className='mb-7 text-sm md:text-base'>
            Desarrollador Full-Stack con experiencia en la construcción de aplicaciones web robustas y escalables. Apasionado por la innovación tecnológica, me mantengo actualizado con las últimas tendencias y herramientas, lo que me permite entregar soluciones vanguardistas y eficientes. Mi atención se centra en escribir código limpio, modular y fácil de mantener, siguiendo las mejores prácticas de programación.
          </p>
        </div>
      </section>
      <section className='py-3'>
        <h3 className='text-white-two capitalize font-semibold text-xl md:text-2xl'>What I'm doing</h3>
        <div className='py-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {
            services.map((item, key) => (
              <CardAbout key={key} props={item} />
            ))
          }
        </div>
      </section>
      <section className='py-3'>
        <h3 className='text-white-two capitalize font-semibold text-xl md:text-2xl'>My Skills</h3>
        <div className='w-full h-auto flex items-center justify-center gap-y-5 flex-wrap my-10'>
          {
            skills.map((item, key) => (
              <Tooltip key={key} message={item.skill}>
                <figure>
                  <img src={item.image} alt={item.skill} className='min-w-10 px-5 py-2'/>
                </figure>
              </Tooltip>
            ))
          }
        </div>
      </section>
    </article>
  )
}
