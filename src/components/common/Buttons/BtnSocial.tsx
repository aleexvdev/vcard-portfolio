import { motion } from 'framer-motion'
import { TypeSocial } from '../../../types/data';
import { MdFacebook } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface BtnSocialProps {
  props: TypeSocial;
}

const iconCategory = (social: string) => {
  switch (social) {
    case 'Facebook':
      return <MdFacebook className='w-6 h-6 text-light-gray-70 bg-transparent hover:text-light-gray' />
    case 'Instagram':
      return <FaInstagram className='w-6 h-6 text-light-gray-70 bg-transparent hover:text-light-gray' />
    case 'LinkedIn':
      return <FaLinkedin className='w-6 h-6 text-light-gray-70 bg-transparent hover:text-light-gray' />
    case 'Github':
      return <FaGithub className='w-6 h-6 text-light-gray-70 bg-transparent hover:text-light-gray' />
    default:
      return '';
  }
}

export const BtnSocial = ({ props }: BtnSocialProps) => {
  const { name, url } = props;

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <motion.button
        className="bg-transparent"
      >
        {iconCategory(name)}
      </motion.button>
    </Link>
  );
}
