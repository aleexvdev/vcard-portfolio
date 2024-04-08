import { Header } from '../components/common/Header/Header';

interface AboutPageProps {
  title: string;
}

export const AboutPage = ({ title }: AboutPageProps) => {
  return (
    <section className='p-5'>
      <Header title={title} />
      <p>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
        I enjoy
        turning complex problems into simple, beautiful and intuitive designs.
      </p>

      <p>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        Moreover, I
        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your
        message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
    </section>
  )
}
