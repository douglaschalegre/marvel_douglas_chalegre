import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Icon from '../atoms/icons';

export function Footer() {
  return (
    <footer className='bg-[#ed1b24] py-4 mt-8'>
      <div className='flex container mx-auto justify-center space-x-8'>
        <p className='text-white'>Developed by Douglas Chalegre</p>
        <div className='text-white'>●</div>
        <div className='flex justify-center space-x-4'>
          <a
            href='https://www.linkedin.com/in/seulinkedin/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon icon={FaLinkedin} size='24' color='white' />
          </a>
          <a
            href='https://github.com/seugithub'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon icon={FaGithub} size='24' color='white' />
          </a>
        </div>
      </div>
    </footer>
  );
}
