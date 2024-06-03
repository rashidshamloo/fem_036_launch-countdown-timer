import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="hover:[&_a]:text-softRed flex flex-col items-center justify-center gap-8 [&_a]:transition-all [&_a]:duration-300">
      <ul className="text-grayishBlue flex items-center justify-center gap-8">
        <li>
          <Link href="#" title="Facebook">
            <FaFacebook fontSize={24} />
          </Link>
        </li>
        <li>
          <Link href="#" title="Pinterest">
            <FaPinterest fontSize={24} />
          </Link>
        </li>
        <li>
          <Link href="#" title="Instagram">
            <FaInstagram fontSize={24} />
          </Link>
        </li>
      </ul>
      <div className="text-grayishBlue mb-2 text-xs [&_a]:font-bold">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Powered by{' '}
        <a
          href="https://pqina.nl/?ref=credits"
          target="_blank"
          rel="noopener noreferrer"
        >
          PQINA
        </a>
        . Coded by{' '}
        <a href="https://github.com/rashidshamloo" target="_blank">
          Rashid Shamloo
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
